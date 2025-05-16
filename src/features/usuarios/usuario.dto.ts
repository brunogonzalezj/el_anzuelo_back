// src/features/usuarios/dtos/usuario.dto.ts
import { BaseDto } from '../../../core/dto/base.dto';
import { EstadoUsuario, RolUsuario } from '../../generated/prisma';

export interface UsuarioDto extends BaseDto {
  nombre: string;
  apellido: string;
  username: string;
  rol: RolUsuario;
  estado: EstadoUsuario;
}

export interface CreateUsuarioDto {
  nombre: string;
  apellido: string;
  username: string;
  password: string;
  rol: RolUsuario;
}

export interface UpdateUsuarioDto {
  nombre?: string;
  apellido?: string;
  password?: string;
  rol?: RolUsuario;
  estado?: EstadoUsuario;
}

export interface LoginDto {
  username: string;
  password: string;
}

export interface TokenDto {
  token: string;
  user: UsuarioDto;
}