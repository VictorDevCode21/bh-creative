import { AiOutlineMenu } from 'react-icons/ai'
import { useState } from 'react'
import { Link, animateScroll as scroll } from "react-scroll";

function Nav() {
  const [open, setOpen] = useState(false)

  return (
    <nav className="lg:w-full lg:h-full xs:w-full xs:h-20 flex sticky top-0 z-10 bg-white" style={{ zIndex: 100 }} >
      <div className="w-1/2 h-20 flex lg:items-center lg:justify-center xs:items-center xs:justify-center">
        <p className="font-bold font-oswald text-xl">BH CREATIVE</p>
      </div>
      <div className="w-1/2 h-20 lg:flex lg:items-center lg:justify-center xs:hidden">
        <div className="w-full h-full flex justify-between items-center lg:pr-10 lg:pl-10">
          <Link className="text-black text-lg font-semibold hover:text-cyan-400 cursor-pointer" to="home" smooth={true} duration={500} >Inicio</Link>
          <Link className="text-black text-lg font-semibold hover:text-cyan-400 cursor-pointer" to="services" smooth={true} duration={500} >Servicios</Link>
          <Link className="text-black text-lg font-semibold hover:text-cyan-400 cursor-pointer" to="about" smooth={true} duration={500} >Sobre nosotros</Link>
          <Link className="text-black text-lg font-semibold hover:text-cyan-400 cursor-pointer" to="projects" smooth={true} duration={500} >Proyectos</Link>
          <Link className="text-black text-lg font-semibold hover:text-cyan-400 cursor-pointer" to="contact" smooth={true} duration={500} >Contacto</Link>
        </div>
      </div>
      <div className="w-1/2 h-20 flex lg:hidden xs:flex justify-end items-center pr-6 relative">
        <button className="p-2" onClick={() => setOpen(!open)}>
          <AiOutlineMenu size={30} />
        </button>
      </div>
      {open && (
        <div className='bg-gray-400 absolute top-16 right-6 flex flex-col items-center w-28'>
          <Link className="text-black text-lg font-semibold hover:text-cyan-400 cursor-pointer" to="homem" smooth={true} duration={500} >Inicio</Link>
          <Link className="text-black text-lg font-semibold hover:text-cyan-400 cursor-pointer" to="services" smooth={true} duration={500} >Servicios</Link>
          <Link className="text-black text-lg font-semibold hover:text-cyan-400 cursor-pointer" to="aboutm" smooth={true} duration={500} >Sobre nosotros</Link>
          <Link className="text-black text-lg font-semibold hover:text-cyan-400 cursor-pointer" to="projects" smooth={true} duration={500} >Proyectos</Link>
          <Link className="text-black text-lg font-semibold hover:text-cyan-400 cursor-pointer" to="contact" smooth={true} duration={500} >Contacto</Link>
        </div>
      )}
    </nav>
  )
}

export default Nav