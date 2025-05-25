// src/features/extras/extras.service.ts
import { prisma } from '../../config/prisma.config';
import { AppError } from '../../../core/errors/app-error';
import { CreateExtraDto, UpdateExtraDto } from './extra.dto';

export const getExtras = async () => {
  return prisma.extra.findMany();
};

export const getExtraById = async (id: number) => {
  const extra = await prisma.extra.findUnique({
    where: { id },
    include: {
      platos: {
        include: {
          plato: true,
        },
      },
    },
  });

  if (!extra) {
    throw new AppError('Extra no encontrado', 404);
  }

  return extra;
};

export const createExtra = async (data: CreateExtraDto) => {
  return prisma.extra.create({
    data,
  });
};

export const updateExtra = async (id: number, data: UpdateExtraDto) => {
  await getExtraById(id);
  return prisma.extra.update({
    where: { id },
    data,
  });
};

export const deleteExtra = async (id: number) => {
  await getExtraById(id);
  return prisma.extra.delete({
    where: { id },
  });
};

export const getExtrasPorPlato = async (platoId: number) => {
  const extrasPlatos = await prisma.extraPlato.findMany({where: {idPlato: platoId}})

  const extras = extrasPlatos.map(async(extraPlato)=>{
    const extra = await prisma.extra.findUnique({where: {id: extraPlato.idExtra}})

    return extra;
  })

  await Promise.all(extras)

  console.log(extras)

  if (!extras) {
    throw new AppError('No se encontraron extras para este plato', 404);
  }

  return extras;
}

export const deleteExtraPlato = async (platoId: number) => {
  // Verificar si el plato existe
  const plato = await prisma.plato.findUnique({
    where: { id: platoId },
  });

  if (!plato) {
    throw new AppError('Plato no encontrado', 404);
  }

  // Eliminar todas las relaciones de extra-plato para este plato
  return prisma.extraPlato.deleteMany({
    where: { idPlato: platoId }
  });
};