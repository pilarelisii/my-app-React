import './CarritoBoton.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faShoppingCart} from '@fortawesome/free-solid-svg-icons'


export function CarritoBoton() {
    
    return (
    <>
        <div className="carrito">
            <button className="boton-carrito">
            <FontAwesomeIcon icon={faShoppingCart} />
            </button>
            
        </div>
    </>
    )
}