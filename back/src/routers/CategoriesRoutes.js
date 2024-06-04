import { Router } from 'express'
import { registrarCategoria, listarCategoria } from '../controllers/CategoriesController.js'

const categoryRoute = Router()

categoryRoute.get('/listar', listarCategoria)
categoryRoute.post('/registrar', registrarCategoria)

export default categoryRoute