import express from 'express'
import cors from 'cors';
import trucosRoutes from './routes/trucosRoutes.js' 
import tratosRoutes from './routes/tratosRoutes.js' 

const app = express()

// Middleware para procesar JSON en el cuerpo de la solicitud
app.use(express.json());

app.use(cors());


app.use('/trucos',trucosRoutes)
app.use('/tratos',tratosRoutes)

app.listen(3000, () => {
    console.log('Servidor corriendo en http://localhost:3000');
  });