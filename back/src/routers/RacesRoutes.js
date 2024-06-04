import { Router } from 'express'
import { registrarRaza, listarRaza } from '../controllers/RacesControllers.js'

const raceRoute = Router()

raceRoute.post('/registrar', registrarRaza)
raceRoute.get('/listar', listarRaza)

export default raceRoute