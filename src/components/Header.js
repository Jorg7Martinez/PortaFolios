import { Link } from 'react-router-dom';
import "./styles/header.css"

export const Header = () => (
  <header className="top-0 z-50 bg-nav">
    <div className='flex justify-between items-center'>
      <div onClick={() => (window.location.href = "/")} class="cursor-pointer hover:scale-105 transition-transform duration-300">
        <img src="/logo.png" alt='logo' width={80} />
      </div>
      <div className="flex justify-end space-x-10 p-3 ">
        <Link to="/projects" className="text-lg text-white font-bold hover:text-blue-100 cursor-pointer duration-300">Proyectos</Link>
        <Link to="/contact" className="text-lg text-white font-bold hover:text-blue-100 cursor-pointer duration-300">Contacto</Link>
      </div>
    </div>

  </header>
);
