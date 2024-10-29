import express from 'express'
import cors from 'cors';
import trucosRoutes from './routes/trucosRoutes.js' 
import tratosRoutes from './routes/tratosRoutes.js'
import dotenv from 'dotenv'
import { pool } from './db/db.js';


const app = express()

// Middleware para procesar JSON en el cuerpo de la solicitud
app.use(express.json());

app.use(cors());

app.get('/prueba', async (req, res) => {
  const [resultado] = await pool.query('Select "respondiendo" as result')
  res.json(resultado[0])
})

app.use('/trucos',trucosRoutes)
app.use('/tratos',tratosRoutes)

app.listen(process.env.PORT, () => {
    console.log('Servidor corriendo en', process.env.PORT);
  });