import React from "react";
import './Navbar.css';
import { useState } from 'react'
import sportStrade from '../assets/img/logo-ecomerce-nav.png';
import carrito from '../assets/img/carrito-de-compras.png';
import buscar from '../assets/img/busqueda.png';
import hamburger from '../assets/img/menu-hamburguesa.png';
// import Productos from "./Productos";
// import Contacto from "./Contacto";
// import Ofertas from "./Ofertas";
// import App from "./App";
import { Link } from "react-router-dom";




function Navbar() {

    const [isMenuOpen, setIsMenuOpen] = useState(true);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const [mostrarCampo, setMostrarCampo] = useState(false);

    const toggleCampoBusqueda = () => {
        setMostrarCampo(!mostrarCampo);
    }



    return (

        <nav className="Nav_bar">
            <button id="abrir" className={`burguer ${isMenuOpen ? 'active' : ''}`} onClick={toggleMenu}>
                <img src={hamburger} alt="" />
            </button>
            <div className={`nav_visible ${isMenuOpen ? 'container_nav_item' : ''}`}>
                {/* <Router> */}
                    <ul className="nav">
                        <li><Link className="Link" to="/" >Inicio</Link></li>
                        <li><Link className="Link" to="/Productos" >Productos</Link></li>
                        <li><Link className="Link" to="/Ofertas" >Ofertas</Link></li>
                        <li><Link className="Link" to="/Contacto" >Contacto</Link></li>
                    </ul>
                    {/* <Routes>
                        <Route path="/" element={App} />
                        <Route path="/Productos" element={Productos} />
                        <Route path="/Ofertas" element={Ofertas} />
                        <Route path="/Contacto" element={Contacto} />
                    </Routes> */}
                {/* </Router> */}
            </div>
            <div className="logo">
                <img className="sportstrade" src={sportStrade} alt="..." />
            </div>

            <div className="boton-busqueda">
                <button onClick={toggleCampoBusqueda} className="btn-buscar"><img className="buscar" src={buscar} alt="..." /></button>{mostrarCampo && (
                    <div>
                        <input type="text" placeholder="Buscar" aria-label="Search" />
                    </div>
                )}
            </div>

            <div className="carrito">
                <img className="carrito" src={carrito} alt="" />
            </div>
        </nav>


    )
}

export default Navbar