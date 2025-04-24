import { prisma } from '../../config/prisma.config';
import { Prisma } from '../../generated/prisma';

export const getPlatos = async () => {
  const platos = await prisma.plato.findMany();

  return platos;
};

export const createPlato = async (plato: Prisma.PlatoCreateInput) => {
  const newPlato = await prisma.plato.create({
    data: plato,
  });

  return newPlato;
};
