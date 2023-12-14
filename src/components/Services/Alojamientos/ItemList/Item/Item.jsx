import './Item.css';

const Item = ({alojamiento}) =>{
    const {img, nombre, descripcion, tipo} = alojamiento

    return(
        <div className="Aloj-Item">
            <div className="A-Item__img__conteiner">
                <img className="A-Item__img" src={img} alt={nombre}/>
            </div>
            <h2 className="Item__title">{nombre}</h2>
            <h4 className="Item__desc">{descripcion}</h4>
            <h3 className="Item__type">{tipo}</h3>
        </div>
    )
}

export default Item