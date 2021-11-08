import { useEffect, useState } from 'react';
import './ItemList.css';
import { Card } from 'react-bootstrap';
import articulos from './articulos/articulos.json';
import { ItemCount } from '../contador/ItemCount';

export function ItemList() {


    function Producto({id, nombre, precio}) {
        return (
            <>
            <Card style={{ width: '18rem' }} className='contenedor-contador' key={id}>
            <Card.Body>
            <Card.Title>Articulo {nombre}</Card.Title>
            <ItemCount stock='5' inicio='0'/>
            <h3>Precio: <i>{precio}</i></h3>
            <button className="detalle">Ver detalle</button>
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
        {productos?.map(producto => <Producto key={producto.id} nombre={producto.nombre} precio={producto.precio}/>)}
        </div>
        </>
    )

    
}