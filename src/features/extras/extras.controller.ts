// src/features/extras/extra.controller.ts
import { Request, Response, NextFunction } from 'express';
import * as extraService from './extras.service';

export const getExtras = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const extras = await extraService.getExtras();
    res.json(extras);
  } catch (error) {
    next(error);
  }
};

export const getExtraById = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const id = parseInt(req.params.id);
    const extra = await extraService.getExtraById(id);
    res.json(extra);
  } catch (error) {
    next(error);
  }
};

export const createExtra = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const extra = await extraService.createExtra(req.body);
    res.status(201).json(extra);
  } catch (error) {
    next(error);
  }
};

export const updateExtra = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const id = parseInt(req.params.id);
    const extra = await extraService.updateExtra(id, req.body);
    res.json(extra);
  } catch (error) {
    next(error);
  }
};

export const deleteExtra = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const id = parseInt(req.params.id);
    await extraService.deleteExtra(id);
    res.status(204).end();
  } catch (error) {
    next(error);
  }
};

export const getExtrasPorPlato = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const platoId = parseInt(req.params.platoId);
    const extras = await extraService.getExtrasPorPlato(platoId);
    res.json(extras);
  } catch (error) {
    next(error);
  }
}