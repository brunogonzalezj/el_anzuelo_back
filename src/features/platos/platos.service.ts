// src/features/platos/plato.service.ts
import { prisma } from '../../config/prisma.config';
import { AppError } from '../../../core/errors/app-error';
import { CreatePlatoDto, UpdatePlatoDto } from './plato.dto';

export const getPlatos = async () => {
  return prisma.plato.findMany({
    include: {
      extras: {
        include: {
          extra: true,
        },
      },
    },
  });
};

export const getPlatoById = async (id: number) => {
  const plato = await prisma.plato.findUnique({
    where: { id },
    include: {
      extras: {
        include: {
          extra: true,
        },
      },
    },
  });

  if (!plato) {
    throw new AppError('Plato no encontrado', 404);
  }

  return plato;
};

export const createPlato = async (data: CreatePlatoDto) => {
  const { extras, ...rest } = data;

  // Asegúrate de que rest incluya la propiedad 'categoria'
  // Si no está en el DTO, deberías agregarla o manejarla adecuadamente
  const platoCreado = await prisma.plato.create({
    data: {
      ...rest,
      categoria: rest.categoria // Asegúrate de que esta propiedad existe en el DTO
    }
  });

  if (extras !== undefined) {
    for (const extraId of extras) {
      await prisma.extraPlato.create({
        data: {
          idPlato: platoCreado.id,
          idExtra: extraId
        }
      });
    }
  }

  const plato = await prisma.plato.findUnique({
    where: { id: platoCreado.id },
    include: { extras: true }
  });

  return plato;
};

export const updatePlato = async (id: number, data: UpdatePlatoDto) => {
  await getPlatoById(id);

  // Extraemos extras del DTO para manejarlo separadamente
  const { extras, ...restData } = data;

  // Si hay extras, los manejamos con el formato adecuado para Prisma
  if (extras !== undefined) {
    // Primero actualizamos el plato sin los extras
    await prisma.plato.update({
      where: { id },
      data: restData,
    });

    // Luego eliminamos todos los extras existentes
    await prisma.extraPlato.deleteMany({
      where: { idPlato: id },
    });

    // Finalmente creamos las nuevas relaciones
    for (const extraId of extras) {
      await prisma.extraPlato.create({
        data: {
          idPlato: id,
          idExtra: extraId,
        },
      });
    }

    return prisma.plato.findUnique({
      where: { id },
      include: { extras: { include: { extra: true } } },
    });
  }

  // Si no hay extras, simplemente actualizamos el plato
  return prisma.plato.update({
    where: { id },
    data: restData,
    include: { extras: { include: { extra: true } } },
  });
};

export const deletePlato = async (id: number) => {
  await getPlatoById(id);
  return prisma.plato.delete({
    where: { id },
  });
};

export const addExtraToPlato = async (platoId: number, extraId: number) => {
  await getPlatoById(platoId);

  const extraExists = await prisma.extra.findUnique({
    where: { id: extraId },
  });

  if (!extraExists) {
    throw new AppError('Extra no encontrado', 404);
  }

  return prisma.extraPlato.create({
    data: {
      idPlato: platoId,
      idExtra: extraId,
    },
    include: {
      plato: true,
      extra: true,
    },
  });
};

export const quitarExtra = async (platoId: number, extraId: number) => {
  const extraPlato = await prisma.extraPlato.findFirst({
    where: {
      idPlato: platoId,
      idExtra: extraId,
    },
  });

  if (!extraPlato) {
    throw new AppError('Relación plato-extra no encontrada', 404);
  }

  return prisma.extraPlato.delete({
    where: { id: extraPlato.id },
  });
};

export const asignarExtras = async (platoId: number, extraIds: number[]) => {
  await getPlatoById(platoId);

  const extras = await prisma.extra.findMany({
    where: {
      id: {
        in: extraIds,
      },
    },
  });

  if (extras.length !== extraIds.length) {
    throw new AppError('Algunos extras no fueron encontrados', 404);
  }

  const extraPlatos = await Promise.all(
    extras.map((extra: any) =>
      prisma.extraPlato.create({
        data: {
          idPlato: platoId,
          idExtra: extra.id,
        },
      })
    )
  );

  return extraPlatos;
}