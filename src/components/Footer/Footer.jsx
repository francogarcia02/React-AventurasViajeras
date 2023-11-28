import './Footer.css'
import PreFooter from './PreFooter/PreFooter';
import Contacto from './Bricks/Contacto/Contacto';
import Logo from './Bricks/Logo/Logo';
import Redes from './Bricks/Redes/Redes';
import { Link } from 'react-router-dom'

const Footer = () =>{

    const link = (<Link className="Developer__link" to="https://github.com/francogarcia02">Franco Garcia</Link>)

    return(
        <div>
            <PreFooter/>
            <div className="Conteiner">
                <div className="Footer">
                    <Contacto/>
                    <Logo/>
                    <Redes/>
                </div>
                <div className="SubCont">
                    <p className="SubCont__p1">© 2023 Empresa de ejemplo | Todos los derechos reservados.</p>
                    <p className="SubCont__p2">Desarrollado por {link}</p>
                </div>
            </div>
            <div className="Whatsapp">
                <Link to="https://wa.me/3512290552"><img className="Whatsapp-img" src="../../../assets/img/Footer/whatsapp.png" alt="wsp logo"/></Link>
            </div>
        </div>
    )
}

export default Footer