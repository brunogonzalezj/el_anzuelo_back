// src/features/usuarios/usuario.controller.ts
import { Request, Response, NextFunction } from 'express';
import * as usuarioService from './usuario.service';
import { AppError } from '../../../core/errors/app-error';

export const getUsuarios = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const usuarios = await usuarioService.getUsuarios();
    res.json(usuarios);
  } catch (error) {
    next(error);
  }
};

export const getUsuarioById = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const id = parseInt(req.params.id);
    const usuario = await usuarioService.getUsuarioById(id);
    res.json(usuario);
  } catch (error) {
    next(error);
  }
};

export const getUsuariosPorRol = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const rol = req.params.rol;
    const usuarios = await usuarioService.getUsuariosPorRol(rol);
    res.json(usuarios);
  } catch (error) {
    next(error);
  }
};

export const createUsuario = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const usuario = await usuarioService.createUsuario(req.body);
    res.status(201).json(usuario);
  } catch (error) {
    next(error);
  }
};

export const updateUsuario = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const id = parseInt(req.params.id);
    const usuario = await usuarioService.updateUsuario(id, req.body);
    res.json(usuario);
  } catch (error) {
    next(error);
  }
};

export const deleteUsuario = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const id = parseInt(req.params.id);
    await usuarioService.deleteUsuario(id);
    res.status(204).end();
  } catch (error) {
    next(error);
  }
};

export const login = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { username, password } = req.body;

    if (!username || !password) {
      throw new AppError('Se requiere nombre de usuario y contraseña', 400);
    }

    const result = await usuarioService.login(username, password);
    res.json(result);
  } catch (error) {
    next(error);
  }
};

export const cambiarEstado = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const id = parseInt(req.params.id);
    const { estado } = req.body;

    if (!estado || !['ACTIVO', 'INACTIVO'].includes(estado)) {
      throw new AppError('Estado no válido', 400);
    }

    const usuario = await usuarioService.cambiarEstado(id, estado);
    res.json(usuario);
  } catch (error) {
    next(error);
  }
};

export const cambiarPassword = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const id = parseInt(req.params.id);
    const { oldPassword, newPassword } = req.body;

    if (!oldPassword || !newPassword) {
      throw new AppError('Se requiere contraseña anterior y nueva', 400);
    }

    const usuario = await usuarioService.cambiarPassword(
      id,
      oldPassword,
      newPassword
    );
    res.json(usuario);
  } catch (error) {
    next(error);
  }
};

export const getUserProfile = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    // Asumimos que el ID del usuario está disponible en req.user.id
    const id = req.user.id;
    const profile = await usuarioService.getUserProfile(id);
    res.json(profile);
  } catch (error) {
    next(error);
  }
};
