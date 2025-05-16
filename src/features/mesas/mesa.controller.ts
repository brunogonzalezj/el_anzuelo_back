// src/features/mesas/mesa.controller.ts
import { Request, Response, NextFunction } from 'express';
import * as mesaService from './mesa.service';

export const getMesas = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const mesas = await mesaService.getMesas();
    res.json(mesas);
  } catch (error) {
    next(error);
  }
};

export const getMesaById = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const id = parseInt(req.params.id);
    const mesa = await mesaService.getMesaById(id);
    res.json(mesa);
  } catch (error) {
    next(error);
  }
};

export const createMesa = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const mesa = await mesaService.createMesa(req.body);
    res.status(201).json(mesa);
  } catch (error) {
    next(error);
  }
};

export const updateMesa = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const id = parseInt(req.params.id);
    const mesa = await mesaService.updateMesa(id, req.body);
    res.json(mesa);
  } catch (error) {
    next(error);
  }
};

export const deleteMesa = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const id = parseInt(req.params.id);
    await mesaService.deleteMesa(id);
    res.status(204).end();
  } catch (error) {
    next(error);
  }
};
