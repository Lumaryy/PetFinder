import mongoose from "mongoose";


const categoriaSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        lowercase: true,
    }
})


const categoryModel =mongoose.model('categorias',categoriaSchema)

export default categoryModel