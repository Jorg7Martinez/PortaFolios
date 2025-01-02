import React from 'react';
import Typewriter from 'typewriter-effect';
import "./styles/home.css";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { MdEmail } from 'react-icons/md';
import { useNavigate } from "react-router-dom";

export function Home() {
    const navigate = useNavigate();

    const handleClick = (ruta) => {
        navigate(ruta);
    };

    return (
        <div className="responsive-height flex justify-center flex-col bg-blue-400">
            <div className="ml-14">
                <h1 className="text-4xl text-white font-bold">
                    <Typewriter
                        onInit={(typewriter) => {
                            typewriter
                                .typeString('Bienvenidos a mi Sitio Web!')
                                .pauseFor(2000)
                                .deleteAll()
                                .typeString('Este es mi Portafolio')
                                .start()

                        }}
                    />
                </h1>
                <p className='mt-4 text-white'>
                    Soy Jorge Martínez, alumno de la carrera de Ingeniería Informática.
                </p>
                <div className="flex items-start space-x-4 mt-5">

                    <FaLinkedin
                        size={30}
                        onClick={() => window.open('https://www.linkedin.com/in/jorge-martinez-67480924b/', '_blank', 'noopener,noreferrer')}
                        className="text-white  transition transform duration-300 hover:scale-125 cursor-pointer z-50"
                    />


                    <FaGithub
                        size={30}
                        onClick={() => window.open('https://github.com/Jorg7Martinez', '_blank', 'noopener,noreferrer')}
                        className="text-white  transition transform duration-300 hover:scale-125 cursor-pointer z-50"
                    />
                    <MdEmail
                        size={30}
                        color="white"
                        onClick={() => window.location.href = 'mailto:jorgemf195@gmail.com'}
                        className="text-white  transition transform duration-300 hover:scale-125 cursor-pointer z-50"
                    />

                </div>

            </div>
            <div className="flex flex-wrap justify-end gap-9 space-x-5 mt-8 mr-10">
                <div className="flex justify-between flex-col min-h-64 min-w-52 text-center shadow-lg rounded-md z-50 p-6 content-project">
                    <p className="text-2xl text-white font-semibold">Proyectos</p>
                    <button
                        onClick={() => handleClick("/projects")}
                        className="bg-transparent font-semibold text-white py-2 px-4 rounded border-2 border-white hover:border-blue-500 hover:bg-blue-500 hover:text-white transition duration-300">
                        Ver </button>
                </div>
                <div className="flex justify-between flex-col min-h-64 min-w-52 text-center shadow-lg rounded-md z-50 p-6 content-contact">
                    <p className="text-2xl text-white font-semibold">Contactar</p>
                    <button
                        onClick={() => handleClick("/contact")}
                        className="bg-transparent font-semibold text-white py-2 px-4 rounded border-2 border-white hover:border-blue-500 hover:bg-blue-500 hover:text-white transition duration-300">
                        Contáctame</button>
                </div>
            </div>
            <div className="content-boat">
                <img src="barco.png" />
            </div>
            <div className="content-tentacle">
                <img src="tentaculo.png" />
            </div>
            <div class="waves">
                <div class="wave circulo a"></div>
                <div class="wave circulo b"></div>
                <div class="wave circulo c"></div>
            </div>
        </div>
    );
}
