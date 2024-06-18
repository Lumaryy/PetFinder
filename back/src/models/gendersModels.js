import mongoose from "mongoose";


const generosSchemas = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        lowercase: true,
    }
})

const genderModel =mongoose.model('generos',generosSchemas)

export default genderModel