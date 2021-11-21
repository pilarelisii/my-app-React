import './ItemCount.css';
import { useState } from 'react';




export function ItemCount({stock, onAdd}) {
   

    const [counter, setCounter] = useState(1)
    const sumar = () => { 
        if(counter < stock) {
        setCounter(counter + 1)
        }
    };
    const restar = () => {
        if(counter > 1) {
        setCounter(counter - 1);
        }
    }
    
    
    return (
    <>
    <div className="contenedor-contador">
        <div className='contador'>
            <button className='btn' onClick={sumar} > + </button>
            <p for="contador">{counter}</p>
            <button onClick={restar} className="btn"> - </button>
            
        </div>
        <button onClick={()=> {onAdd(counter)}} className="addCart"><p>Agregar al carrito</p></button>
    </div>
    </>
    );
};
