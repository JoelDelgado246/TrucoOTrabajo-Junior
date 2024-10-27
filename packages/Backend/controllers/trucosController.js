export const getAllTrucos = (req, res) => {
    res.json({ message: "Todos los trucos" });
};

export const getTrucoById = (req, res) => {
    const { id } = req.params;
    res.json({ message: `Truco con ID: ${id}` });
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