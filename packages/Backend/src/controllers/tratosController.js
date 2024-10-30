import { pool } from '../db/db.js';

// Obtener tratos con filtros opcionales
export const getTratos = async (req, res) => {
  const { id, trucoId } = req.query;

  try {
    let query = 'SELECT * FROM Trato';
    const params = [];

    if (id) {
      query += ' WHERE trato_id = ?';
      params.push(id);
    }
    else if (trucoId) {
      query += ' WHERE truco_id = ?';
      params.push(trucoId);
    }

    const [rows] = await pool.query(query, params);

    if (rows.length === 0) {
      return res.status(404).json({
        message: id
          ? `No se encontró el trato con ID "${id}"`
          : trucoId
            ? `No se encontraron tratos para el truco con ID "${trucoId}"`
            : "No se encontraron tratos",
      });
    }

    const tratos = rows.map(trato => ({
      id: trato.trato_id,
      titulo: trato.titulo_trato,
      imagen: trato.url_imagen,
      contenido: trato.texto_contenido,
      tutorial: trato.enlace_tutorial,
      curso: trato.enlace_curso,
      descripcionTutorial: trato.descripcion_tutorial,
      descripcionCurso: trato.descripcion_curso,
    }));

    res.json(tratos);
  } catch (error) {
    console.error('Error al obtener los tratos:', error);
    res.status(500).json({ message: 'Error al obtener los tratos', error: error.message });
  }
};

export const getTratoById = async (req, res) => {
  try {
    const { id } = req.params;

    const [rows] = await pool.query('SELECT * FROM Trato WHERE trato_id = ?', [id]);

    if (rows.length === 0) {
      return res.status(404).json({
        message: `No se encontró el trato con ID "${id}"`
      });
    }

    // Usar el mismo formato de respuesta que en getTratos
    const trato = {
      id: rows[0].trato_id,
      titulo: rows[0].titulo_trato,
      imagen: rows[0].url_imagen,
      contenido: rows[0].texto_contenido,
      tutorial: rows[0].enlace_tutorial,
      curso: rows[0].enlace_curso,
      descripcionTutorial: rows[0].descripcion_tutorial,
      descripcionCurso: rows[0].descripcion_curso,
    };

    res.json(trato);
  } catch (error) {
    console.error('Error al obtener trato:', error);
    res.status(500).json({
      message: 'Error al obtener el trato',
      error: error.message
    });
  }
};

export const getTrucoById = async (req, res) => {
  const { idTruco, idTrato } = req.query;

  try {
    let query = 'SELECT * FROM Truco';
    const params = [];

    if (idTruco) {
      query += ' WHERE truco_id = ?';
      params.push(idTruco);
    }
    else if (idTrato) {
      query += ' INNER JOIN Trato ON Truco.truco_id = Trato.truco_id WHERE Trato.trato_id = ?';
      params.push(idTrato);
    }

    const [rows] = await pool.query(query, params);

    if (rows.length === 0) {
      return res.status(404).json({
        message: idTruco
          ? `No se encontró el truco con ID "${idTruco}"`
          : `No se encontró el truco relacionado al trato con ID "${idTrato}"`,
      });
    }

    const truco = {
      id: rows[0].truco_id,
      titulo: rows[0].titulo_truco,
      descripcion: rows[0].descripcion_truco,
    };

    res.json(truco);
  } catch (error) {
    console.error('Error al obtener el truco:', error);
    res.status(500).json({ message: 'Error al obtener el truco', error: error.message });
  }
};