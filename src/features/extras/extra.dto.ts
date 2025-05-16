// src/features/extras/dtos/extra.dto.ts
import { BaseDto } from '../../../core/dto/base.dto';

export interface ExtraDto extends BaseDto {
  nombre: string;
  descripcion: string;
}

export interface CreateExtraDto {
  nombre: string;
  descripcion: string;
}

export interface UpdateExtraDto {
  nombre?: string;
  descripcion?: string;
}