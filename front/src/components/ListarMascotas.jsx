import React, { useState } from "react"
import { Link } from "react-router-dom"
import ConfirmacionModal from "./Confirmacion_Modal.jsx"

const Listar_Component = () => {
    const [showModal, setShowModal] = useState(false)

    const handleClick = () => {
        setShowModal(true)
      }
    
      const handleConfirm = () => {
        alert("Se eliminó la mascota")
        setShowModal(false)
      }
    
      const handleCancel = () => {
        setShowModal(false)
      }

    return (
        <>
            <div className="flex relative bg-[url('../../bg.svg')] w-[400px] h-[785px] justify-center items-center flex-col">
                <div className="flex absolute flex-row text-white top-10 gap-10">
                    <p>Administrar Mascotas</p>
                    <Link to='/' className="bg-[url('../../btn-close.svg')] w-[34px] h-[34px] flex absolute left-56 cursor-pointer"></Link>
                </div>
                <Link to='/AnadirMascotas' className="bg-[url('../../btn-add.svg')] w-[360px] h-[50px] flex absolute cursor-pointer top-32"></Link>
                <div className="flex absolute bg-gray-400 w-11/12 h-24 rounded-2xl top-52 items-center hover:bg-gray-500">
                    <div className="flex absolute bg-[url('../../photo-sm-1.svg')] w-[70px] h-[72px] left-3"></div>
                    <div className="flex absolute flex-col left-24">
                        <p className="text-sky-700 font-semibold">Karsten</p>
                        <p className="text-sky-700">Bulldog</p>
                    </div>
                    <Link to='/ConsultarMascotas' className="flex absolute bg-[url('../../btn-show.svg')] w-[34px] h-[34px] right-28 cursor-pointer"></Link>
                    <Link to='/EditarMascotas' className="flex absolute bg-[url('../../btn-edit.svg')] w-[34px] h-[34px] right-16 cursor-pointer"></Link>
                    <div className="flex absolute bg-[url('../../btn-delete.svg')] w-[34px] h-[34px] right-4 cursor-pointer" onClick={handleClick}></div>
                    <ConfirmacionModal
                        show={showModal}
                        onConfirm={handleConfirm}
                        onCancel={handleCancel}
                    />
                </div>
                <div className="flex absolute bg-gray-300 w-11/12 h-24 rounded-2xl top-80 items-center hover:bg-gray-400">
                    <div className="flex absolute bg-[url('../../photo-sm-2.svg')] w-[70px] h-[72px] left-3"></div>
                    <div className="flex absolute flex-col left-24">
                        <p className="text-sky-700 font-semibold">Alban</p>
                        <p className="text-sky-700">Corgi</p>
                    </div>
                    <Link to='/ConsultarMascotas' className="flex absolute bg-[url('../../btn-show.svg')] w-[34px] h-[34px] right-28 cursor-pointer"></Link>
                    <Link to='/EditarMascotas' className="flex absolute bg-[url('../../btn-edit.svg')] w-[34px] h-[34px] right-16 cursor-pointer"></Link>
                    <div className="flex absolute bg-[url('../../btn-delete.svg')] w-[34px] h-[34px] right-4 cursor-pointer" onClick={handleClick}></div>
                    <ConfirmacionModal
                        show={showModal}
                        onConfirm={handleConfirm}
                        onCancel={handleCancel}
                    />
                </div>
                <div className="flex absolute bg-gray-400 w-11/12 h-24 rounded-2xl bottom-64 items-center hover:bg-gray-500">
                    <div className="flex absolute bg-[url('../../photo-sm-3.svg')] w-[70px] h-[72px] left-3"></div>
                    <div className="flex absolute flex-col left-24">
                        <p className="text-sky-700 font-semibold">Reigner</p>
                        <p className="text-sky-700">Bulldog</p>
                    </div>
                    <Link to='/ConsultarMascotas' className="flex absolute bg-[url('../../btn-show.svg')] w-[34px] h-[34px] right-28 cursor-pointer"></Link>
                    <Link to='/EditarMascotas' className="flex absolute bg-[url('../../btn-edit.svg')] w-[34px] h-[34px] right-16 cursor-pointer"></Link>
                    <div className="flex absolute bg-[url('../../btn-delete.svg')] w-[34px] h-[34px] right-4 cursor-pointer" onClick={handleClick}></div>
                    <ConfirmacionModal
                        show={showModal}
                        onConfirm={handleConfirm}
                        onCancel={handleCancel}
                    />
                </div>
                <div className="flex absolute bg-gray-300 w-11/12 h-24 rounded-2xl bottom-36 items-center hover:bg-gray-400">
                    <div className="flex absolute bg-[url('../../photo-sm-4.svg')] w-[70px] h-[72px] left-3"></div>
                    <div className="flex absolute flex-col left-24">
                        <p className="text-sky-700 font-semibold">Alex</p>
                        <p className="text-sky-700">Siamese</p>
                    </div>
                    <Link to='/ConsultarMascotas' className="flex absolute bg-[url('../../btn-show.svg')] w-[34px] h-[34px] right-28 cursor-pointer"></Link>
                    <Link to='/EditarMascotas' className="flex absolute bg-[url('../../btn-edit.svg')] w-[34px] h-[34px] right-16 cursor-pointer"></Link>
                    <div className="flex absolute bg-[url('../../btn-delete.svg')] w-[34px] h-[34px] right-4 cursor-pointer" onClick={handleClick}></div>
                    <ConfirmacionModal
                        show={showModal}
                        onConfirm={handleConfirm}
                        onCancel={handleCancel}
                    />
                </div>
                <div className="flex absolute bg-gray-400 w-11/12 h-24 rounded-2xl bottom-8 items-center hover:bg-gray-500">
                    <div className="flex absolute bg-[url('../../photo-sm-5.svg')] w-[70px] h-[72px] left-3"></div>
                    <div className="flex absolute flex-col left-24">
                        <p className="text-sky-700 font-semibold">Ariana</p>
                        <p className="text-sky-700">Graycat</p>
                    </div>
                    <Link to='/ConsultarMascotas' className="flex absolute bg-[url('../../btn-show.svg')] w-[34px] h-[34px] right-28 cursor-pointer"></Link>
                    <Link to='/EditarMascotas' className="flex absolute bg-[url('../../btn-edit.svg')] w-[34px] h-[34px] right-16 cursor-pointer"></Link>
                    <div className="flex absolute bg-[url('../../btn-delete.svg')] w-[34px] h-[34px] right-4 cursor-pointer" onClick={handleClick}></div>
                    <ConfirmacionModal
                        show={showModal}
                        onConfirm={handleConfirm}
                        onCancel={handleCancel}
                    />
                </div>
            </div>
        </>
    )
}

export default Listar_Component