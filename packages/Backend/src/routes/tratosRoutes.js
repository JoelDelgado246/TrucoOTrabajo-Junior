import express from 'express';
import { getTratos, getTratoById } from '../controllers/tratosController.js';
import { pool } from '../db/db.js';


const router = express.Router();

// Ruta específica primero
router.get('/truco/:trucoId', async (req, res) => {
    try {
        const { trucoId } = req.params;
        if (!trucoId || trucoId === 'undefined') {
            return res.status(400).json({ message: 'ID de truco requerido' });
        }
        const [trato] = await pool.query(
            'SELECT * FROM Trato WHERE truco_id = ?',
            [trucoId]
        );
        if (trato.length === 0) {
            return res.status(404).json({ message: 'Trato no encontrado' });
        }
        res.json(trato[0]);
    } catch (error) {
        console.error('Error al obtener trato:', error);
        res.status(500).json({ message: error.message });
    }
});

// Ruta para obtener todos los tratos
router.get('/', getTratos);

// Ruta para obtener un trato específico por ID
router.get('/:id', getTratoById);

export default router;