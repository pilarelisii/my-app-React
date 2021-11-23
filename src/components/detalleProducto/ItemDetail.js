import './ItemDetail.css';
import { ItemCount } from '../contador/ItemCount.js';
import swal from 'sweetalert';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { UsingCart } from '../../context/CartContext';
import { Link } from 'react-router-dom';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faTimes} from '@fortawesome/free-solid-svg-icons';

export function ItemDetail({id, nombre, precio, urlImg, stock}) {
    
    const {addItem} = UsingCart();
    
    
    const onAddOptions = (quantity) => {
        var text = "";
        var secText = "";
        if (quantity > 1) {
            text = " productos ";
            secText = " agregaron "
        } else {
             text = " producto "
             secText = " agregó ";
        }
        
        swal({
            title: quantity + text + "se" + secText + "al carrito!" , 
            icon: "success",
            timer: 900,
            buttons: false
        })
        
        addItem({id, nombre, precio, urlImg}, quantity);
    }
    
    return (
        
        <>
        
        <section key={id} className="detalle-art">
        <Link to="/"><FontAwesomeIcon icon={faTimes} className="goBack"/></Link>
            <article>
                <h1 className="nombre-art">Articulo: {nombre} </h1>
                <img src={urlImg} alt="aca iria la imagen"/>
                <h3 className="precio">Precio: ${precio}</h3>
                <h5 className="descripcion">Descripcion: Lorem ipsum dolor sit amet, 
                consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
                labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
                exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </h5>
            </article>
            <article>
        
                <ItemCount stock={stock} onAdd={onAddOptions}/>
                <Link to="/Cart"><button variant="dark" className="goCart"><p>Ir al carrito</p></button></Link>
            </article>
        </section>

        </>
    );
}

