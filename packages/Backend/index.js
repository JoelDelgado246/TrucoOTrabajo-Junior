const express = require('express')

const app = express()

app.get('/trucos', (req, res) => res.send("obteniendo trucos"))
app.post('/trucos', (req, res) => res.send("creando trucos"))
app.put('/trucos', (req, res) => res.send("actualizando trucos"))
app.delete('/trucos', (req, res) => res.send("eliminando trucos"))

app.listen(3000)