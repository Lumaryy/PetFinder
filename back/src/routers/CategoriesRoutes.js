import { Router } from 'express'
import { RegistrarCategoria, getCategoria } from '../controllers/CategoriesController.js'

const categoryRoute = Router()

categoryRoute.get('/listar',getCategoria )
categoryRoute.post('/registrar',RegistrarCategoria)

export default categoryRoute