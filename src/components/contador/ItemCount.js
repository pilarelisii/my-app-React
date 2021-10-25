import { useState } from 'react';
import './ItemCount.css';
import { Card } from 'react-bootstrap';
import { Button } from 'react-bootstrap';


export function ItemCount({stock, inicio}) {

    const [counter, setCounter] = useState(0)
    const sumar = () => { 
        if(counter < stock) {
        setCounter(counter + 1)
        }
    };
    const restar = () => {
        if(counter > inicio) {
        setCounter(counter - 1);
        }
    }
    
    
    
    return (
    <>
    <Card.Text className='contador'>
        <button className='btn-sumar' onClick={sumar} > + </button>
        <Stock cantidad={counter}/>
        <button onClick={restar} > - </button>
    </Card.Text>
    
    </>
    );
};
export function ItemList() {

        

    const articulos = [{
        id: 1,
        nombre: 'Item1',
        precio: 2500,
    },{
        id:2,
        nombre: 'Item2',
        precio: 3200
    },{
        id: 3,
        nombre: 'Item3',
        precio: 2340
    }];
    
const p = new Promise((resolve, reject) => {
    resolve('Success');
    reject('Fail');
    });

p.then((result) => {
    console.log(articulos + ' ' + result)
}).catch((err) => {
    console.log(err)
}); 

    const [productos, setProductos] = useState(articulos);

    

    function Producto({nombre, precio}) {
        return (
            <>
            <Card style={{ width: '18rem' }} className='contenedor-contador'>
            <Card.Body>
            <Card.Title>{nombre}</Card.Title>
            <ItemCount stock='5' inicio='0'/>
            <h3>Precio: <i>{precio}</i></h3>
            <Button variant="light">Agregar al carrito</Button>
            </Card.Body>
            </Card>
            </>
        )
    }
    return (
        <>
        <div className='contenedor-ItemList'>
        {productos.map(producto => <Producto nombre={producto.nombre} precio={producto.precio}/>) }
        </div>
        </>
    )

    
}


export function Stock(props) {
    return (
        <>
        <p>{props.cantidad}</p>
        </>
    )
}