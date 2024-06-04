import mongoose from 'mongoose'

const petSchema = new mongoose.Schema({
    name: {
        type: String,
        maxlength:32,
        required: true
    },
    race_id: {
        type: mongoose.Schema.Types.ObjectId,   
        ref: 'races',
        required: true
    },
    category_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'categories',
        required: true
    },
    photo: {
        type: String,
        maxlength: 64
    },
    gender_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'genders'
    }
})

const petModel = mongoose.model('pets', petSchema)

export default petModel