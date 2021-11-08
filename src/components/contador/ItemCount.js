import { useState } from 'react';
import './ItemCount.css';
import { Card } from 'react-bootstrap';

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



export function Stock(props) {
    return (
        <>
        <p>{props.cantidad}</p>
        </>
    )
}