import mongoose from 'mongoose'

const url = `mongodb://127.0.0.1:27017/petfinder`

const conexion = () => {
    mongoose.connect(url)
}

export default conexion



