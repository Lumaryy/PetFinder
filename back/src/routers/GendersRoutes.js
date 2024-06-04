import { Router } from 'express'
import { registrarGenero, listarGenero } from '../controllers/gerdersModels.js'

const genderRoute = Router()

genderRoute.get('/listar', listarGenero)
genderRoute.post('/registrar', registrarGenero)

export default genderRoute