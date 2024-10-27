import {pool} from '../db/db.js'

export const getAllTrucos = async (req, res) => {
   const [rows] = await pool.query('select * from truco');
   res.json(rows)
};

export const getTrucoById = async (req, res) => {
    const { id } = req.params;
    const respuesta = await pool.query('select * from truco where truco_id=?', id);
   res.json(respuesta[0])
};

export const submitSolution = (req, res) => {
    const { id } = req.params;
    const solution = req.body.solution;
    res.json({ message: `Solución para el truco con ID: ${id}`, solution });
};

export const getComments = (req, res) => {
    const { id } = req.params;
    res.json({ message: `Comentarios para truco con ID: ${id}` });
};

export const postComment = (req, res) => {
    const { id } = req.params;
    const comment = req.body.comment;
    res.json({ message: `Comentario añadido al truco con ID: ${id}`, comment });
};