import userModel from '../models/usersModels.js'

export const registrarUsuario = async (req, res) => {
    try {
        const data = req.body
        const docs = await userModel.create(data)
        res.send({ data: docs })
    } 
    catch (error) {
        res.status(500).send({ error: error.message })
    }
}

export const listarUsuarios = async (req, res) => {
    try {
        const users = await userModel.find({})
        res.send(users)
    }
    catch (error) {
        res.status(500).send({ error: error.message })
    }
}