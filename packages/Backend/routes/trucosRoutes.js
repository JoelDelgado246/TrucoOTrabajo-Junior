const express = require('express')
const router = express.Router()

const trucosController = require('../controllers/trucosController');

//Otener lista de trucos
router.get('/', trucosController.getAllTrucos);
// Obtener detalles de un truco específico
  router.get('/:id', trucosController.getTrucoByid);   
// Subir solución para un reto específico (requiere autenticación)
router.post('/:id/solucion', trucosController.submitSolution);
// Obtener comentarios de un reto específico
router.get('/:id/comentarios', trucosController.getComments);
// Publicar un comentario sobre un reto específico (requiere autenticación)
router.post('/:id/comentarios', trucosController.postComment);

module.exports = router;

//Toca revisar las rutas