import mongoose from 'mongoose'

const url = 'mongodb://127.0.0.1:27017/petfinder'

const conexion = ()=>{
    try{
        mongoose.connect(url);
        console.log('melon melon melo');
    } catch (err){
        console.error('paila',err);
    }
}
export default conexion