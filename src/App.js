import { Navbar } from './components/navbar/NavBar.js';
import { Cart } from './components/cart/Cart.js';
import { ItemList } from './components/ItemList/ItemList'
import {ItemDetailContainer} from './components/detalleProducto/ItemDetailContainer';
import { BrowserRouter, Route } from 'react-router-dom';
import { Routes } from 'react-router';
import React from 'react';
import {  CartProvider } from './context/CartContext.js';


function App() {
  

  return (
    <>
    <CartProvider>
      <BrowserRouter>
      <Navbar />
          <Routes>
            <Route exact path="/" element={<ItemList/>}/>
            <Route exact path="/detalleProducto/:itemId" element={<ItemDetailContainer/>}/>
            <Route exact path="/Cart" element={<Cart/>}/>
          </Routes>
        </BrowserRouter>
      </CartProvider>
    </>
    )
}

export default App;
