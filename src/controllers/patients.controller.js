const getPatients = (req, res)=>{
    res.send('Obteniendo Patients')
}
const postPatient = (req, res)=>{
    res.send('creando Patients')
}
const putPatient = (req, res)=>{
    res.send('Actualizando Patients')
}
const deletePatient = (req, res)=>{
    res.send('eliminando Patients')
}

export {getPatients, postPatient, putPatient, deletePatient}