// src/features/platos/dtos/plato.dto.ts
import { BaseDto } from '../../../core/dto/base.dto';

export interface PlatoDto extends BaseDto {
  nombre: string;
  descripcion: string;
  precio: number;
  extras?: ExtraPlatoDto[];
}

export interface CreatePlatoDto {
  nombre: string;
  descripcion: string;
  precio: number;
  categoria: string;
  extras?: number[];
}

export interface UpdatePlatoDto {
  nombre?: string;
  descripcion?: string;
  precio?: number;
  extras?: number[];
}

export interface ExtraPlatoDto {
  id: number;
  idPlato: number;
  idExtra: number;
}

export interface CreateExtraPlatoDto {
  idPlato: number;
  idExtra: number;
}