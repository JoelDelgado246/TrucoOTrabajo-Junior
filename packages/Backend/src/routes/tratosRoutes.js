import express from 'express';
import { getTratos, getTratoById } from '../controllers/tratosController.js';

const router = express.Router();

// Ruta para obtener todos los tratos
router.get('/', getTratos);

// Ruta para obtener un trato específico por ID
router.get('/:id', getTratoById);

export default router;