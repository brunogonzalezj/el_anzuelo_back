// src/features/pedidos/pedido.routes.ts
import { Router } from 'express';
import * as pedidoController from './pedido.controller';
import { authMiddleware } from '../../middlewares/auth.middleware';
import { roleMiddleware } from '../../middlewares/role.middleware';

export const pedidoRouter = Router();

// Todas las rutas de pedidos son protegidas
pedidoRouter.use(authMiddleware);

// Rutas accesibles para todos los roles autenticados
pedidoRouter.get('/:id', pedidoController.getPedidoById);

// Rutas para meseros
const meseroRoles = ['MESERO', 'ENCARGADO'];
pedidoRouter.post('/', roleMiddleware(meseroRoles), pedidoController.createPedido);
pedidoRouter.put('/:id', roleMiddleware(meseroRoles), pedidoController.updatePedido);

// Rutas para el chef
pedidoRouter.patch('/:id/estado', roleMiddleware(['CHEF', 'ENCARGADO']), pedidoController.cambiarEstado);

// Rutas para encargados y cajeros
const adminRoles = ['ENCARGADO', 'CAJERO', 'CHEF'];
pedidoRouter.get('/', roleMiddleware(adminRoles), pedidoController.getPedidos);
pedidoRouter.delete('/:id', roleMiddleware(['ENCARGADO']), pedidoController.deletePedido);
