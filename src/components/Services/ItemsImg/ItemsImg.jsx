import './ItemsImg.css';

const ItemsImg = ({ruta}) =>{
    return(
        <img className="Item__img" src={ruta} alt="Imagen de ejemplo"/>
    )
}

export default ItemsImg