import { Link } from 'react-router-dom';
import React from 'react';
import './NavBar.css';
import { CarritoBoton } from '../carritoboton/CarritoBoton';


export function Navbar(){
    return (
    <>
    <header className="contenedor-header">
            <nav className="header-nav">
                <div className="logo-brand">
                   <Link to="/"><img src="" alt="LOGO"/></Link>
                </div>
                <div className="menu">
                    <ul>
                        
                        <Link to="/"><li>Inicio</li></Link> 
                        <Link to="/"><li>Productos</li></Link> 
                        <Link to="/PreguntasFrecuentes"><li>Preguntas Frecuentes</li></Link>
                        <Link to="/Contacto"><li>Contacto</li></Link>
                    </ul>
                </div>
                <Link to="/Cart"><CarritoBoton/></Link>
            </nav>
    </header>
    </>
    )
}
