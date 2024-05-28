import express from "express"; 
import bodyParser from "body-parser";
import UserRouter from "./src/routers/UsersRoutes.js";
import conexion from "./src/database/conexion.js";
 


const servidor = express(); 
servidor.use(bodyParser.json());
servidor.use(bodyParser.urlencoded({ extended: true }));
servidor.set('view engine', 'ejs');
servidor.set('views', './views');
servidor.use(express.static('./public')); 

conexion();


servidor.use("/usuario", UserRouter);

servidor.listen(3000, () => {
    console.log("servidor escuchando desde el puerto 3000");
});