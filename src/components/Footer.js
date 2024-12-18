import React from "react";
import "./styles/footer.css"
import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";
import { MdEmail } from 'react-icons/md';
import { Link } from "react-router-dom";

export function Footer() {
  return (
    <footer className=" bg-footer text-white py-6">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        {/* Section 1: Logo or Brand */}
        <div className="mb-4 md:mb-0">
          <h1 className="text-xl font-bold">Jorge Martínez</h1>
        </div>

        <div className="flex space-x-4 mb-4 md:mb-0 z-50">
          <Link to="/" className="text-gray-400 hover:text-white">
            Inicio
          </Link>
          <Link to="/projects" className="text-gray-400 hover:text-white z-50">
            Proyectos
          </Link>
          <Link to="/contact" className="text-gray-400 hover:text-white z-50">
            Contacto
          </Link>
        </div>

        <div className="flex space-x-4">
          <FaInstagram
            size={30}
            className="text-white  transition transform duration-300 hover:scale-125 cursor-pointer z-50"
            onClick={() => window.open('https://www.instagram.com/jorg7_martinez/', '_blank', 'noopener,noreferrer')}

          />
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

      <div className="text-center text-gray-400 text-sm mt-6">
        © 2024 All rights reserved.
      </div>
    </footer>
  );
}
