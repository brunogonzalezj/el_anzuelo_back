// src/middlewares/auth.middleware.ts
import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import { AppError } from '../../core/errors/app-error';
import { config } from '../config/app.config';

export interface TokenPayload {
  id: number;
  username: string;
  rol: string;
}

export const authMiddleware = async (req: Request, res: Response, next: NextFunction) => {
  try {
    // Obtener el token del encabezado de autorización
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      throw new AppError('No se proporcionó token de autenticación', 401);
    }

    // Extraer el token
    const token = authHeader.split(' ')[1];

    // Verificar el token
    try {
      // Verificar y decodificar el token
      const decoded = jwt.verify(token, config.jwtSecret) as TokenPayload;

      // Añadir la información del usuario a la request
      (req as any).user = {
        id: decoded.id,
        username: decoded.username,
        rol: decoded.rol
      };

      next();
    } catch (error) {
      throw new AppError('Token inválido o expirado', 401);
    }
  } catch (error) {
    next(error);
  }
};