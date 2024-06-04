import jwt from 'jsonwebtoken'
import userModel from '../models/usersModel'
import { compararPassword } from '../models/usersModel'

const MySecretToken = 'TuMejorAmigoEnCasa'

export const VerificarToken = (req, res, next) => {
    const authHeader = req.headers['authorization']
    if (!authHeader) {
        console.log("Headers recibidos:", req.headers)
        return res.status(401).json({ mensaje: "No tienes autorizacion" })
    }

    const token = authHeader.split(' ')[1]
    if (!token) {
        console.log("Token recibido:", token)
        return res.status(401).json({ mensaje: "Token no valido" })
    }

    try {
        const verified = jwt.verify(token, MySecretToken)
        req.user = verified.user
        next()
    }
    catch (error) {
        console.log("Error verificando el token:", error)
        return res.status(401).json({ mensaje: "Error verificando el token" })
    }
}

export const Login = async (req, res) => {
    try {
        const { email, password } = req.body

        const userLogin = await userModel.findOne({ email })
        if (!userLogin) {
            return res.status(400).json({ mensaje: "El usuario no existe" })
        }
        const checkPassword = await compararPassword(password, users.password)

        if (!checkPassword) {
            return res.status(400).json({ mensaje: "Contraseña incorrecta" })
        }
        const token = jwt.sign({ userLogin }, MySecretToken, { expiresIn: '24h' })
        return res.status(200).json({
            mensaje: "Bienvenido",
            token
        })
    }
    catch (error) {
        return res.status(500).json({ mensaje: "error en el servidor" + error })
    }
}