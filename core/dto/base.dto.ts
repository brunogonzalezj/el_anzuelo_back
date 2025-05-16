// src/core/dto/base.dto.ts
export interface BaseDto {
  id: number;
}

export interface PaginatedResult<T> {
  data: T[];
  total: number;
  page: number;
  limit: number;
}

export interface PaginationOptions {
  page?: number;
  limit?: number;
}