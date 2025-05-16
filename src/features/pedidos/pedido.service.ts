// src/features/pedidos/pedido.service.ts
import { prisma } from '../../config/prisma.config';
import { AppError } from '../../../core/errors/app-error';
import { CreatePedidoDto, UpdatePedidoDto } from './pedido.dto';
import { EstadoPedido } from '../../generated/prisma';

export const getPedidos = async () => {
  return prisma.pedido.findMany({
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
  const { detalles, ...pedidoData } = data;

  // Validar mesa si se proporciona ID
  if (pedidoData.mesaId) {
    const mesa = await prisma.mesa.findUnique({
      where: { id: pedidoData.mesaId },
    });

    if (!mesa) {
      throw new AppError('Mesa no encontrada', 404);
    }

    // Actualizar estado de la mesa
    await prisma.mesa.update({
      where: { id: pedidoData.mesaId },
      data: { estado: 'OCUPADA' },
    });
  }

  // Calcular total y crear el pedido con sus detalles
  let total = 0;

  // Transacción para crear pedido y todos sus detalles
  const pedido = await prisma.$transaction(async (tx) => {
    // Crear el pedido
    const nuevoPedido = await tx.pedido.create({
      data: {
        ...pedidoData,
        total: 0, // Se actualizará después
      },
    });

    // Crear los detalles del pedido
    for (const detalle of detalles) {
      const plato = await tx.plato.findUnique({
        where: { id: detalle.platoId },
      });

      if (!plato) {
        throw new AppError(`Plato con ID ${detalle.platoId} no encontrado`, 404);
      }

      const subtotal = plato.precio * detalle.cantidad;
      total += subtotal;

      const nuevoDetalle = await tx.detallePedido.create({
        data: {
          pedidoId: nuevoPedido.id,
          platoId: detalle.platoId,
          cantidad: detalle.cantidad,
          subtotal,
        },
      });

      // Crear detalles de extras si existen
      if (detalle.extras && detalle.extras.length > 0) {
        for (const extra of detalle.extras) {
          const extraExiste = await tx.extra.findUnique({
            where: { id: extra.extraId },
          });

          if (!extraExiste) {
            throw new AppError(`Extra con ID ${extra.extraId} no encontrado`, 404);
          }

          await tx.detalleExtra.create({
            data: {
              detallePedidoId: nuevoDetalle.id,
              extraId: extra.extraId,
              cantidad: extra.cantidad,
            },
          });
        }
      }
    }

    // Actualizar el total del pedido
    return tx.pedido.update({
      where: { id: nuevoPedido.id },
      data: { total },
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
  });

  return pedido;
};

export const updatePedido = async (id: number, data: UpdatePedidoDto) => {
  const pedido = await getPedidoById(id);

  // Si cambia el estado a ENTREGADO y hay mesa, liberar la mesa
  if (data.estado === EstadoPedido.ENTREGADO && pedido.mesaId) {
    await prisma.mesa.update({
      where: { id: pedido.mesaId },
      data: { estado: 'DISPONIBLE' },
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
}