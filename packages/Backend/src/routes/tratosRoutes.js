import express from 'express';
import { getTratos } from '../controllers/tratosController.js';

const router = express.Router();

// Obtener tratos con filtros opcionales
router.get('/', getTratos);

export default router;