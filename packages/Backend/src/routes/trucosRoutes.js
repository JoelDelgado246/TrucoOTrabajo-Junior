// src/routes/trucosRoutes.js
import express from 'express';
import { getTrucos, getComments, postComment } from '../controllers/trucosController.js';

const router = express.Router();

// Obtener lista de trucos
router.get('/', getTrucos);

// Obtener comentarios de un truco específico
router.get('/:id/comments', getComments);

// Publicar un comentario sobre un truco específico
router.post('/:id/comments', postComment);

export default router;



