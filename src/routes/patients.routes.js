import {Router} from 'express'
import {getPatients, postPatient, putPatient, deletePatient} from '../controllers/patients.controller.js'
import {conn} from '../conection_db.js'

const router = Router()

router.get('/patients', getPatients);

router.post('/patients', postPatient);

router.put('/patients', putPatient);

router.delete('/patients', deletePatient);

export default router