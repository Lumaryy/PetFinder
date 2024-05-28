import { createUser, getUsers, getUserById, updateUser, deleteUser } from '../controllers/UsersControllers.js';
import { Router } from "express";

const UserRouter= Router()

UserRouter.post('/registrar', createUser);
UserRouter.get('/listar', getUsers); 
UserRouter.get('/listar/:id', getUserById); 
UserRouter.put('/actualizar/:id', updateUser); 
UserRouter.delete('/eliminar/:id', deleteUser); 



export default UserRouter 