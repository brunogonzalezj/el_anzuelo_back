// src/features/reservas/reserva.routes.ts
import { Router } from 'express';
import * as reservaController from './reserva.controller';
import { authMiddleware } from '../../middlewares/auth.middleware';
import { roleMiddleware } from '../../middlewares/role.middleware';

export const  reservaRouter = Router();

// Todas las rutas de reservas son protegidas
reservaRouter.use(authMiddleware);

// Rutas para todos los usuarios autenticados
const allowedRoles = ['ENCARGADO', 'MESERO', 'CAJERO'];
reservaRouter.get('/', roleMiddleware(allowedRoles), reservaController.getReservas);
reservaRouter.get('/:id', roleMiddleware(allowedRoles), reservaController.getReservaById);

// Rutas solo para roles autorizados
reservaRouter.post('/', roleMiddleware(['ENCARGADO', 'CAJERO', 'MESERO']), reservaController.createReserva);
reservaRouter.put('/:id', roleMiddleware(['ENCARGADO', 'CAJERO', 'MESERO']), reservaController.updateReserva);
reservaRouter.delete('/:id', roleMiddleware(['ENCARGADO', 'CAJERO', 'MESERO']), reservaController.deleteReserva);
