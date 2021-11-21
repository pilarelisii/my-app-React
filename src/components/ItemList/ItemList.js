import { useEffect, useState } from 'react';
import './ItemList.css';
import { Link } from 'react-router-dom';
import React from 'react';
import { Card } from 'react-bootstrap';
import articulos from '../data/articulos.json';
import 'bootstrap/dist/css/bootstrap.min.css';

export function ItemList() {


    function Producto({id, nombre, precio, urlImg}) {
        return (
            <>
            <Card style={{ width: '18rem' }} className='contenedor-contador' key={id} border="dark">
                <Card.Img src={urlImg} variant="top"/>
                <Card.Body>
                    <h2>Articulo {nombre}</h2>
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


    return (
        <>
        <div className='contenedor-ItemList'>
        {productos?.map(producto => <Producto key={producto.id} id={producto.id} nombre={producto.nombre} precio={producto.precio} urlImg={producto.urlImg}/>)}
        </div>
        
        </>
    )

    
}