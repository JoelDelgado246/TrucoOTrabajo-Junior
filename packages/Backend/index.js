import express from 'express';
import trucosRoutes from './routes/trucosRoutes.js';

const app = express();
app.use(express.json());

// Usa las rutas de trucos
app.use('/api/trucos', trucosRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});