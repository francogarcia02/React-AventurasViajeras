import './Item.css';

const Item = ({alojamiento}) =>{
    const {img, nombre, descripcion, tipo} = alojamiento

    console.log(nombre)

    return(
        <div className="Excur-Item">
            <div className="Item__img__conteiner">
                <img className="Item__img" src={img} alt={nombre}/>
            </div>
            <h2 className="Item__title">{nombre}</h2>
            <h4 className="Item__desc">{descripcion}</h4>
            <h3 className="Item__type">{tipo}</h3>
        </div>
    )
}

export default Item