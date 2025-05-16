// src/features/extras/extra.routes.ts
import { Router } from 'express';
import * as extraController from './extras.controller';
import { authMiddleware } from '../../middlewares/auth.middleware';
import { roleMiddleware } from '../../middlewares/role.middleware';

export const extraRouter = Router();

// Todas las rutas de extras requieren autenticación
extraRouter.use(authMiddleware);

// Rutas públicas para usuarios autenticados
extraRouter.get('/', extraController.getExtras);
extraRouter.get('/:id', extraController.getExtraById);
extraRouter.get('/plato/:platoId', extraController.getExtrasPorPlato);

// Rutas para administración de extras (solo roles autorizados)
const adminRoles = ['ENCARGADO', 'CHEF'];
extraRouter.post('/', roleMiddleware(adminRoles), extraController.createExtra);
extraRouter.put('/:id', roleMiddleware(adminRoles), extraController.updateExtra);
extraRouter.delete('/:id', roleMiddleware(adminRoles), extraController.deleteExtra);
