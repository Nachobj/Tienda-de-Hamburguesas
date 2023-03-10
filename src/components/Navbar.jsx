import React from "react";
import {FaHamburger} from 'react-icons/fa'
import CardWidget from "./CardWidget";


const NavBar = () => {
  return (
    <>
      <div className='navContainer'>
        <h1>
          Fábrica de <span>Hamburguesas</span>
        </h1>
        <ul className='navBar'>
          <li className='btnNav'> INICIO</li>
          <li className='btnNav'>COMBOS</li>
          <li className='btnNav'>NOSOTROS</li>
          <li className='btnNav'>CONTACTO</li>
        </ul>
        <button className="carrito">
          <CardWidget />
        </button>
      </div>
    </>
  )
}

export default NavBar