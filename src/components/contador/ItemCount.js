import { useState } from 'react';
import './ItemCount.css';
import { Card } from 'react-bootstrap';

export function ItemCount({stock}) {

    const [counter, setCounter] = useState(0)
    const sumar = () => { 
        if(counter < stock) {
        setCounter(counter + 1)
        }
    };
    const restar = () => {
        if(counter > 0) {
        setCounter(counter - 1);
        }
    }
    
    
    
    return (
    <>
    <Card.Text className='contador'>
        <button className='btn-sumar' onClick={sumar} > + </button>
        <input value={counter} id="contador"></input>
        <label for="contador">{counter}</label>
        <button onClick={restar} > - </button>
    </Card.Text>
    
    </>
    );
};