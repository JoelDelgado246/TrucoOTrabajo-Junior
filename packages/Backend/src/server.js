// Archivo: server.js
import express from 'express';
import cors from 'cors';
import trucosRoutes from './routes/trucosRoutes.js';
import tratosRoutes from './routes/tratosRoutes.js';
import dotenv from 'dotenv';
import { pool } from './db/db.js';

dotenv.config(); // Cargar variables de entorno

const app = express();

app.use(cors({
  origin: 'http://localhost:5173' // Puerto donde corre tu frontend
}));

// Middleware para procesar JSON
app.use(express.json());

// Ruta de prueba para verificar la conexión
app.get('/prueba', async (req, res) => {
  const [resultado] = await pool.query('SELECT "respondiendo" as result');
  res.json(resultado[0]);
});

// Registrar las rutas de trucos y tratos sin prefijos adicionales
app.use('/trucos', trucosRoutes);
app.use('/tratos', tratosRoutes);

// Iniciar el servidor
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
