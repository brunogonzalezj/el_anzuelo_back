// src/features/inventario/inventario.service.ts
import { prisma } from '../../config/prisma.config';
import { AppError } from '../../../core/errors/app-error';
import { CreateItemInventarioDto, UpdateItemInventarioDto } from './inventario.dto';
import { formatCategoria } from '../../../core/utils/format-utils';

export const getInventario = async () => {
  return prisma.itemInventario.findMany();
};

export const getItemInventarioById = async (id: number) => {
  const item = await prisma.itemInventario.findUnique({
    where: { id },
    include: {
      extras: true,
    },
  });

  if (!item) {
    throw new AppError('Item de inventario no encontrado', 404);
  }

  return item;
};

export const getInventarioPorCategoria = async (categoria: string) => {
  // Formatear la categoría si es necesario
  const categoriaFormateada = formatCategoria(categoria);

  return prisma.itemInventario.findMany({
    where: {
      categoria: categoriaFormateada as any,
    },
  });
};

export const createItemInventario = async (data: CreateItemInventarioDto) => {
  return prisma.itemInventario.create({
    data,
  });
};

export const updateItemInventario = async (id: number, data: UpdateItemInventarioDto) => {
  await getItemInventarioById(id);
  return prisma.itemInventario.update({
    where: { id },
    data,
  });
};

export const deleteItemInventario = async (id: number) => {
  await getItemInventarioById(id);

  // Verificar si está vinculado a algún extra
  const itemConExtra = await prisma.extra.findFirst({
    where: { id },
  });

  if (itemConExtra) {
    throw new AppError('No se puede eliminar este item porque está asociado a un extra', 400);
  }

  return prisma.itemInventario.delete({
    where: { id },
  });
};

export const actualizarStock = async (id: number, cantidad: number) => {
  const item = await getItemInventarioById(id);

  const nuevoStock = item.stockActual + cantidad;

  if (nuevoStock < 0) {
    throw new AppError('No hay suficiente stock para esta operación', 400);
  }

  return prisma.itemInventario.update({
    where: { id },
    data: {
      stockActual: nuevoStock,
    },
  });
};