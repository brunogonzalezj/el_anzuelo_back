// src/features/mesas/mesa.routes.ts
import { Router } from 'express';
import * as mesaController from './mesa.controller';
import { authMiddleware } from '../../middlewares/auth.middleware';
import { roleMiddleware } from '../../middlewares/role.middleware';

export const mesaRouter = Router();

// Todas las rutas de mesas son protegidas
mesaRouter.use(authMiddleware);

// Rutas para consulta (disponibles para varios roles)
mesaRouter.get('/', mesaController.getMesas);
mesaRouter.get('/:id', mesaController.getMesaById);

// Rutas para administración (solo roles autorizados)
mesaRouter.post('/', roleMiddleware(['ENCARGADO']), mesaController.createMesa);
mesaRouter.put('/:id', roleMiddleware(['ENCARGADO']), mesaController.updateMesa);
mesaRouter.delete('/:id', roleMiddleware(['ENCARGADO']), mesaController.deleteMesa);
