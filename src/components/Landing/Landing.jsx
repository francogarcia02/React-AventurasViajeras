import './Landing.css';
import InfoServices from './Bricks/InfoServices/InfoServices';
import AboutUs from './Bricks/AboutUs/AboutUs';
import Imagen from './Bricks/Imagen/Imagen';
import Slide from './Bricks/Slide/Slide';



const Landing = () =>{
    return(
        <div className="Landing__grid">
            <Imagen/>
            <InfoServices/>
            <Slide/>
            <AboutUs/>
        </div>
    )
}

export default Landing