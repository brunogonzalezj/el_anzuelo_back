// src/features/reservas/dtos/reserva.dto.ts
import { BaseDto } from '../../../core/dto/base.dto';
import { SectorMesa } from '../../generated/prisma';

export interface ReservaDto extends BaseDto {
  nombreCliente: string;
  telefono: string;
  fecha: Date;
  hora: string;
  cantPersonas: number;
  mesaId?: number;
  sectorPreferido?: SectorMesa;
}

export interface CreateReservaDto {
  nombreCliente: string;
  telefono: string;
  fecha: Date;
  hora: string;
  cantPersonas: number;
  mesaId?: number;
  sectorPreferido?: SectorMesa;
}

export interface UpdateReservaDto {
  nombreCliente?: string;
  telefono?: string;
  fecha?: Date;
  hora?: string;
  cantPersonas?: number;
  mesaId?: number;
  sectorPreferido?: SectorMesa;
}