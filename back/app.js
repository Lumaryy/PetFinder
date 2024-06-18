import Express from "express"
import bodyParser from "body-parser"
import cors from 'cors'

import ConexionMongo from './src/database/conexion.js'
import LoginRouter from "./src/routers/loginRoutes.js"
import userRoute from './src/routers/UsersRoutes.js'
import raceRoute from './src/routers/RacesRoutes.js'
import categoryRoute from './src/routers/CategoriesRoutes.js'
import genderRoute from './src/routers/GendersRoutes.js'
import petRoute from './src/routers/PetsRoutes.js'


const servidor = Express()
const port = 3000

servidor.use(cors())

servidor.use(bodyParser.json())
servidor.use(bodyParser.urlencoded({ extended: true }))

new ConexionMongo()

servidor.use(Express.static('./public'))


servidor.use('/login', LoginRouter)
servidor.use('/user', userRoute)
servidor.use('/raza', raceRoute)
servidor.use('/categoria', categoryRoute)
servidor.use('/genero', genderRoute)
servidor.use('/mascota', petRoute)

servidor.use("/documents", (req, res) => {
    res.render("document.ejs");
});
  

servidor.listen(port, () => console.log(`ejecutando en puerto http://localhost:${port}`))