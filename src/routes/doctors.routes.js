import {Router} from 'express'
import {getDoctors, postDoctor, putDoctor, deleteDoctor} from '../controllers/doctors.controller.js'

const router = Router()

router.get('/doctors', getDoctors);

router.post('/doctors', postDoctor);

router.put('/doctors', putDoctor);

router.delete('/doctors', deleteDoctor);

export default router