import { Router } from 'express'
import {  RegistraRaza,getRaza } from '../controllers/RacesControllers.js'

const raceRoute = Router()

raceRoute.post('/registrar', RegistraRaza)
raceRoute.get('/listar', getRaza)

export default raceRoute