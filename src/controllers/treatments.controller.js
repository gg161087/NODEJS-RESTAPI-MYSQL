const getTreatments = (req, res)=>{
    res.send('Obteniendo Treatments')
}
const postTreatment = (req, res)=>{
    res.send('creando Treatment')
}
const putTreatment = (req, res)=>{
    res.send('Actualizando Treatment')
}
const deleteTreatment = (req, res)=>{
    res.send('eliminando Treatment')
}

export {getTreatments, postTreatment, putTreatment, deleteTreatment}