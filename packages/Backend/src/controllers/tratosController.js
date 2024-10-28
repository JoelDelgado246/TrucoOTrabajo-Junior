import { pool } from '../db/db.js';

// Obtener tratos con filtros opcionales
export const getTratos = async (req, res) => {
  const { id, trucoId } = req.query; // Parámetros de consulta para id y trucoId

  try {
    let query = 'SELECT * FROM Trato';
    const params = [];

    // Filtro por id de trato específico
    if (id) {
      query += ' WHERE trato_id = ?';
      params.push(id);
    } 
    // Filtro por truco_id (relacionado a un truco específico)
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

    // Mapeo de los datos de respuesta
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
    res.status(500).json({ message: 'Error al obtener los tratos', error });
  }
};
