// src/routes/trucosRoutes.js
import express from 'express';
import { getTrucos, submitSolution, getComments, postComment,getTestCases } from '../controllers/trucosController.js';

const router = express.Router();

// Obtener lista de trucos
router.get('/', getTrucos);

// Subir solución para un truco específico
router.post('/:id/solution', submitSolution);

// Obtener comentarios de un truco específico
router.get('/:id/comments', getComments);

// Publicar un comentario sobre un truco específico
router.post('/:id/comments', postComment);

router.get('/trucos/:id/test', getTestCases);

export default router;



