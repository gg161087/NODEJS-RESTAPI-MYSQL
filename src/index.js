import express from 'express'
import patientsRoutes from './routes/patients.routes.js'
import doctorsRoutes from './routes/doctors.routes.js'
import treatmentsRoutes from './routes/treatments.routes.js'
import { db_config } from './const/global_consts.js'

const app = express()

app.use(express.json())

app.use(patientsRoutes)
app.use(doctorsRoutes)
app.use(treatmentsRoutes)

app.listen(db_config.PORT)
console.log('Server running, http://127.0.0.1:'+db_config.PORT)
console.log('SQL HOST:'+db_config.DB_NAME)
console.log('SQL USERNAME:'+db_config.DB_USERNAME)
console.log('PWD:'+ db_config.DB_PASSWORD)