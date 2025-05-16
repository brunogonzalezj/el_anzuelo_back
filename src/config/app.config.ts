// src/config/app.config.ts
export const config = {
  jwtSecret: process.env.JWT_SECRET || 'tu_clave_secreta_por_defecto',
  jwtExpiresIn: '24h'
};