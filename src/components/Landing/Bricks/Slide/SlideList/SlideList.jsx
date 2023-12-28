import './SlideList.css';
import { useState, useEffect } from 'react';
import SlideItem from './SlideItem/SlideItem';
import { Dot, ArrowRight, ArrowLeft } from 'react-bootstrap-icons'

const SlideList = ({opiniones}) =>{
    const [index, setIndex] = useState(0);
    const [opinionSelected, setOpinionSelected] = useState(opiniones[0])

    const handleChange = (direction) => {
        setIndex(prevIndex => {
            let change = 0;
            if (direction) {
                change = prevIndex < opiniones.length - 1 ? prevIndex + 1 : 0;
            } else {
                change = prevIndex > 0 ? prevIndex - 1 : opiniones.length - 1;
            }
            setOpinionSelected(opiniones[change]);
                return change;
        });

    };

    const previous = () =>{
        handleChange(false)
    }
    const next = () =>{
        handleChange(true)
    }

    useEffect(()=>{
        setOpinionSelected(opiniones[index])
    },[index,opiniones])

    const handleIndex = (i) =>{
        setIndex(i)
    }

    return (
        <div className='SlideList'>
            <div className='SlideList__container'>
                <button className='btn p-3' onClick={previous}><ArrowLeft/></button>
                {opinionSelected &&
                    <SlideItem op={opinionSelected}/>
                }
                <button className='btn p-3' onClick={next}><ArrowRight/></button>
            </div>
            <div className='DotsContainer p-1'>
                {opiniones && opiniones.map((element, index) => (
                    <Dot className='Dot' onClick={() =>{handleIndex(index)}}/>
                ))}
            </div>
        </div>
    )
}
export default SlideList