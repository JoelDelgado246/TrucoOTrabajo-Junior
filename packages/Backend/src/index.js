import express from 'express'
import {pool} from './db/db.js'
import trucosRoutes from './routes/trucosRoutes.js' 

const app = express()



app.use(trucosRoutes)

app.get('/trucos', (req, res) => res.send("obteniendo trucos"))
app.post('/trucos', (req, res) => res.send("creando trucos"))
app.put('/trucos', (req, res) => res.send("actualizando trucos"))
app.delete('/trucos', (req, res) => res.send("eliminando trucos"))

app.listen(3000)