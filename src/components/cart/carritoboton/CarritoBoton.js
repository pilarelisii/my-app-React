import './CarritoBoton.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faShoppingCart} from '@fortawesome/free-solid-svg-icons';
import { UsingCart } from '../../../context/CartContext';


export function CarritoBoton() {
    const {cart} = UsingCart();

    console.log(cart.length)

    return (
    <>
        <div className="carrito">
            <button className="boton-carrito">
            <FontAwesomeIcon icon={faShoppingCart} />
            </button>
            <p>{cart.length}</p>
        </div>
    </>
    )
}