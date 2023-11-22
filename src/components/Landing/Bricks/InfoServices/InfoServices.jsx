import './InfoServices.css'
import { Link } from 'react-router-dom';

const InfoServices = () =>{
    return(
        <div className="Services">
            <h1 className="Services__title">Conoce nuestros servicios</h1>
            <div className="Services__cont">
                <div className="cont__item">
                    <Link to='/Excurciones'><img className="cont__item__img" src='../../../assets/img/img01.png' alt='paisaje'/></Link>
                    <Link className="cont__item__title" to='/Excurciones'>Excurciones</Link>
                </div>
                <div className="cont__item">
                    <Link to='/Alojamientos'><img className="cont__item__img" src='../../../assets/img/img02.png' alt='paisaje'/></Link>
                    <Link className="cont__item__title" to='/Alojamientos'>Alojamientos</Link>
                </div>
                <div className="cont__item">
                    <Link to='/Transporte'><img className="cont__item__img" src='../../../assets/img/img03.png' alt='paisaje'/></Link>
                    <Link className="cont__item__title" to='/Transporte'>Transporte</Link>
                </div>
            </div>
        </div>
    )
}

export default InfoServices