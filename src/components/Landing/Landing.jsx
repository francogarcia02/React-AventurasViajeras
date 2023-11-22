import './Landing.css';
import InfoServices from './Bricks/InfoServices/InfoServices'


const Landing = () =>{
    return(
        <div>
            <img className="Img__background" src='../../../assets/img/paisaje.jpg' alt='paisaje'/>
            <InfoServices/>
        </div>
    )
}

export default Landing