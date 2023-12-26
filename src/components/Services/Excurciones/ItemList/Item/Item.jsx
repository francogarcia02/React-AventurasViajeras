import './Item.css';
import { lazy, Suspense } from 'react';

const Item = ({excursion}) =>{
    const {img, nombre, descripcion} = excursion
    const Img = lazy( ()=> import('../../../ItemsImg/ItemsImg') )

    return(
        <div className="Excur-Item">
            <div className="E-Item__img__conteiner">
                <Suspense fallback={<h5>Cargando...</h5>}>
                    <Img ruta={img}/>
                </Suspense>
            </div>
            <h2 className="Item__title">{nombre}</h2>
            <h4 className="Item__desc">{descripcion}</h4>
        </div>
    )
}

export default Item