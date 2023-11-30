import './Header.css';
import { Link } from 'react-router-dom';

const Header = () =>{
    return(
        <div className="Alojamientos-header">
            <h1 className="header-item header-title">Alojamientos</h1>
            <div className="header-present-conteiner">
                <h3 className="header-item present-conteiner-title">Nos enfocamos en brindar confort a nuestros clientes</h3>
                <p className="header-item present-conteiner-text">Tenemos una gran variedad de propiedades en alquiler, en distintos lugares de La Republica Argentina, contacta con nosotros para reservar en la fecha que mas te guste</p>
            </div>
            <div className="header-contact-conteiner">
                <Link to="https://wa.me/3512290552"><img className="contact-conteiner-img" src="../../../../assets/img/Footer/whatsapp.png" alt="wsp logo"/></Link>
                <h4 className="header-item contact-conteiner-title">Contactanos</h4>
            </div>
        </div>
    )
}

export default Header