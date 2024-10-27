import express from 'express';
import { getAllTrucos, getTrucoById, submitSolution, getComments, postComment } from '../controllers/trucosController.js';

const router = express.Router();

// Obtener lista de trucos
router.get('/trucos', getAllTrucos);

// Obtener detalles de un truco específico
router.get('/trucos/:id', getTrucoById);

// Subir solución para un reto específico (requiere autenticación)
router.post('/trucos/:id/solucion', submitSolution);

// Obtener comentarios de un reto específico
router.get('/trucos/:id/comentarios', getComments);

// Publicar un comentario sobre un reto específico (requiere autenticación)
router.post('/trucos/:id/comentarios', postComment);

export default router;