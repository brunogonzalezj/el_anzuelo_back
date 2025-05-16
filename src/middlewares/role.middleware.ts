// src/middlewares/role.middleware.ts
import { Request, Response, NextFunction } from 'express';
import { AppError } from '../../core/errors/app-error';

export const roleMiddleware = (allowedRoles: string[]) => {
  return (req: Request, res: Response, next: NextFunction) => {
    try {
      // Verificar si existe el usuario en la solicitud (agregado por authMiddleware)
      const user = (req as any).user;

      if (!user) {
        throw new AppError('Usuario no autenticado', 401);
      }

      // Verificar si el rol del usuario está en la lista de roles permitidos
      if (!allowedRoles.includes(user.rol)) {
        throw new AppError('No tienes permisos para realizar esta acción', 403);
      }

      next();
    } catch (error) {
      next(error);
    }
  };
};