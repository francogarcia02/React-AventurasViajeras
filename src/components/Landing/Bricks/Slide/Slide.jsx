import './Slide.css';
import React, { useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../../../firebase/config';
import SlideList from './SlideList/SlideList';


const Slide = () =>{
    const [opiniones, setOpiniones] = useState([])

    const opinionesDB = collection(db, 'Opiniones')

    getDocs(opinionesDB)
        .then(op => {
            setOpiniones(
                op.docs.map(doc=>{
                    return{...doc.data()}
                })
            )
        })

    return (
        <SlideList opiniones={opiniones}/>
    )
}

export default Slide