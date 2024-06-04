import { Router } from 'express'
import { registrarUsuario, listarUsuarios } from '../controllers/UsersControllers.js'

const userRoute = Router()

userRoute.get('/listar', listarUsuarios)
userRoute.post('/registrar', registrarUsuario)

export default userRoute