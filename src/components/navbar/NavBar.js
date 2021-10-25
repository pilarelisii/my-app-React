
import './NavBar.css';
import { CarritoBoton } from '../carritoboton/CarritoBoton';



export function Navbar(){
    return (
    <>
    <header className="contenedor-header">
            <nav className="header-nav">
                <div className="logo-brand">
                   <a href="//"> <img src="" alt="LOGO"/> </a>
                </div>
                <div className="menu">
                    <ul>
                        <a href="//"><li>Inicio</li></a>
                        <a href="//"><li>Productos</li></a>
                        <a href="//"><li>Preguntas Frecuentes</li></a>
                        <a href="//"><li>Contacto</li></a>
                    </ul>
                </div>
                <CarritoBoton/>
            </nav>
    </header>
    </>
    )
}
