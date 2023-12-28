import './SlideItem.css';

const SlideItem = ({op}) =>{
    const {opinion, nombre} = op
    return(
        <div className='SlideItem'>
            <h4 className='p-5'>{opinion}</h4>
            <h5 className='p-3'>{nombre}</h5>
        </div>
    )
}

export default SlideItem