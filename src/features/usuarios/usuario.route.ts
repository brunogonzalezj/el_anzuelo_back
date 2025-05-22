// src/features/usuarios/usuario.routes.ts
import { Router } from 'express';
import * as usuarioController from './usuario.controller';
import { authMiddleware } from '../../middlewares/auth.middleware';
import { roleMiddleware } from '../../middlewares/role.middleware';

export const usuariosRouter = Router();

// Rutas públicas
usuariosRouter.post('/login', usuarioController.login);

// Rutas protegidas
//usuariosRouter.use(authMiddleware);

// Rutas para perfil de usuario
usuariosRouter.get('/perfil', usuarioController.getUserProfile);
usuariosRouter.put(
  '/perfil/:id/cambiar-password',
  usuarioController.cambiarPassword
);

// Rutas para administración de usuarios (solo roles autorizados)
usuariosRouter.get(
  '/',
  authMiddleware,
  roleMiddleware(['ENCARGADO']),
  usuarioController.getUsuarios
);
usuariosRouter.get(
  '/:id',
  roleMiddleware(['ENCARGADO']),
  usuarioController.getUsuarioById
);
usuariosRouter.get(
  '/rol/:rol',
  roleMiddleware(['ENCARGADO']),
  usuarioController.getUsuariosPorRol
);
usuariosRouter.post('/', usuarioController.createUsuario);
usuariosRouter.put(
  '/:id',
  roleMiddleware(['ENCARGADO']),
  usuarioController.updateUsuario
);
usuariosRouter.delete(
  '/:id',
  roleMiddleware(['ENCARGADO']),
  usuarioController.deleteUsuario
);
usuariosRouter.patch(
  '/:id/estado',
  roleMiddleware(['ENCARGADO']),
  usuarioController.cambiarEstado
);
