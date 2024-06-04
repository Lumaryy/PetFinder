import express from 'express'
import bodyParser from 'body-parser'
import conexion from './src/database/conexion.js'
import userRoute from './src/routers/UsersRoutes.js'
import raceRoute from './src/routers/RacesRoutes.js'
import categoryRoute from './src/routers/CategoriesRoutes.js'
import genderRoute from './src/routers/GendersRoutes.js'
import petRoute from './src/routers/PetsRoutes.js'

const servidor = express()
servidor.use(express.json())

const port = 3000

conexion()

servidor.use(bodyParser.json({ limit: "20mb" }))
servidor.use(bodyParser.urlencoded({ limit: "20mb", extended: true }))

servidor.use('/user', userRoute)
servidor.use('/raza', raceRoute)
servidor.use('/categoria', categoryRoute)
servidor.use('/genero', genderRoute)
servidor.use('/mascota', petRoute)

servidor.listen(port, () => {
    console.log(`listening on http://localhost:${port}`)
})