import './ItemList.css';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../../../firebase/config';
import { useState } from 'react';
import Item from './Item/Item';

const ItemList = () =>{
    const excursionesDB = collection(db, 'Alojamientos')
    const [excursiones, setExcursiones] = useState([])

    getDocs(excursionesDB)
        .then(resp=>{
            setExcursiones(
                resp.docs.map(doc=>{
                    return{...doc.data()}
                })
            )
        })

    return(
        <div className="Excursiones-conteiner">
            {excursiones && excursiones.map(exc=>(
                <Item key={exc.id} excursion={exc}/>
            ))}
        </div>
    )
}

export default ItemList;