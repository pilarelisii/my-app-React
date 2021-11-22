import './CarritoBoton.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faShoppingCart} from '@fortawesome/free-solid-svg-icons';
import { UsingCart } from '../../../context/CartContext';


export function CarritoBoton() {
    const {cart} = UsingCart();

    var totalCart = cart.reduce((acc, curr) => acc + curr.quantity, 0)
    return (
    <>
        <div className="carrito">
            <button className="boton-carrito">
            <FontAwesomeIcon icon={faShoppingCart} />
            </button>
            <p>{totalCart}</p>
        </div>
    </>
    )
}