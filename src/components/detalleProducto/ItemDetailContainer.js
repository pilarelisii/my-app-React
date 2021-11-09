import './ItemDetail.css';
import items from '../ItemList/articulos/articulos.json';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ItemDetail } from './ItemDetail';


export function ItemDetailContainer() {
    console.log('cargan '+items)

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

    

   if(!item) return null;
   console.log(item)
   return (
    <>
        <ItemDetail id={item.id} nombre={item.nombre} precio={item.precio} />
    </>
   );
}