// src/features/platos/plato.routes.ts
import { Router } from 'express';
import * as platoController from './platos.controller';
import { authMiddleware } from '../../middlewares/auth.middleware';
import { roleMiddleware } from '../../middlewares/role.middleware';

export const platoRouter = Router();

// Todas las rutas de platos requieren autenticación
//platoRouter.use(authMiddleware);

// Rutas públicas para usuarios autenticados
platoRouter.get('/', authMiddleware, platoController.getPlatos);
platoRouter.get('/:id', authMiddleware,platoController.getPlatoById);

// Rutas para administración de platos (solo roles autorizados)
const adminRoles = ['ENCARGADO', 'CHEF'];
platoRouter.post('/', authMiddleware, platoController.createPlato);
platoRouter.put('/:id',authMiddleware, roleMiddleware(adminRoles), platoController.updatePlato);
platoRouter.delete('/:id', authMiddleware,roleMiddleware(adminRoles), platoController.deletePlato);

// Rutas para gestionar extras en platos
platoRouter.post('/:id/extras', authMiddleware,roleMiddleware(adminRoles), platoController.asignarExtras);
platoRouter.delete('/:id/extras/:extraId', authMiddleware,roleMiddleware(adminRoles), platoController.quitarExtra);
