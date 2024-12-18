import React from "react";
import projectImage from "../assets/project.png";
import "./styles/project.css";
import { FaGithub } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";

export const Projects = () => {
    return (
        <div className="flex flex-col bg-blue-400"
            style={{
                backgroundImage: `url(${projectImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
            }}
        >

            {/* <div className="content-pulpo">
                <img src="/pulpo.png" />
            </div> */}

            <div className="text-center">
                <h1 className="text-4xl text-white font-bold mt-10">Proyectos</h1>
                <p className="text-gray-100 mt-4">Aquí podrás ver los proyectos que he desarrollado durante mi carrera universitaria,</p>
                <p className="text-gray-100">así como otros trabajos realizados a lo largo del tiempo.</p>
            </div>

            <div className="flex justify-center z-50">
                <div className="flex flex-wrap justify-evenly p-6 content-projects mt-10 mb-10 shadow-md rounded-lg w-style">
                    <div className="project-container">
                        <img src="trabajo1.gif" alt="Proyecto" className="project-image" />
                        <div className="overlay">
                            <p className="description"><strong>APPSOL</strong></p>
                            <p className="description">PHP, MySQL, HTML, CSS, JS</p>
                            <p className="description"> El plugin fue desarrollado sobre WordPress trata sobre el agendamiento de citas para APPSOL </p>
                            <FiExternalLink
                                size={25}
                                onClick={() => window.open('https://appsol.com.py/psicologos/cristina-espinol/', '_blank', 'noopener,noreferrer')}
                                className="text-white  transition transform duration-300 hover:scale-125 cursor-pointer z-50"
                            />
                        </div>
                    </div>

                    <div className="project-container">
                        <img src="trabajo2.gif" alt="Proyecto" className="project-image" />
                        <div className="overlay">
                            <p className="description"><strong>PetFriends</strong></p>
                            <p className="description">React, Express, Mongo</p>
                            <p className="description"> El proyecto tiene como objetivo facilitar la adopción de animales sin hogar y gestionar los servicios ofrecidos por la tienda de mascotas mediante un sistema de agendamiento y registro </p>

                            <FaGithub
                                size={25}
                                onClick={() => window.open('https://github.com/Jorg7Martinez/PetFriend', '_blank', 'noopener,noreferrer')}
                                className="text-white  transition transform duration-300 hover:scale-125 cursor-pointer z-50"
                            />
                        </div>
                    </div>

                    <div className="project-container">
                        <img src="trabajo3.png" alt="Proyecto" className="project-image" />
                        <div className="overlay">
                            <p className="description"><strong>Readme</strong></p>
                            <p className="description">Next.js, Ruby on Rails</p>
                            <p className="description">El proyecto tiene como objetivo facilitar la creación de libros desde cero, brindando a escritores y amantes de la literatura un espacio donde puedan plasmar su imaginación, compartir sus ideas y colaborar con otros apasionados por las letras</p>
                            <FaGithub
                                size={25}
                                onClick={() => window.open('https://github.com/eemilianomiranda/readme-frontend?tab=readme-ov-file', '_blank', 'noopener,noreferrer')}
                                className="text-white  transition transform duration-300 hover:scale-125 cursor-pointer z-50"
                            />

                        </div>
                    </div>

                    <div className="project-container">
                        <img src="trabajo4.png" alt="Proyecto" className="project-image" />
                        <div className="overlay">
                            <p className="description"><strong>Gluttiny</strong></p>
                            <p className="description">React</p>
                            <p className="description">El proyecto tiene como objetivo crear un espacio inclusivo y accesible para personas con dificultades alimentarias, como la celiaquía, intolerancia a la lactosa o que siguen dietas veganas. Este espacio les permitirá encontrar recursos, recetas y productos</p>
                            <div className="flex justify-around">
                                <FaGithub
                                    size={25}
                                    onClick={() => window.open('https://github.com/EnriqueRiosUniversidad/Glutiny', '_blank', 'noopener,noreferrer')}
                                    className="text-white  transition transform duration-300 hover:scale-125 cursor-pointer mr-10 z-50"
                                />
                                <FiExternalLink
                                    size={25}
                                    onClick={() => window.open('https://llamaz01.github.io/PortafolioGlutinny/', '_blank', 'noopener,noreferrer')}
                                    className="text-white  transition transform duration-300 hover:scale-125 cursor-pointer z-50"
                                />
                            </div>
                        </div>
                    </div>

                    <div className="project-container">
                        <img src="trabajo5.gif" alt="Proyecto " className="project-image" />
                        <div className="overlay">
                        <p className="description"><strong>Happy Work</strong></p>
                            <p className="description">React, TailwindCSS, Mongo, Express</p>
                            <p className="description">Los usuarios pueden comentar y puntuar su experiencia laboral en diferentes empresas. Su objetivo es ofrecer una visión general y transparente sobre el ambiente de trabajo de una empresa a quienes desean postularse a un empleo en ella</p>

                            <div className="flex justify-around">
                                <FiExternalLink
                                    size={25}
                                    onClick={() => window.open('https://happy-work.vercel.app/home', '_blank', 'noopener,noreferrer')}
                                    className="text-white  transition transform duration-300 hover:scale-125 cursor-pointer z-50"
                                />
                            </div>
                        </div>
                    </div>

                </div>
            </div>

        </div>
    )
}