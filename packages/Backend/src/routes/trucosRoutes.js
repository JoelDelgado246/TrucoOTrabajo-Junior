// src/routes/trucosRoutes.js
import express from 'express';
import {
    getAllTrucos,
    getTrucoById,
    submitSolution,
    getComments,
    postComment,
    getOpcionesRespuesta, // Añadida
    getTestCases          // Añadida
} from '../controllers/trucosController.js';

const router = express.Router();

// Rutas básicas de trucos
router.get('/trucos', getAllTrucos);
router.get('/trucos/:id', getTrucoById);

// Rutas para soluciones
router.post('/trucos/:id/solucion', submitSolution);

// Rutas para comentarios
router.get('/trucos/:id/comentarios', getComments);
router.post('/trucos/:id/comentarios', postComment);

// Rutas para opciones y test cases
router.get('/trucos/:id/opciones', getOpcionesRespuesta);
router.get('/trucos/:id/test', getTestCases);

export default router;