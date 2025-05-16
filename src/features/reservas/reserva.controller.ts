// src/features/reservas/reserva.controller.ts
import { Request, Response, NextFunction } from 'express';
import * as reservaService from './reserva.service';

export const getReservas = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const reservas = await reservaService.getReservas();
    res.json(reservas);
  } catch (error) {
    next(error);
  }
};

export const getReservaById = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const id = parseInt(req.params.id);
    const reserva = await reservaService.getReservaById(id);
    res.json(reserva);
  } catch (error) {
    next(error);
  }
};

export const createReserva = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const reserva = await reservaService.createReserva(req.body);
    res.status(201).json(reserva);
  } catch (error) {
    next(error);
  }
};

export const updateReserva = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const id = parseInt(req.params.id);
    const reserva = await reservaService.updateReserva(id, req.body);
    res.json(reserva);
  } catch (error) {
    next(error);
  }
};

export const deleteReserva = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const id = parseInt(req.params.id);
    await reservaService.deleteReserva(id);
    res.status(204).end();
  } catch (error) {
    next(error);
  }
};