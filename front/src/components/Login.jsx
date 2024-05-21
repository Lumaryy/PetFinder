import React from 'react';

const Login = () => {
    return (
        <div className="flex items-center justify-center h-screen relative">
            <img src="./imgs/bg-login.svg" />
            <div className="absolute bottom-10 mb-21 flex flex-col items-center w-full">
                <form className="w-full max-w-xs">
                    <div className="mb-4">
                        <input
                            className="bg-white bg-opacity-60 placeholder-blue-900 placeholder-opacity-60 border-none rounded-full w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:bg-opacity-100 placeholder-custom"
                            id="email"
                            type="email"
                            placeholder="Correo Electrónico"
                        />
                    </div>
                    <div>
                        <input
                            className="bg-white bg-opacity-60 placeholder-blue-900 placeholder-opacity-60 border-none rounded-full w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:bg-opacity-100 placeholder-custom"
                            id="password"
                            type="password"
                            placeholder="Contraseña"
                        />
                    </div>
                    <div className="flex items-center justify-between">
                        <button
                            className="bg-[rgb(44,70,116)] hover:bg-[rgb(33,52,87)] text-white py-2 px-4 rounded-full focus:outline-none focus:shadow-outline w-full"
                            type="button"
                        >
                            Ingresar
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Login;
