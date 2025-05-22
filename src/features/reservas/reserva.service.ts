import { prisma } from '../../config/prisma.config';
import { AppError } from '../../../core/errors/app-error';
import { CreateReservaDto, UpdateReservaDto } from './reserva.dto';

export const getReservas = async () => {
  return prisma.reserva.findMany({
    include: {
      mesa: true,
    },
  });
};

export const getReservaById = async (id: number) => {
  const reserva = await prisma.reserva.findUnique({
    where: { id },
    include: {
      mesa: true,
    },
  });

  if (!reserva) {
    throw new AppError('Reserva no encontrada', 404);
  }

  return reserva;
};

export const createReserva = async (data: CreateReservaDto) => {
  // Verificar disponibilidad de mesa si se especifica
  if (data.mesaId) {
    const mesa = await prisma.mesa.findUnique({
      where: { id: data.mesaId },
    });

    if (!mesa) {
      throw new AppError('Mesa no encontrada', 404);
    }

    // Verificar si la capacidad es suficiente
    if (mesa.capacidad < data.cantPersonas) {
      throw new AppError(
        'La mesa no tiene capacidad suficiente para esta reserva',
        400
      );
    }

    // Verificar si la mesa ya está reservada para el mismo día y hora
    const reservaExistente = await prisma.reserva.findFirst({
      where: {
        mesaId: data.mesaId,
        fecha: new Date(data.fecha),
        hora: data.hora,
      },
    });

    if (reservaExistente) {
      throw new AppError(
        'La mesa ya está reservada para esa fecha y hora',
        400
      );
    }
  } else if (data.sectorPreferido) {
    // Si no se especifica mesa pero sí sector, intentar buscar mesa disponible
    // en ese sector con capacidad suficiente
    const mesasDisponibles = await prisma.mesa.findMany({
      where: {
        sector: data.sectorPreferido,
        capacidad: {
          gte: data.cantPersonas,
        },
        estado: 'DISPONIBLE',
      },
    });

    if (mesasDisponibles.length > 0) {
      // Asignar la primera mesa disponible
      data.mesaId = mesasDisponibles[0].id;
    }
  }

  return prisma.reserva.create({
    data: {
      ...data,
      fecha: new Date(data.fecha),
    },
    include: {
      mesa: true,
    },
  });
};

export const updateReserva = async (id: number, data: UpdateReservaDto) => {
  await getReservaById(id);

  // Si se cambia la mesa, verificar capacidad y disponibilidad
  if (data.mesaId) {
    const mesa = await prisma.mesa.findUnique({
      where: { id: data.mesaId },
    });

    if (!mesa) {
      throw new AppError('Mesa no encontrada', 404);
    }

    // Verificar capacidad si se especifica cantPersonas o usar la de la reserva existente
    if (data.cantPersonas && mesa.capacidad < data.cantPersonas) {
      throw new AppError(
        'La mesa no tiene capacidad suficiente para esta reserva',
        400
      );
    }

    // Verificar disponibilidad para la nueva fecha/hora si se cambian
    if (data.fecha || data.hora) {
      const fecha = data.fecha || (await getReservaById(id)).fecha;
      const hora = data.hora || (await getReservaById(id)).hora;

      const reservaExistente = await prisma.reserva.findFirst({
        where: {
          mesaId: data.mesaId,
          fecha,
          hora,
          id: { not: id }, // Excluir la reserva actual
        },
      });

      if (reservaExistente) {
        throw new AppError(
          'La mesa ya está reservada para esa fecha y hora',
          400
        );
      }
    }
  }

  return prisma.reserva.update({
    where: { id },
    data,
    include: {
      mesa: true,
    },
  });
};

export const deleteReserva = async (id: number) => {
  await getReservaById(id);
  return prisma.reserva.delete({
    where: { id },
  });
};
