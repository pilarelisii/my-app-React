import './ItemDetail.css';
import items from '../data/articulos.json';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ItemDetail } from './ItemDetail';


export function ItemDetailContainer() {
    


    const { itemId } = useParams();
    const [item, setItem] = useState(null);
    console.log('itemId: '+itemId)

    const getDetail = (datos) => 
        new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(datos)
                console.log('datos: '+datos)
            }, 1000);
        });
        
    useEffect(() => {
         getDetail(items)
        
        .then(res => {
            itemId ? setItem(res.find(item => item.id === parseInt(itemId))) : setItem(items)
        })
    }, [itemId]);

    
    if(!item) return(<h1 className="loading">Cargando..</h1> || null)
   console.log(item)
   return (
    <>
        <ItemDetail id={item.id} nombre={item.nombre} precio={item.precio} urlImg={item.urlImg} stock={item.stock} />
    </>
   );
}