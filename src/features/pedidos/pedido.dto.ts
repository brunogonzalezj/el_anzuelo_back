// src/features/pedidos/dtos/pedido.dto.ts
import { BaseDto } from '../../../core/dto/base.dto';
import { EstadoPedido, TipoPedido } from '../../generated/prisma';

export interface PedidoDto extends BaseDto {
  fechaCreacion: Date;
  estado: EstadoPedido;
  tipoPedido: TipoPedido;
  mesaId?: number;
  meseroId?: number;
  nombreCliente?: string;
  direccionCliente?: string;
  telefonoCliente?: string;
  repartidorId?: number;
  total: number;
  detalles?: DetallePedidoDto[];
}

export interface CreatePedidoDto {
  tipoPedido: TipoPedido;
  mesaId?: number;
  nombreCliente?: string;
  direccionCliente?: string;
  telefonoCliente?: string;
  detalles: {};
}

export interface UpdatePedidoDto {
  estado?: EstadoPedido;
  mesaId?: number;
  meseroId?: number;
  repartidorId?: number;
}

export interface DetallePedidoDto extends BaseDto {
  pedidoId: number;
  platoId: number;
  cantidad: number;
  subtotal: number;
  detallesExtra?: DetalleExtraDto[];
}

export interface CreateDetallePedidoDto {
  platoId: number;
  cantidad: number;
  extras?: CreateDetalleExtraDto[];
}

export interface DetalleExtraDto extends BaseDto {
  detallePedidoId: number;
  extraId: number;
  cantidad: number;
}

export interface CreateDetalleExtraDto {
  extraId: number;
  cantidad: number;
}
