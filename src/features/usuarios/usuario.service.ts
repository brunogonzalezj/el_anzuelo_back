// src/features/usuarios/usuario.service.ts
import { prisma } from '../../config/prisma.config';
import { AppError } from '../../../core/errors/app-error';
import { CreateUsuarioDto, UpdateUsuarioDto } from './usuario.dto';
import * as bcrypt from 'bcrypt';
import * as jwt from 'jsonwebtoken';

export const getUsuarios = async () => {
  return prisma.usuario.findMany({
    select: {
      id: true,
      nombre: true,
      apellido: true,
      username: true,
      rol: true,
      estado: true,
      password: false,
    },
  });
};

export const getUsuarioById = async (id: number) => {
  const usuario = await prisma.usuario.findUnique({
    where: { id },
    select: {
      id: true,
      nombre: true,
      apellido: true,
      username: true,
      rol: true,
      estado: true,
      password: false,
    },
  });

  if (!usuario) {
    throw new AppError('Usuario no encontrado', 404);
  }

  return usuario;
};

export const getUsuariosPorRol = async (rol: string) => {
  return prisma.usuario.findMany({
    where: {
      rol: rol as any,
    },
    select: {
      id: true,
      nombre: true,
      apellido: true,
      username: true,
      rol: true,
      estado: true,
      password: false,
    },
  });
};

export const  createUsuario = async (data: CreateUsuarioDto) => {
  // Verificar si ya existe un usuario con el mismo username
  const usuarioExistente = await prisma.usuario.findUnique({
    where: { username: data.username },
  });

  if (usuarioExistente) {
    throw new AppError('Ya existe un usuario con ese nombre de usuario', 400);
  }

  // Encriptar la contraseña
  const hashedPassword = await bcrypt.hash(data.password, 10);

  const usuario = await prisma.usuario.create({
    data: {
      ...data,
      password: hashedPassword,
    },
    select: {
      id: true,
      nombre: true,
      apellido: true,
      username: true,
      rol: true,
      estado: true,
      password: false,
    },
  });

  return usuario;
};

export const updateUsuario = async (id: number, data: UpdateUsuarioDto) => {
  await getUsuarioById(id);

  // Si se intenta actualizar la contraseña, encriptarla
  if (data.password) {
    data.password = await bcrypt.hash(data.password, 10);
  }

  return prisma.usuario.update({
    where: { id },
    data,
    select: {
      id: true,
      nombre: true,
      apellido: true,
      username: true,
      rol: true,
      estado: true,
      password: false,
    },
  });
};

export const deleteUsuario = async (id: number) => {
  await getUsuarioById(id);

  // Verificar si el usuario tiene pedidos asociados
  const pedidosMesero = await prisma.pedido.findFirst({
    where: { meseroId: id },
  });

  const pedidosRepartidor = await prisma.pedido.findFirst({
    where: { repartidorId: id },
  });

  if (pedidosMesero || pedidosRepartidor) {
    throw new AppError('No se puede eliminar este usuario porque tiene pedidos asociados', 400);
  }

  return prisma.usuario.delete({
    where: { id },
  });
};

export const login = async (username: string, password: string) => {
  const usuario = await prisma.usuario.findUnique({
    where: { username },
  });

  if (!usuario) {
    throw new AppError('Credenciales inválidas', 401);
  }

  // Verificar contraseña
  const passwordValida = await bcrypt.compare(password, usuario.password);
  if (!passwordValida) {
    throw new AppError('Credenciales inválidas', 401);
  }

  // Verificar estado
  if (usuario.estado === 'INACTIVO') {
    throw new AppError('Usuario inactivo. Contacte al administrador', 403);
  }

  // Generar token JWT
  const token = jwt.sign(
    { id: usuario.id, username: usuario.username, rol: usuario.rol },
    process.env.JWT_SECRET || 'secreto',
    { expiresIn: '8h' }
  );

  return {
    token,
    usuario: {
      id: usuario.id,
      nombre: usuario.nombre,
      apellido: usuario.apellido,
      username: usuario.username,
      rol: usuario.rol,
    }
  };
};

export const cambiarEstado = async (id: number, estado: 'ACTIVO' | 'INACTIVO') => {
  await getUsuarioById(id);

  return prisma.usuario.update({
    where: { id },
    data: { estado },
    select: {
      id: true,
      nombre: true,
      apellido: true,
      username: true,
      rol: true,
      estado: true,
      password: false,
    },
  });
};

export const cambiarPassword = async (
  id: number,
  oldPassword: string,
  newPassword: string
) => {
  const usuario = await prisma.usuario.findUnique({
    where: { id }
  });

  if (!usuario) {
    throw new AppError('Usuario no encontrado', 404);
  }

  // Verificar contraseña actual
  const passwordValida = await bcrypt.compare(oldPassword, usuario.password);
  if (!passwordValida) {
    throw new AppError('La contraseña actual es incorrecta', 400);
  }

  // Encriptar la nueva contraseña
  const hashedPassword = await bcrypt.hash(newPassword, 10);

  return prisma.usuario.update({
    where: { id },
    data: {
      password: hashedPassword
    },
    select: {
      id: true,
      nombre: true,
      apellido: true,
      username: true,
      rol: true,
      estado: true,
      password: false,
    },
  });
};

export const getUserProfile = async (id: number) => {
  return getUsuarioById(id);
};

export const verifyToken = async (token: string) => {
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET || 'secreto') as {
      id: number;
      username: string;
      rol: string;
    };

    // Verificar si el usuario aún existe y está activo
    const usuario = await prisma.usuario.findUnique({
      where: { id: decoded.id },
      select: {
        id: true,
        nombre: true,
        apellido: true,
        username: true,
        rol: true,
        estado: true,
        password: false,
      }
    });

    if (!usuario) {
      throw new AppError('Usuario no encontrado', 404);
    }

    if (usuario.estado === 'INACTIVO') {
      throw new AppError('Usuario inactivo', 403);
    }

    return {
      valid: true,
      usuario
    };
  } catch (e: unknown) {

    const error = e as Error;

    return {
      error: error.message,
      valid: false
    };
  }
}