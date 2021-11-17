import './ItemDetail.css';
import { ItemCount } from '../contador/ItemCount';
import '../contador/ItemCount.css';
import swal from 'sweetalert';
import React from 'react';

export function ItemDetail({id, nombre, precio, urlImg}) {

        const onAddOptions = (evt) => {
            swal({
                title: "Ya elegiste tus productos", 
                text: "¿Desea seguir comprando?",
                icon: "success",
                buttons: ["Seguir comprando", "Ir al cart"]
            }).then(res=> {
                if(res) {
                    window.location = "/Cart"
                }
            })
        }
        return (
            
            <>
            <section key={id} className="detalle-art">
                <article>
                    <h1 className="nombre-art">Articulo: {nombre} </h1>
                    <img src={urlImg} alt="aca iria la imagen"/>
                    <h3 className="precio">Precio: {precio}</h3>
                    <h5 className="descripcion">Descripcion: Lorem ipsum dolor sit amet, 
                    consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
                    labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
                    exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </h5>
                </article>
                <article>
                    <button className="addCart" onClick={onAddOptions}>Agregar al carrito</button>
                    <ItemCount stock="5"/>
                </article>
            </section>


            
            </>
        );
    }
