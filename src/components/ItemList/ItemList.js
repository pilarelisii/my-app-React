import { useEffect, useState } from 'react';
import './ItemList.css';
import { Link } from 'react-router-dom';
import React from 'react';
import { Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { getFirestore } from '../../firebase'
import { collection, getDocs } from 'firebase/firestore'

export function ItemList() {

    

    function Producto({id, nombre, precio, urlImg}) {
        return (
            <>
            <Card style={{ width: '18rem' }} className='contenedor-contador' key={id} border="dark">
                <Card.Img src={urlImg} variant="top"/>
                <Card.Body>
                    <h2>Articulo {nombre}</h2>
                    <h4>Precio: ${precio}</h4>
                    <Link to={`/detalleProducto/${id}`}><button className="detalle">Ver detalle</button></Link>
                </Card.Body>
            </Card>
            </>
        )
    }
    
    const [productos, setProductos] = useState(null);
    
    useEffect(() => {
        const db = getFirestore();
        
        getDocs(collection(db, "articulos"))
        .then((snapshot) => {
          setProductos(snapshot.docs.map(doc => doc.data()));
        })
      }, []);

    if(!productos) return <h1 className="loading">Cargando..</h1>

    return (
        <>
        <div className='contenedor-ItemList'>
        {productos?.map(producto => <Producto key={producto.id} id={producto.id} nombre={producto.nombre} precio={producto.precio} urlImg={producto.urlImg}/>)}
        </div>
        
        </>
    )

    
}