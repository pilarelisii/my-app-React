import { useEffect, useState } from 'react';
import './ItemList.css';
import { Link } from 'react-router-dom';
import React from 'react';
import { Card } from 'react-bootstrap';
import articulos from '../data/articulos.json';
import { ItemCount } from '../contador/ItemCount';

export function ItemList() {


    function Producto({id, nombre, precio, urlImg}) {
        return (
            <>
            <Card style={{ width: '18rem' }} className='contenedor-contador' key={id}>
            <Card.Body>
            <img src={urlImg} alt="img"/>
            <h3>Articulo {nombre}</h3>
            <ItemCount stock='5' inicio='0'/>
            <h4>Precio: {precio}</h4>
            <Link to={`/detalleProducto/${id}`}><button className="detalle">Ver detalle</button></Link>
            </Card.Body>
            </Card>
            </>
        )
    }
    
    const [productos, setProductos] = useState(null);
    
    const getItem = (Articulos) => 

        new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(Articulos)
        }, 2000);
        });


    useEffect(() => {
        getItem(articulos)
        
        .then((res) => {
            setProductos(res) 
        });
    }, []);

        console.log('funciona '+productos)

    return (
        <>
        <div className='contenedor-ItemList'>
        {productos?.map(producto => <Producto key={producto.id} id={producto.id} nombre={producto.nombre} precio={producto.precio} urlImg={producto.urlImg}/>)}
        </div>
        </>
    )

    
}