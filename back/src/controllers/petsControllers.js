import petModel from '../models/petsModels.js'
import multer from 'multer'

const storage = multer.diskStorage({
    destination: function(req, file, cb) {cb(null, 'public/img')},
    filename: function(req, file, cb) {cb(null, file.originalname)}
})

const upload = multer({ storage: storage })
export const cargarImagen = upload.single('img')

export const registrarMascota = async (req, res) => {
    try {
        let {name, race_id, category_id, gender_id} = req.body
        let img = req.file.originalname

        const data = new petModel ({
            name,
            race_id,
            category_id,
            photo: img,
            gender_id
        })

        await data.save()
        res.status(200).json({ "message": "Se registró con éxito" })
    }
    catch (error) {
        res.status(500).json({ "error": "Error en el servidor" + error })
    }
}

export const listarMascota = async (req, res) => {
    try {
        const race = await petModel.find({})
        res.send(race)
    }
    catch (error) {
        res.status(500).json({ "error": "Error en el servidor" + error })
    }
}

export const eliminarMascota = async (req, res) => {
    try {
        let {id} = req.params
        const result = await petModel.findByIdAndDelete(id)
        if(result) {
            res.status(200).json({ "message": "Se eliminó con éxito" })
        }
        else {
            res.status(404).json({ "error": "No se eliminó" })
        }
    }
    catch (error) {
        res.status(500).json({ "error": "Error en el servidor" + error })
    }
}

export const actualizarMascota = async (req,res) => {
    try {
        let {id} = req.params
        let {name, race_id, category_id, gender_id} = req.body

        let img = ''
        if (req.file) {
            img = req.file.filename
        }

        let update = []
        if (name) update.name = name
        if (race_id) update.race_id = race_id
        if (category_id) update.category_id = category_id
        if (gender_id) update.gender_id = gender_id
        if (img) update.photo = img

        const result = await petModel.findByIdAndUpdate(id, {$set: update}, {new: true})

        if(result) {
            res.status(200).json({ "message": "Se actualizó con éxito" })
        }
        else {
            res.status(404).json({ "error": "No se actualizó" })
        }
    }
    catch (error) {
        res.status(500).json({ "error": "Error en el servidor" + error })
    }
}