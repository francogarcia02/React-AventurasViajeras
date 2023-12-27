import './SlideItem.css';

const SlideItem = ({op}) =>{
    const {opinion, nombre} = op
    return(
        <div>
            <h2>{opinion}</h2>
            <h5>{nombre}</h5>
        </div>
    )
}

export default SlideItem