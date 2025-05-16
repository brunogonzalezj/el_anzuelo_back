// src/features/inventario/inventario.controller.ts
import { Request, Response, NextFunction } from 'express';
import * as inventarioService from './inventario.service';
import { formatCategoria } from '../../../core/utils/format-utils';


export const getItems = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const items = await inventarioService.getInventario();
    res.json(items);
  } catch (error) {
    next(error);
  }
};

export const getItemById = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const id = parseInt(req.params.id);
    const item = await inventarioService.getItemInventarioById(id);
    res.json(item);
  } catch (error) {
    next(error);
  }
};

export const createItem = async (req: Request, res: Response, next: NextFunction) => {
  try {
    // Formatea la categoría si es necesario
    if (req.body.categoria) {
      req.body.categoria = formatCategoria(req.body.categoria);
    }

    const item = await inventarioService.createItemInventario(req.body);
    res.status(201).json(item);
  } catch (error) {
    next(error);
  }
};

export const updateItem = async (req: Request, res: Response, next: NextFunction) => {
  try {
    // Formatea la categoría si está presente
    if (req.body.categoria) {
      req.body.categoria = formatCategoria(req.body.categoria);
    }

    const id = parseInt(req.params.id);
    const item = await inventarioService.updateItemInventario(id, req.body);
    res.json(item);
  } catch (error) {
    next(error);
  }
};

export const deleteItem = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const id = parseInt(req.params.id);
    await inventarioService.deleteItemInventario(id);
    res.status(204).end();
  } catch (error) {
    next(error);
  }
};

export const actualizarStock = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const id = parseInt(req.params.id);
    const { stockActual } = req.body;
    const item = await inventarioService.actualizarStock(id, stockActual);
    res.json(item);
  } catch (error) {
    next(error);
  }
};
