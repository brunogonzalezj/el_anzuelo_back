  // src/features/pedidos/pedido.service.ts
import { prisma } from '../../config/prisma.config';
import { AppError } from '../../../core/errors/app-error';
import { CreatePedidoDto, UpdatePedidoDto } from './pedido.dto';
import { EstadoPedido, Prisma } from '../../generated/prisma';

export const getPedidos = async () => {
  return prisma.pedido.findMany({
    include: {
      mesa: true,
      mesero: true,
      repartidor: true,
      detalles: {
        include: {
          plato: true,
        },
      },
    },
  });
};

export const getPedidoById = async (id: number) => {
  const pedido = await prisma.pedido.findUnique({
    where: { id },
    include: {
      mesa: true,
      mesero: true,
      repartidor: true,
      detalles: {
        include: {
          plato: true,
          detallesExtra: {
            include: {
              extra: true,
            },
          },
        },
      },
    },
  });

  if (!pedido) {
    throw new AppError('Pedido no encontrado', 404);
  }

  return pedido;
};

  export const createPedido = async (data: CreatePedidoDto) => {
    // Validaciones iniciales
    if (data.tipoPedido === 'MESA') {
      // Verificar si se proporcionó mesaId para pedidos en mesa
      if (!data.mesaId) {
        throw new AppError('El ID de la mesa es requerido para pedidos en mesa', 400);
      }

      // Verificar si la mesa existe y está disponible
      const mesa = await prisma.mesa.findUnique({
        where: { id: data.mesaId },
      });

      if (!mesa) {
        throw new AppError('Mesa no encontrada', 404);
      }

      if (mesa.estado !== 'DISPONIBLE') {
        throw new AppError('La mesa no está disponible', 400);
      }

      // Marcar la mesa como ocupada
      await prisma.mesa.update({
        where: { id: data.mesaId },
        data: { estado: 'OCUPADA' },
      });
    } else if (data.tipoPedido === 'DELIVERY') {
      // Verificar datos necesarios para delivery
      if (!data.nombreCliente || !data.direccionCliente || !data.telefonoCliente) {
        throw new AppError('Para pedidos a domicilio se requiere nombre, dirección y teléfono del cliente', 400);
      }
    }

    // Calcular total si no se proporciona
    let total = data.total || 0;

    // Crear el pedido
    const pedido = await prisma.pedido.create({
      data: {
        tipoPedido: data.tipoPedido,
        mesaId: data.tipoPedido === 'MESA' ? data.mesaId : null,
        nombreCliente: data.nombreCliente,
        direccionCliente: data.direccionCliente,
        telefonoCliente: data.telefonoCliente,
        total: total,
        detalles: {
          create: data.detalles?.map(detalle => ({
            platoId: detalle.platoId,
            cantidad: detalle.cantidad,
            subtotal: detalle.subtotal,
          }))
        }
      },
      include: {
        mesa: true,
        detalles: {
          include: {
            plato: true,
          }
        }
      }
    });

    return pedido;
  };

export const updatePedido = async (id: number, data: UpdatePedidoDto) => {
  const pedido = await getPedidoById(id);

  // Si cambia el estado a ENTREGADO y hay mesa, liberar la mesa
  if (data.estado === EstadoPedido.ENTREGADO && pedido.mesaId) {
    await prisma.mesa.update({
      where: { id: pedido.mesaId },
      data: { estado: 'DISPONIBLE'},
    });
  }

  return prisma.pedido.update({
    where: { id },
    data,
    include: {
      mesa: true,
      mesero: true,
      repartidor: true,
      detalles: {
        include: {
          plato: true,
          detallesExtra: {
            include: {
              extra: true,
            },
          },
        },
      },
    },
  });
};

export const deletePedido = async (id: number) => {
  const pedido = await getPedidoById(id);

  // Liberar la mesa si existe
  if (pedido.mesaId) {
    await prisma.mesa.update({
      where: { id: pedido.mesaId },
      data: { estado: 'DISPONIBLE' },
    });
  }

  return prisma.pedido.delete({
    where: { id },
  });
};

export const cambiarEstado = async (id: number, estado: EstadoPedido) => {
  const pedido = await getPedidoById(id);

  // Si cambia el estado a ENTREGADO y hay mesa, liberar la mesa
  if (estado === EstadoPedido.ENTREGADO && pedido.mesaId) {
    await prisma.mesa.update({
      where: { id: pedido.mesaId },
      data: { estado: 'DISPONIBLE' },
    });
  }

  return prisma.pedido.update({
    where: { id },
    data: { estado },
    include: {
      mesa: true,
      mesero: true,
      repartidor: true,
      detalles: {
        include: {
          plato: true,
          detallesExtra: {
            include: {
              extra: true,
            },
          },
        },
      },
    },
  });
};
