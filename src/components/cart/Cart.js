import { Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faTimes} from '@fortawesome/free-solid-svg-icons';
import {faTrashAlt} from '@fortawesome/free-solid-svg-icons';
import './Cart.css';
import { UsingCart } from '../../context/CartContext';
import { Link } from 'react-router-dom';

export function Cart() {
    const {cart, removeItem, clearCart} = UsingCart(); 
    
    if (cart.length > 0) {
        var show = false;
    } else if ( cart <= 0) {
        show = true
    }

    
    return (
        <>
        { show ? "" : <FontAwesomeIcon icon={faTrashAlt} className="clear" onClick={clearCart}/>}
            {cart?.map((itemHere) => {
                return(
        
                <Card className="item" border="dark" >
                <Card.Body style={{display: 'flex', justifyContent:'space-between'}}>
                    <div>
                        <h1>ARTICULO: {itemHere.nombre}</h1>
                        <h2>Precio: ${itemHere.precio}</h2>
                    </div>
                    <div>
                        <p style={{ fontSize: 30, margin: 'auto'}}>{itemHere.quantity}</p>
                        <FontAwesomeIcon icon={faTimes} style={{ fontSize: 30, margin: 'auto'}} onClick={() => removeItem(itemHere.id)}/>
                    </div>
                </Card.Body>
                </Card>
            
                );
            })
            }
        { show ? "" :<div className="bottom">
                        <p className="totalPrice">TOTAL: ${cart.reduce((acc, curr) => acc + curr.precio * curr.quantity, 0)}</p>
                        <button className="fin"><p>Terminar compra</p></button> 
                    </div>
        }
        {show && <div className="active"> 
                    <h1 className="vacio"> No tenes ningun producto en el carrito! <Link to="/">Compra ya!</Link></h1>
                </div> }
            
        </>
    )
}