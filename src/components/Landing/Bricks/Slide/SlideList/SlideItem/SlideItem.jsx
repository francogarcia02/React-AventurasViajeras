import './SlideItem.css';

const SlideItem = ({op}) =>{
    const {opinion, nombre} = op
    return(
        <div className='SlideItem'>
            <h3 className='p-5'>{opinion}</h3>
            <h5 className='p-3'>{nombre}</h5>
        </div>
    )
}

export default SlideItem