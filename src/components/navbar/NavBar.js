import { Link } from 'react-router-dom';
import React from 'react';
import './NavBar.css';
import { CarritoBoton } from '../cart/carritoboton/CarritoBoton';
import logo from '../imagenes/logo.png';
export function Navbar(){
    return (
    <>
    <header className="contenedor-header">
            <nav className="header-nav">
                <div className="logo-brand">
                   <Link to="/"><img src={logo} alt="LOGO"/></Link>
                </div>
                <div className="menu">
                    <ul>
                        <Link to="/"><li>INICIO</li></Link> 
                        <Link to="/"><li>PRODUCTOS</li></Link>
                    </ul>
                </div>
                <Link to="/Cart"><CarritoBoton/></Link>
            </nav>
    </header>

    
    </>
    )
}
