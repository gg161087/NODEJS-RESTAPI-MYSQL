import {conn} from '../conection_db.js'

const getDoctors = async(req, res)=>{
    const [rows] = await conn.query('SELECT * FROM doctors')
    res.json(rows)
}
const postDoctor = async (req, res)=>{
    const {name, matriculation_number, dni} = req.body
    const [rows] = await conn.query('INSERT INTO doctors (name, matriculation_number, dni) VALUES (?,?,?)', [name, matriculation_number, dni])
    console.log('Doctor agregado exitosamente:')
    res.send({
        id: rows.insertId,
        name,
        matriculation_number,
        dni
    })
}
const putDoctor = (req, res)=>{
    res.send('Actualizando doctors')
}
const deleteDoctor = (req, res)=>{
    res.send('eliminando doctors')
}

export {getDoctors, postDoctor, putDoctor, deleteDoctor}