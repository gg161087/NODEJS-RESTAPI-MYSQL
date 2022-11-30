import express from 'express'
import {conn} from './conection_db.js'

const app = express()

app.get('/test', async (req, res) => {
    const [result] = await conn.query('SELECT 1 + 1 AS result')
    res.json(result)
});

app.get('/patients', (req, res)=>{
    res.send('Obteniendo patients')
});

app.post('/patients', (req, res)=>{
    res.send('creando patients')
});

app.put('/patients', (req, res)=>{
    res.send('Actualizando patients')
});

app.delete('/patients', (req, res)=>{
    res.send('eliminando patients')
});

app.listen(5000)