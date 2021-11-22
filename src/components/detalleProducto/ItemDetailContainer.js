import './ItemDetail.css';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ItemDetail } from './ItemDetail';
import { getFirestore } from '../../firebase';
import { collection, getDocs, query, where } from 'firebase/firestore'

export function ItemDetailContainer() {

    const [item, setItem] = useState(null);
    const { itemId } = useParams();

    useEffect(() => {
        const db = getFirestore();
        
        const q = query(collection(db, "articulos"), where('id', '==', parseInt(itemId)));
        getDocs(q).then((snapshot) => {
          setItem(snapshot.docs.map(doc => doc.data()));
        })
    }, [itemId]);

    console.log('itemId: '+itemId)

    if(!item) return <h1 className="loading">Cargando..</h1>
    console.log(item[0].id);
   return (
    <>
        <ItemDetail id={item[0].id} nombre={item[0].nombre} precio={item[0].precio} urlImg={item[0].urlImg} stock={item[0].stock} />
    </>
   );
}