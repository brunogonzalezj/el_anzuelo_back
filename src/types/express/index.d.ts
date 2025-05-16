// src/types/express/index.d.ts
import { Usuario } from '../../generated/prisma';

declare global {
  namespace Express {
    interface Request {
      user?: {
        id: number;
        username: string;
        rol: string;
      };
    }
  }
}