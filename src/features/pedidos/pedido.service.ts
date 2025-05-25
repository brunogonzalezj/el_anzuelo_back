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
  // Crea un nuevo pedido, verificando si la mesa está disponible, si es tipo DELIVERY no se requiere mesa. Si es tipo MESA, verifica que la mesa esté disponible y cambia el estado a OCUPADA. Si es delivery, no se requiere mesa.
  // Si la mesa está ocupada, lanza un error.
  // Si el pedido es de tipo DELIVERY, no se requiere mesa.
  if (data.tipoPedido === 'MESA') {
    const mesa = await prisma.mesa.findUnique({
      where: { id: data.mesaId },
    });

    if (!mesa) {
      throw new AppError('Mesa no encontrada', 404);
    }

    if (mesa.estado !== 'DISPONIBLE') {
      throw new AppError('La mesa está ocupada o reservada', 400);
    }
    if (mesa.estado === 'DISPONIBLE' && mesa){
      const pedido = await prisma.pedido.create({
        data: {
          ...data,
          estado: EstadoPedido.PENDIENTE,
          fechaCreacion: new Date(),
          tipoPedido: data.tipoPedido,
        },
        include: {
          detalles: true
        },
      });
      await prisma.mesa.update({
        where: { id: data.mesaId },
        data: { estado: 'OCUPADA' },
      });
    }
  }
 }

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
