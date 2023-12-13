import './Item.css';

const Item = ({excursion}) =>{
    const {img, nombre, descripcion} = excursion

    return(
        <div className="Excur-Item">
            <div className="Item__img__conteiner">
                <img className="Item__img" src={img} alt={nombre}/>
            </div>
            <h2 className="Item__title">{nombre}</h2>
            <h4 className="Item__desc">{descripcion}</h4>
        </div>
    )
}

export default Item