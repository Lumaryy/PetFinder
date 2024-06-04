import mongoose from 'mongoose'
import bcrypt from 'bcrypt'

const userSchema = new mongoose.Schema({
    fullname: {
        type: String,
        maxlength: 32,
        required: true
    },
    email: {
        type: String,
        maxlength: 32,
        required: true,
        unique: true
    },
    password: {
        type: String,
        maxlength:64,
        required: true
    }
})

const userModel = mongoose.model('users', userSchema)

export default userModel

export const encriptarPassword = async (password) => {
    const passwordEncriptada = await bcrypt.hash(password, 8)
        return passwordEncriptada
}

export const compararPassword = async (texto, passwordEncriptada) => {
    return await bcrypt.compararPassword(texto, passwordEncriptada)
}