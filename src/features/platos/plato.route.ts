// src/features/platos/plato.routes.ts
import { Router } from 'express';
import * as platoController from './platos.controller';
import { authMiddleware } from '../../middlewares/auth.middleware';
import { roleMiddleware } from '../../middlewares/role.middleware';

export const platoRouter = Router();

// Todas las rutas de platos requieren autenticación
//platoRouter.use(authMiddleware);

// Rutas públicas para usuarios autenticados
platoRouter.get('/', platoController.getPlatos);
platoRouter.get('/:id', platoController.getPlatoById);

// Rutas para administración de platos (solo roles autorizados)
const adminRoles = ['ENCARGADO', 'CHEF'];
platoRouter.post('/',  platoController.createPlato);
platoRouter.put('/:id', roleMiddleware(adminRoles), platoController.updatePlato);
platoRouter.delete('/:id', roleMiddleware(adminRoles), platoController.deletePlato);

// Rutas para gestionar extras en platos
platoRouter.post('/:id/extras', roleMiddleware(adminRoles), platoController.asignarExtras);
platoRouter.delete('/:id/extras/:extraId', roleMiddleware(adminRoles), platoController.quitarExtra);
