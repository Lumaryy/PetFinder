import { Router } from 'express'
import { registrarMascota, listarMascota, cargarImagen } from '../controllers/petsControllers.js'

const petRoute = Router()

petRoute.get('/listar', listarMascota)
petRoute.post('/registrar', cargarImagen, registrarMascota)

export default petRoute