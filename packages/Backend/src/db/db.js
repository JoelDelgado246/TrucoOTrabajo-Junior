import mysql from 'mysql2/promise';
import dotenv from 'dotenv';

dotenv.config();

const dbConfig = {
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    port: process.env.DB_PORT,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
};

export const pool = mysql.createPool(dbConfig);

// Verificar conexión
pool.getConnection()
    .then(connection => {
        console.log('Base de datos conectada correctamente');
        connection.release();
    })
    .catch(error => {
        console.error('Error al conectar con la base de datos:', error);
    });