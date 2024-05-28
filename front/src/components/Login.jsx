import React from "react"
import { Link } from "react-router-dom"

const Login = () => {
    return (
        <>
            <div className="flex relative bg-[url('/bg-login.svg')] w-[400px] h-[785px] justify-center items-center">
                <input type="text" className="absolute flex w-11/12 pl-4 rounded-full outline-none h-11 opacity-60 bg-slate-100 bottom-44 placeholder:text-sky-800" placeholder="Correo Electrónico"/>
                <input type="text" className="absolute flex w-11/12 pl-4 rounded-full outline-none h-11 opacity-60 bg-slate-100 bottom-28 placeholder:text-sky-800" placeholder="Contraseña"/>
                <Link to='/ListarMascotas' className="absolute flex items-center justify-center w-11/12 pl-4 text-gray-300 bg-blue-900 rounded-full h-11 bottom-9"><button>Ingresar</button></Link>
            </div>
        </>
    )
}

export default Login