// src/features/pedidos/pedido.controller.ts
import { Request, Response, NextFunction } from 'express';
import * as pedidoService from './pedido.service';

export const getPedidos = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const pedidos = await pedidoService.getPedidos();
    res.json(pedidos);
  } catch (error) {
    next(error);
  }
};

export const getPedidoById = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const id = parseInt(req.params.id);
    const pedido = await pedidoService.getPedidoById(id);
    res.json(pedido);
  } catch (error) {
    next(error);
  }
};

export const createPedido = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const pedido = await pedidoService.createPedido(req.body);
    res.status(201).json(pedido);
  } catch (error) {
    next(error);
  }
};

export const updatePedido = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const id = parseInt(req.params.id);
    const pedido = await pedidoService.updatePedido(id, req.body);
    res.json(pedido);
  } catch (error) {
    next(error);
  }
};

export const deletePedido = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const id = parseInt(req.params.id);
    await pedidoService.deletePedido(id);
    res.status(204).end();
  } catch (error) {
    next(error);
  }
};

export const cambiarEstado = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const id = parseInt(req.params.id);
    const { estado } = req.body;
    const pedido = await pedidoService.cambiarEstado(id, estado);
    res.json(pedido);
  } catch (error) {
    next(error);
  }
};
