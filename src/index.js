import express from 'express'
import patientsRoutes from './routes/patients.routes.js'
import doctorsRoutes from './routes/doctors.routes.js'
import treatmentsRoutes from './routes/treatments.routes.js'

const app = express()

app.use(express.json())

app.use(patientsRoutes)
app.use(doctorsRoutes)
app.use(treatmentsRoutes)

app.listen(5000)
console.log('Server running, http://127.0.0.1:5000')