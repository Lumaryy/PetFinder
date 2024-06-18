import { Router } from "express";


import { eliminarMascota,registrarMascota,ListarMascota,ListarMascotasId,actualizarMascota,ListarMascotas } from "../controllers/petsControllers.js";

import{cargarImagen}from"../config/imagenes.js"




const MascotasRoute = Router()

MascotasRoute.post('/register',cargarImagen, registrarMascota)
MascotasRoute.delete('/eliminar/:id', eliminarMascota)
MascotasRoute.get("/listar", ListarMascota);
MascotasRoute.get("/listarID/:id", ListarMascotasId)
MascotasRoute.put("/actualizar/:id", cargarImagen, actualizarMascota);


export default MascotasRoute