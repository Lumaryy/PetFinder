import { Router } from 'express'
import { RegistrarGenero,getGenero } from '../controllers/gerdersModels.js'

const genderRoute = Router()

genderRoute.get('/listar', getGenero)
genderRoute.post('/registrar',  RegistrarGenero)

export default genderRoute