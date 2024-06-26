import React from "react"
import { Link } from "react-router-dom"

const Editar_Component = () => {
    return (
        <>
            <div className="flex relative bg-[url('../../bg.svg')] w-[400px] h-[785px] justify-center items-center flex-col">
                <div className="flex absolute flex-row text-white top-10">
                    <Link to='/ListarMascotas' className="bg-[url('../../btn-back.svg')] w-[12px] h-[20px] flex absolute right-56 cursor-pointer"></Link>
                    <p>Modificar Mascota</p>
                    <Link to='/' className="bg-[url('../../btn-close.svg')] w-[34px] h-[34px] flex absolute left-52 cursor-pointer"></Link>
                </div>
                <div className="bg-[url('../../photo-lg-1.svg')] w-[152px] h-[153px] flex absolute top-32"></div>
                <div className="flex items-center justify-center">
                    <div className="flex items-center justify-center">
                        <input type="text" className="absolute flex w-11/12 pl-4 rounded-full outline-none h-[50px] opacity-60 bg-slate-100 top-[330px] placeholder:text-sky-800 hover:bg-slate-200" placeholder="Reigner"/>
                    </div>
                    <div className="flex items-center justify-center">
                        <div className="bg-[url('../../arrows.svg')] w-[10px] h-[18px] flex absolute bottom-[345px] right-10 z-10 cursor-pointer"></div>
                        <input type="text" className="absolute flex w-11/12 pl-4 rounded-full outline-none h-[50px] opacity-60 bg-slate-100 bottom-[330px] placeholder:text-sky-800 z-0 hover:bg-slate-200" placeholder="Bulldog"/>
                    </div>
                    <div className="flex items-center justify-center">
                        <div className="bg-[url('../../arrows.svg')] w-[10px] h-[18px] flex absolute bottom-[270px] right-10 z-10 cursor-pointer"></div>
                        <input type="text" className="absolute flex w-11/12 pl-4 rounded-full outline-none h-[50px] opacity-60 bg-slate-100 bottom-[255px] placeholder:text-sky-800 hover:bg-slate-200" placeholder="Perro"/>
                    </div>
                    <div className="flex items-center justify-center">
                        <div className="bg-[url('../../icon-camera.svg')] w-[24px] h-[24px] flex absolute bottom-[192px] right-10 z-10 cursor-pointer"></div>
                        <input type="text" className="absolute flex w-11/12 pl-4 rounded-full outline-none h-[50px] opacity-60 bg-slate-100 bottom-[180px] placeholder:text-sky-800 hover:bg-slate-200" placeholder="Cambiar Foto"/>
                    </div>
                    <div className="flex items-center justify-center">
                        <div className="bg-[url('../../arrows.svg')] w-[10px] h-[18px] flex absolute bottom-[120px] right-10 z-10"></div>
                        <input type="text" className="absolute flex w-11/12 pl-4 rounded-full outline-none h-[50px] opacity-60 bg-slate-100 bottom-[105px] placeholder:text-sky-800 hover:bg-slate-200" placeholder="Macho"/>
                    </div>
                    <Link to='/ListarMascotas' className="bg-[url('../../btn-update.svg')] w-[360px] h-[50px] flex absolute bottom-8"></Link>
                </div>
            </div>
        </>
    )
}

export default Editar_Component