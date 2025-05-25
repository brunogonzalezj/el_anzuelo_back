// src/features/platos/plato.controller.ts
import { Request, Response, NextFunction } from 'express';
import * as platoService from './platos.service';

export const getPlatos = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const platos = await platoService.getPlatos();
    res.json(platos);
  } catch (error) {
    next(error);
  }
};

export const getPlatoById = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const id = parseInt(req.params.id);
    const plato = await platoService.getPlatoById(id);
    res.json(plato);
  } catch (error) {
    next(error);
  }
};

export const createPlato = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const plato = await platoService.createPlato(req.body);
    res.status(201).json(plato);
  } catch (error) {
    next(error);
  }
};

export const updatePlato = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const id = parseInt(req.params.id);
    const plato = await platoService.updatePlato(id, req.body);
    res.json(plato);
  } catch (error) {
    next(error);
  }
};

export const deletePlato = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const id = parseInt(req.params.id);
    await platoService.deletePlato(id);
    res.status(204).end();
  } catch (error) {
    console.error(error);
    next(error);
  }
};

export const asignarExtras = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const id = parseInt(req.params.id);
    const { extraIds } = req.body;
    const plato = await platoService.asignarExtras(id, extraIds);
    res.json(plato);
  } catch (error) {
    next(error);
  }
};

export const quitarExtra = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const id = parseInt(req.params.id);
    const extraId = parseInt(req.params.extraId);
    const plato = await platoService.quitarExtra(id, extraId);
    res.json(plato);
  } catch (error) {
    next(error);
  }
};