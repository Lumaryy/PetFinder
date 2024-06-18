import mongoose from "mongoose";


const razasSchemas = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        lowercase: true,
    }
})


const raceModel =mongoose.model('razas',razasSchemas)

export default raceModel