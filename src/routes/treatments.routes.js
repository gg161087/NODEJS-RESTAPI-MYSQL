import {Router} from 'express'
import {getTreatments, postTreatment, putTreatment, deleteTreatment} from '../controllers/treatments.controller.js'

const router = Router()

router.get('/treatments', getTreatments);

router.post('/treatments', postTreatment);

router.put('/treatments', putTreatment);

router.delete('/treatments', deleteTreatment);

export default router