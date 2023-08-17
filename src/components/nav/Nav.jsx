import React from 'react'
import "../nav/Nav.css"

const Nav = () => {
  return (
    <nav className='' >

<input type="checkbox" id='check'/>
<label htmlFor="check" className='checkbtn'>
    <i className='bx bx-menu'></i></label>


<a href="" className='enlace'><h1 className='logo'><span className='text-[#32e3e9]' >Dream</span><span>Box</span></h1></a>

<ul>
    <li><a href="#home">Inicio</a></li>
    <li><a href="#about">¿quienes somos?</a></li>
    <li><a href="#projects">servicio</a></li>
    <li><a href="#technology">beneficios</a></li>
    <li><a href="#contact">Contacto</a></li>
    <li><a href="#contact" className='btn_regis'>registrarse</a></li>
</ul>


    </nav>
  )
}

export default Nav