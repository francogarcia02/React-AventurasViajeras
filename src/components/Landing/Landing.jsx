import './Landing.css';
import InfoServices from './Bricks/InfoServices/InfoServices'
import AboutUs from './Bricks/AboutUs/AboutUs'
import Imagen from './Bricks/Imagen/Imagen'


const Landing = () =>{
    return(
        <div className="Landing__grid">
            <Imagen/>
            <InfoServices/>
            <AboutUs/>
        </div>
    )
}

export default Landing