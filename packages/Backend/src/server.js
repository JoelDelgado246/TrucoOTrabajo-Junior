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
  origin: 'https://auj-truco-trato.netlify.app'
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

app.listen(process.env.PORT, () => {
    console.log('Servidor corriendo en', process.env.PORT);
    console.log('db host',process.env.DB_HOST);
    console.log('db user',process.env.DB_USER);
    console.log('db pw',process.env.DB_PASSWORD);
    console.log('db database',process.env.DB_NAME);
    console.log(process.env.DB_PORT);
  });
