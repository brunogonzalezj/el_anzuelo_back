// src/features/inventario/dtos/inventario.dto.ts
import { BaseDto } from '../../../core/dto/base.dto';
import { CategoriaInventario } from '../../generated/prisma';

export interface ItemInventarioDto extends BaseDto {
  nombre: string;
  categoria: CategoriaInventario;
  stockActual: number;
  stockMinimo: number;
  unidadMedida: string;
}

export interface CreateItemInventarioDto {
  nombre: string;
  categoria: CategoriaInventario;
  stockActual: number;
  stockMinimo: number;
  unidadMedida: string;
}

export interface UpdateItemInventarioDto {
  nombre?: string;
  categoria?: CategoriaInventario;
  stockActual?: number;
  stockMinimo?: number;
  unidadMedida?: string;
}