import { Link } from 'react-router-dom';
import "./styles/header.css"

export const Header = () => (
  <header className="top-0 z-50 bg-nav">
    <nav>
      <ul className="flex justify-end space-x-10 p-3 ">
        <li><Link to="/" className="text-lg text-white font-bold hover:text-blue-100 cursor-pointer">Inicio</Link></li>
        <li><Link to="/projects" className="text-lg text-white font-bold hover:text-blue-100 cursor-pointer">Proyectos</Link></li>
        <li><Link to="/contact" className="text-lg text-white font-bold hover:text-blue-100 cursor-pointer">Contacto</Link></li>
      </ul>
    </nav>
  </header>
);
