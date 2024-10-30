import express from 'express';
import { getTratos, getTrucoById } from '../controllers/tratosController.js';

const router = express.Router();
 
// Ruta para obtener los tratos
router.get('/', getTratos);

// Ruta para obtener un truco específico por idTruco o idTrato
router.get('/truco', getTrucoById);

export default router;
/*
Para obtener un truco específico por idTruco, puedes hacer una petición GET a /api/truco?idTruco=<valor>.
Para obtener un truco específico relacionado a un idTrato, puedes hacer una petición GET a /api/truco?idTrato=<valor>.

*/