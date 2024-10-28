import { pool } from '../db/db.js'
import { executeCode } from '../services/judge0Services.js';

export const getAllTrucos = async (req, res) => {
    try {
        const [rows] = await pool.query(`
            SELECT t.*, l.nombre_lenguaje 
            FROM Truco t
            JOIN Lenguaje l ON t.lenguaje_id = l.lenguaje_id
        `);
        res.json(rows);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: error.message });
    }
};

export const getTrucoById = async (req, res) => {
    try {
        const { id } = req.params;
        const [rows] = await pool.query(`
        SELECT t.*, l.nombre_lenguaje 
        FROM Truco t
        JOIN Lenguaje l ON t.lenguaje_id = l.lenguaje_id
        WHERE t.truco_id = ?
      `, [id]);

        if (rows.length === 0) {
            return res.status(404).json({ message: 'Truco no encontrado' });
        }

        res.json(rows[0]);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const submitSolution = async (req, res) => {
    try {
        const { id } = req.params;
        const { code } = req.body;

        // Obtener el truco y sus test cases
        const [truco] = await pool.query(`
        SELECT t.*, l.nombre_lenguaje 
        FROM Truco t
        JOIN Lenguaje l ON t.lenguaje_id = l.lenguaje_id
        WHERE t.truco_id = ?
      `, [id]);

        const [testCases] = await pool.query('SELECT * FROM Test WHERE truco_id = ?', [id]);

        // Ejecutar cada test case
        const results = await Promise.all(testCases.map(async test => {
            const testData = JSON.parse(test.test_json);
            const result = await executeCode(code, truco.nombre_lenguaje, testData.input);

            return {
                passed: result.stdout.trim() === testData.output.trim(),
                input: testData.input,
                expected: testData.output,
                got: result.stdout,
                error: result.stderr
            };
        }));

        // Verificar si todos los test cases pasaron
        const allPassed = results.every(r => r.passed);

        res.json({
            success: allPassed,
            results,
            message: allPassed ? '¡Todos los tests pasaron!' : 'Algunos tests fallaron'
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: error.message });
    }
};

export const getComments = async (req, res) => {
    // Implementar cuando se tenga la tabla de comentarios
    const { id } = req.params;
    res.json({ message: `Comentarios para truco ${id}` });
};

export const postComment = async (req, res) => {
    // Implementar cuando se tenga la tabla de comentarios
    const { id } = req.params;
    const { comment } = req.body;
    res.json({ message: `Comentario añadido al truco ${id}` });
};

export const getOpcionesRespuesta = async (req, res) => {
    try {
        const { id } = req.params;
        const [opciones] = await pool.query(
            'SELECT * FROM Opcion_Respuesta WHERE truco_id = ?',
            [id]
        );
        res.json(opciones);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const getTestCases = async (req, res) => {
    try {
        const { id } = req.params;
        const [tests] = await pool.query(
            'SELECT * FROM Test WHERE truco_id = ?',
            [id]
        );
        res.json(tests);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};