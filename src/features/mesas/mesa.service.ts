// src/features/mesas/mesa.service.ts
import { prisma } from '../../config/prisma.config';
import { AppError } from '../../../core/errors/app-error';
import { CreateMesaDto, UpdateMesaDto } from './mesa.dto';

export const getMesas = async () => {
  return prisma.mesa.findMany();
};

export const getMesaById = async (id: number) => {
  const mesa = await prisma.mesa.findUnique({
    where: { id },
  });

  if (!mesa) {
    throw new AppError('Mesa no encontrada', 404);
  }

  return mesa;
};

export const getMesaByNumero = async (numero: number) => {
  const mesa = await prisma.mesa.findUnique({
    where: { numero },
  });

  if (!mesa) {
    throw new AppError('Mesa no encontrada', 404);
  }

  return mesa;
};

export const createMesa = async (data: CreateMesaDto) => {
  // Verificar si ya existe una mesa con el mismo número
  const existeMesa = await prisma.mesa.findUnique({
    where: { numero: data.numero },
  });

  if (existeMesa) {
    throw new AppError(`Ya existe una mesa con el número ${data.numero}`, 400);
  }

  return prisma.mesa.create({
    data,
  });
};

export const updateMesa = async (id: number, data: UpdateMesaDto) => {
  await getMesaById(id);
  return prisma.mesa.update({
    where: { id },
    data,
  });
};

export const deleteMesa = async (id: number) => {
  const mesa = await getMesaById(id);

  // Verificar si hay pedidos activos para esta mesa
  const pedidosActivos = await prisma.pedido.findFirst({
    where: {
      mesaId: id,
      estado: {
        in: ['PENDIENTE', 'PREPARANDO', 'LISTO'],
      },
    },
  });

  if (pedidosActivos) {
    throw new AppError('No se puede eliminar la mesa porque tiene pedidos activos', 400);
  }

  return prisma.mesa.delete({
    where: { id },
  });
};