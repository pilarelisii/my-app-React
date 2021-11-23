import { createContext, useContext } from "react";
import { useState } from 'react';

const CartContext = createContext();

export const UsingCart = () => useContext(CartContext);

export const CartProvider = (props) => {
    const [cart, setCart] = useState([])
    const addItem = (item, quantity) => {
        const thisItem = {...item, quantity}

        setCart([...cart, thisItem])
    }

    const removeItem = (id) => {
        setCart(cart.filter((item) => item.id !== id))
    }

    const clearCart = () => {
        setCart([]);
    }

    return(
        <CartContext.Provider value={{addItem, removeItem, clearCart, cart : cart}}>
        {props.children}
        </CartContext.Provider>
    )
}


  
