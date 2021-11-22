//internas
import './Cart.css';
// externas , estilos
import { Card } from 'react-bootstrap';
import Form from 'react-bootstrap/Form'
import 'bootstrap/dist/css/bootstrap.min.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faTimes} from '@fortawesome/free-solid-svg-icons';
import {faTrashAlt} from '@fortawesome/free-solid-svg-icons';
//react
import { UsingCart } from '../../context/CartContext';
import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import { getFirestore } from '../../firebase'
import { addDoc, collection } from '@firebase/firestore';
import swal from 'sweetalert';

export function Cart() {
    const {cart, removeItem, clearCart} = UsingCart(); 
    
    if (cart.length > 0) {
        var show = false;
    } else if ( cart <= 0) {
        show = true
    }

    var itemsShopp = cart;
    var totalPrice = cart.reduce((acc, curr) => acc + curr.precio * curr.quantity, 0)

    const [name , setName] = useState('');
    const [email, setEmail] = useState('');
    const [number, setNumber] = useState('');
    const getName = (e) => {
        setName(e.target.value)
    }
    const getEmail = (e) => {
        setEmail(e.target.value)
    }
    const getNumber = (e) => {
        setNumber(e.target.value)
    }
    
    const sendOrder = () => {
        if (name == '' || email == '' || number == '') {
            swal({
                title: "¡Rellena el formulario completo!",
                icon: 'error',
                timer: 800,
                buttons: false
            });
        } else {
            const order = {
                nombre: name,
                email: email,
                numero: number,
                items: itemsShopp,
                total: totalPrice
            }
            const db = getFirestore();
            const ordersCollection = collection(db, "orders");


            addDoc(ordersCollection, order).then(({id}) => {
                swal({
                    title: "¡Tu pedido ya esta hecho!",
                    icon: "success",
                    text: "Este es tu codigo de compra: " + id +". Asegurate de copiarlo!",
                    buttons: "Finalizar"
                }) 
            });
        }
    }

    return (
        <>
        <section className="conatiner-cart">
        { show ? "" : 
        <><h1 className="title">Carrito de compras</h1>
        <FontAwesomeIcon icon={faTrashAlt} className="clear" onClick={clearCart} /></>
        }
            {cart?.map((itemHere) => {
                return(
        
                <Card className="item" border="dark" >
                    <img src={itemHere.urlImg} alt="img"/>
                    <Card.Body className="item-body">
                        <div>
                            <h1>ARTICULO: {itemHere.nombre}</h1>
                            <h2>Precio: ${itemHere.precio}</h2>
                        </div>
                        <div>
                            <p style={{ fontSize: 30, margin: 'auto'}}>x{itemHere.quantity}</p>
                            <FontAwesomeIcon icon={faTimes} className="delete" onClick={() => removeItem(itemHere.id)}/>
                        </div>
                    </Card.Body>
                </Card>
            
                );
            })
            }
        {show && <div className="active"> 
                    <h1 className="vacio"> No tenes ningun producto en el carrito! <Link to="/">Compra ya!</Link></h1>
                </div> }
        
        { show ? "" :
        <>
        <Card className="container-form">
            <Card.Body>
                <Card.Title>Ingresar datos para finalizar compra</Card.Title>
            <Form className="form"> 
                <Form.Group className="eachGroup" controlId="formText">
                    <Form.Label>Nombre</Form.Label>
                    <Form.Control onChange={e => getName(e)} type="text" placeholder="Nombre completo" name="nombre"/>
                </Form.Group>

                <Form.Group className="eachGroup" controlId="formBasicEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control onChange={e => getEmail(e)} type="email" placeholder="Ingresar email" name="email"/>
                </Form.Group>

                <Form.Group className="eachGroup" controlId="formNumber">
                    <Form.Label>Numero de celular</Form.Label>
                    <Form.Control onChange={e => getNumber(e)} type="number" placeholder="Numero" name="number"/>
                </Form.Group>
            </Form>
            </Card.Body>
        </Card>
        
        <div className="bottom">
                        <p className="totalPrice">TOTAL: ${totalPrice}</p>
                        <button className="fin" onClick={sendOrder}><p>Terminar compra</p></button> 
        </div>
        </>
        }
        
        </section>
        </>
    )
    
}