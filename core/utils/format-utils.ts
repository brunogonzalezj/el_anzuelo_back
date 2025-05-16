// src/core/utils/format-utils.ts
import { CategoriaInventario } from '../../src/generated/prisma';

/**
 * Formatea una cadena de texto para que coincida con los valores del enum CategoriaInventario
 * @param categoria Cadena de texto que representa la categoría
 * @returns Valor formateado como CategoriaInventario o la cadena original si no coincide
 */
export const formatCategoria = (categoria: string): CategoriaInventario | string => {
  // Convertir a mayúsculas y eliminar espacios/acentos si es necesario
  const categoriaFormateada = categoria.toUpperCase().trim();

  // Verificar si coincide con alguna categoría existente
  switch (categoriaFormateada) {
    case 'PESCADOS':
      return CategoriaInventario.PESCADOS;
    case 'MARISCOS':
      return CategoriaInventario.MARISCOS;
    case 'EXTRAS':
      return CategoriaInventario.EXTRAS;
    case 'INSUMOS':
      return CategoriaInventario.INSUMOS;
    case 'LIMPIEZA':
      return CategoriaInventario.LIMPIEZA;
    case 'VERDURAS':
      return CategoriaInventario.VERDURAS;
    default:
      return categoria; // Devuelve la categoría original si no coincide
  }
};

/**
 * Verifica si un valor es una categoría válida del inventario
 * @param categoria Categoría a verificar
 * @returns true si es una categoría válida, false en caso contrario
 */
export const isCategoriaValida = (categoria: string): boolean => {
  const categorias = Object.values(CategoriaInventario);
  return categorias.includes(categoria as CategoriaInventario);
};