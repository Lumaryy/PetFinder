import jwt from 'jsonwebtoken'
import userModel from '../models/usersModels.js'


import { compare } from "../config/bcrypt.js"

const Login = async (req, res) => {
    try {
        const { email, password } = req.body

        const usuarioLogin = await userModel.find({
            email: email
        })
        if (usuarioLogin.length === 0) return res.status(400).json({ "mensaje": "correo es incorrecto" })
        let user = usuarioLogin[0]

        const checkContra = await compare(password, user.password)

        if (checkContra) {
            const token = jwt.sign({ usuario: user }, process.env.AUTH_SECRET, { expiresIn: process.env.TIME })

            return res.status(200).json({
                "Mensaje": "Usuario autorizado",
                token: token
            })
        }
        return res.status(400).json({ mensaje: "contraseña es incorrecta" })

    } catch (error) {
        return res.status(500).json({ mensaje: "error en el servidor" + error })
    }
}

export default Login