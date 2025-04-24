import { Router } from 'express';
import { createPlato, getPlatos } from './platos.service';

export const platosController = Router();

platosController.get('/', async (req, res) => {
  try {
    const platos = await getPlatos();

    res.json(platos);
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: 'Error al obtener los platos',
      error: error.message,
    });
  }
});

platosController.post('/', async (req, res) => {
  try {
    const body = req.body;

    const createdPlato = await createPlato(body);

    res.status(201).json(createdPlato);
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: 'Error al crear el plato',
      error: error.message,
    });
  }
});
