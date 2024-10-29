import { pool } from '../db/db.js';
import { executeCode } from '../services/judge0Services.js';


// Obtener lista de trucos con filtros y mapeo de resultados
export const getTrucos = async (req, res) => {
  const { id, dificultad } = req.query;

  try {
    let query = 'SELECT * FROM Truco';
    const params = [];

    if (id) {
      query += ' WHERE truco_id = ?';
      params.push(id);
    } else if (dificultad) {
      query += ' WHERE tipo_truco = ?';
      params.push(dificultad);
    }

    const [trucos] = await pool.query(query, params);

    if (trucos.length === 0) {
      return res.status(404).json({
        message: id
          ? `No se encontró el truco con ID "${id}"`
          : dificultad
            ? `No se encontraron trucos para la dificultad "${dificultad}"`
            : "No se encontraron trucos",
      });
    }

    // Obtener las opciones de respuesta para los trucos seleccionados
    const trucoIds = trucos.map(truco => truco.truco_id);
    const [opcionesRespuesta] = await pool.query(
      'SELECT * FROM Opcion_Respuesta WHERE truco_id IN (?)',
      [trucoIds]
    );

    // Organizar las opciones de respuesta por truco
    const opcionesPorTruco = trucoIds.reduce((acc, trucoId) => {
      acc[trucoId] = opcionesRespuesta
        .filter(opcion => opcion.truco_id === trucoId)
        .map(opcion => ({
          id: opcion.opcion_id,
          texto: opcion.texto_opcion,
          esCorrecto: opcion.es_correcto,
        }));
      return acc;
    }, {});

    // Mapear los datos para devolver solo la información relevante de trucos y sus opciones
    const trucosMapeados = trucos.map(truco => ({
      id: truco.truco_id,
      titulo: truco.titulo_truco,
      descripcion: truco.descripcion_truco,
      dificultad: truco.tipo_truco,
      imagen: truco.url_imagen,
      instrucciones: truco.intrucciones_truco, // Agregar esta línea
      opciones: opcionesPorTruco[truco.truco_id] || [],
    }));

    res.json(id ? trucosMapeados[0] : trucosMapeados);
  } catch (error) {
    res.status(500).json({ message: "Error al obtener los trucos", error });
  }
};



// Subir solución para un reto específico
export const submitSolution = async (req, res) => {
  try {
    const { id } = req.params;
    const { code } = req.body;

    if (!code) {
      return res.status(400).json({
        message: 'El código es requerido'
      });
    }

    // Obtener el truco y sus test cases
    const [rows] = await pool.query(`
      SELECT t.*, l.nombre_lenguaje 
      FROM Truco t
      JOIN Lenguaje l ON t.lenguaje_id = l.lenguaje_id
      WHERE t.truco_id = ?
    `, [id]);

    const truco = rows[0];
    if (!truco) {
      return res.status(404).json({
        message: 'Truco no encontrado'
      });
    }

    const [testCases] = await pool.query('SELECT * FROM Test WHERE truco_id = ?', [id]);

    if (!testCases || testCases.length === 0) {
      return res.status(404).json({
        message: 'No se encontraron test cases para este truco'
      });
    }

    // Ejecutar cada test case usando Judge0
    const results = [];
    for (const test of testCases) {
      const testData = typeof test.test_json === 'string'
        ? JSON.parse(test.test_json)
        : test.test_json;

      try {
        await new Promise(resolve => setTimeout(resolve, 1000)); // Esperar entre tests
        const result = await executeCode(code, truco.nombre_lenguaje, testData.input);

        results.push({
          passed: result.stdout?.trim() === testData.output.trim(),
          input: testData.input,
          expected: testData.output,
          got: result.stdout,
          error: result.stderr || null
        });
      } catch (error) {
        results.push({
          passed: false,
          input: testData.input,
          expected: testData.output,
          got: null,
          error: error.message
        });
      }
    }

    // Verificar si todos los test cases pasaron
    const allPassed = results.every(r => r.passed);

    res.json({
      success: allPassed,
      results,
      message: allPassed ? '¡Todos los tests pasaron!' : 'Algunos tests fallaron'
    });

  } catch (error) {
    console.error('Error detallado:', error);
    res.status(500).json({
      message: error.message,
      detail: error.toString()
    });
  }
};



// Obtener comentarios de un truco específico con mapeo de resultados
export const getComments = async (req, res) => {
  const { id } = req.params;

  try {
    const [rows] = await pool.query(
      'SELECT comentario_id, usuario_id, contenido, fecha_comentario FROM Comentario WHERE truco_id = ? ORDER BY fecha_comentario DESC',
      [id]
    );

    if (rows.length === 0) {
      return res.status(404).json({ message: `No se encontraron comentarios para el truco con ID "${id}"` });
    }

    // Mapear los datos de comentarios
    const comentariosMapeados = rows.map(comentario => ({
      id: comentario.comentario_id,
      usuarioId: comentario.usuario_id,
      contenido: comentario.contenido,
      fecha: comentario.fecha_comentario,
    }));

    res.json(comentariosMapeados);
  } catch (error) {
    res.status(500).json({ message: "Error al obtener comentarios", error });
  }
};



// Publicar un comentario sobre un truco específico
export const postComment = async (req, res) => {
  const { id } = req.params;
  const { usuario_id, contenido } = req.body;

  try {
    const [result] = await pool.query(
      'INSERT INTO Comentario (truco_id, usuario_id, contenido, fecha_comentario) VALUES (?, ?, ?, NOW())',
      [id, usuario_id, contenido]
    );

    const nuevoComentario = {
      id: result.insertId,
      usuarioId: usuario_id,
      contenido,
      fecha: new Date(),
    };

    res.json({
      message: `Comentario añadido al truco con ID: ${id}`,
      comentario: nuevoComentario,
    });
  } catch (error) {
    res.status(500).json({ message: "Error al añadir el comentario", error });
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


