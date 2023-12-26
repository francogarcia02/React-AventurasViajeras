import './Item.css';
import { lazy, Suspense } from 'react';

const Item = ({alojamiento}) =>{
    const {img, nombre, descripcion, tipo} = alojamiento
    const Img = lazy( ()=> import('../../../ItemsImg/ItemsImg') )

    return(
        <div className="Aloj-Item">
            <div className="A-Item__img__conteiner">
                <Suspense fallback={<h5>Cargando...</h5>}>
                    <Img ruta={img}/>
                </Suspense>
            </div>
            <h2 className="Item__title">{nombre}</h2>
            <h4 className="Item__desc">{descripcion}</h4>
            <h3 className="Item__type">{tipo}</h3>
        </div>
    )
}

export default Item