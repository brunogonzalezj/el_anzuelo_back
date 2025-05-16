// src/features/mesas/dtos/mesa.dto.ts
import { BaseDto } from '../../../core/dto/base.dto';
import { EstadoMesa, SectorMesa } from '../../generated/prisma';

export interface MesaDto extends BaseDto {
  numero: number;
  sector: SectorMesa;
  estado: EstadoMesa;
  capacidad: number;
}

export interface CreateMesaDto {
  numero: number;
  sector: SectorMesa;
  capacidad: number;
  estado?: EstadoMesa;
}

export interface UpdateMesaDto {
  sector?: SectorMesa;
  estado?: EstadoMesa;
  capacidad?: number;
}