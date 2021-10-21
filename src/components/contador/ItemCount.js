import { useState } from 'react';
import './ItemCount.css';



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
        <div className='contenedor-contador'>
            <h1 className='nombre-contador'>Nombre de item</h1>
            <div className='contador'>
                <button className='btn-sumar' onClick={sumar} > + </button>
                <Stock cantidad={counter}/>
                <button onClick={restar} > - </button>
            </div>
        </div>
    
    </>
    );
};
export function Stock(props) {
    return (
        <>
        <p>{props.cantidad}</p>
        </>
    )
}