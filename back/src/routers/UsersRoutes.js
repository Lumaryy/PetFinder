import { Router } from 'express'
import { RegistraUsuario,ListarUsuarios } from '../controllers/UsersControllers.js'

const userRoute = Router()

userRoute.get('/listar', ListarUsuarios)
userRoute.post('/registrar', RegistraUsuario)

export default userRoute