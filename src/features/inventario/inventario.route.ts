// src/features/inventario/inventario.routes.ts
import { Router } from 'express';
import * as inventarioController from './inventario.controller';
import { authMiddleware } from '../../middlewares/auth.middleware';
import { roleMiddleware } from '../../middlewares/role.middleware';

export const inventarioRouter = Router();

// Todas las rutas de inventario requieren autenticación
inventarioRouter.use(authMiddleware);

// Los roles que pueden acceder al inventario
const allowedRoles = ['ENCARGADO', 'CHEF'];

// Rutas para consultas
inventarioRouter.get('/', roleMiddleware(allowedRoles), inventarioController.getItems);
inventarioRouter.get('/:id', roleMiddleware(allowedRoles), inventarioController.getItemById);

// Rutas para administración de inventario
inventarioRouter.post('/', roleMiddleware(['ENCARGADO']), inventarioController.createItem);
inventarioRouter.put('/:id', roleMiddleware(['ENCARGADO']), inventarioController.updateItem);
inventarioRouter.delete('/:id', roleMiddleware(['ENCARGADO']), inventarioController.deleteItem);
inventarioRouter.patch('/:id/stock', roleMiddleware(allowedRoles), inventarioController.actualizarStock);
