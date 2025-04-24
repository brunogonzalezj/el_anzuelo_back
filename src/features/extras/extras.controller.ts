import { Router, Request, Response } from 'express';
import {
  createExtra,
  deleteExtra,
  getExtraById,
  getExtras,
  updateExtra,
} from './extras.service';

export const extrasController = Router();

interface ExtraBody {
  nombre: string;
}

interface ExtraParams {
  id: string;
}

extrasController
  .route('/')
  .get(async (_req: Request, res: Response) => {
    try {
      const extras = await getExtras();
      res.json(extras);
    } catch (error) {
      console.error(error);
      res.status(500).json({
        message: 'Error al obtener los extras',
        error: error.message,
      });
    }
  })
  .post(async (req: Request<{}, {}, ExtraBody>, res: Response) => {
    try {
      const body = req.body;
      const createdExtra = await createExtra(body);
      res.status(201).json(createdExtra);
    } catch (error) {
      console.error(error);
      res.status(500).json({
        message: 'Error al crear el extra',
        error: error.message,
      });
    }
  });

extrasController
  .route('/:id')
  .get(async (req: Request<ExtraParams>, res: Response) => {
    try {
      const id = parseInt(req.params.id);
      const extra = await getExtraById(id);

      if (!extra) {
        res.status(404).json({
          message: 'Extra no encontrado',
        });
        return;
      }

      res.json(extra);
    } catch (error) {
      console.error(error);
      res.status(500).json({
        message: 'Error al obtener el extra',
        error: error.message,
      });
    }
  })
  .put(async (req: Request<ExtraParams, {}, ExtraBody>, res: Response) => {
    try {
      const id = parseInt(req.params.id);
      const body = req.body;

      const updatedExtra = await updateExtra(id, body);
      res.json(updatedExtra);
    } catch (error) {
      console.error(error);
      res.status(500).json({
        message: 'Error al actualizar el extra',
        error: error.message,
      });
    }
  })
  .delete(async (req: Request<ExtraParams>, res: Response) => {
    try {
      const id = parseInt(req.params.id);
      const deletedExtra = await deleteExtra(id);
      res.json(deletedExtra);
    } catch (error) {
      console.error(error);
      res.status(500).json({
        message: 'Error al eliminar el extra',
        error: error.message,
      });
    }
  });
