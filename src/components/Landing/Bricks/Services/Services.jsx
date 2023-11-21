import './Services.css'
import { Link } from 'react-router-dom';

const Services = () =>{
    return(
        <div className="Services">
            <h1 className="Services__title">Conoce nuestros servicios</h1>
            <div className="Services__cont">
                <Link to='/Excurciones'>Excurciones</Link>
                <Link to='/Alojamientos'>Alojamientos</Link>
                <Link to='/Transporte'>Transporte</Link>
            </div>
        </div>
    )
}

export default Services