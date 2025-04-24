import { prisma } from '../../config/prisma.config';
import { Prisma } from '../../generated/prisma';

export const getExtras = async () => {
  const extras = await prisma.extra.findMany();
  return extras;
};

export const getExtraById = async (id: number) => {
  const extra = await prisma.extra.findUnique({
    where: { id },
  });
  return extra;
};

export const createExtra = async (extra: Prisma.ExtraCreateInput) => {
  const newExtra = await prisma.extra.create({
    data: extra,
  });
  return newExtra;
};

export const updateExtra = async (
  id: number,
  extra: Prisma.ExtraUpdateInput
) => {
  const updatedExtra = await prisma.extra.update({
    where: { id },
    data: extra,
  });
  return updatedExtra;
};

export const deleteExtra = async (id: number) => {
  const deletedExtra = await prisma.extra.delete({
    where: { id },
  });
  return deletedExtra;
};
