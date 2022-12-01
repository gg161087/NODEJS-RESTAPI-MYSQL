import {Router} from 'express'
import {getDoctors, postDoctor, putDoctor, deleteDoctor} from '../controllers/doctors.controller.js'

const router = Router()

router.get('/doctors', getDoctors);

router.post('/doctor', postDoctor);

router.put('/doctor', putDoctor);

router.delete('/doctor', deleteDoctor);

export default router