import './ItemList.css';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../../../firebase/config';
import { useState } from 'react';
import Item from './Item/Item';

const ItemList = () =>{
    const alojamientosDB = collection(db, 'Alojamientos')
    const [alojamientos, setAlojamientos] = useState([])

    getDocs(alojamientosDB)
        .then(resp=>{
            setAlojamientos(
                resp.docs.map(doc=>{
                    return{...doc.data()}
                })
            )
        })

    return(
        <div className="Alojamientos-conteiner">
            {alojamientos && alojamientos.map(alo=>(
                <Item key={alo.id} alojamiento={alo}/>
            ))}
        </div>
    )
}

export default ItemList;