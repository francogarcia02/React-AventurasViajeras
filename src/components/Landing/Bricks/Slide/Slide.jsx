import './Slide.css';
import React, { useState } from 'react';
import { collection, getDocs } from 'firebase/firestore'
import { db } from '../../../../firebase/config';


const Slide = () =>{
const [slideIndex, setSlideIndex] = useState(0);
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

    const goToSlide = (index) => {
        setSlideIndex(index);
     };

    return (
        <div className="Slide__conteiner">
            {
            opiniones
            ?
            <>
            <div className="Slide__conteiner-content">
                <h3 className="content-text">{opiniones[slideIndex]?.opinion}</h3>
                <h5 className="content-name">{opiniones[slideIndex]?.nombre}</h5>
            </div>

            <div className="Button-conteiner">
                {
                opiniones.map(item => (
                <button className="Button-conteiner__button" key={item.id} onClick={() => goToSlide(item.alt)}>
                    +
                </button>
                ))
                }
            </div>
            </>
            :
            <div>
                No hay opiniones
            </div>
            }
        </div>
    )
}

export default Slide