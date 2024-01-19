import './Footer.css'
import PreFooter from './PreFooter/PreFooter';
import Contacto from './Bricks/Contacto/Contacto';
import Logo from './Bricks/Logo/Logo';
import Redes from './Bricks/Redes/Redes';
import { Link } from 'react-router-dom'

const Footer = () =>{

    const link = (<Link className="Developer__link" to="https://francogarcia20052003.000webhostapp.com/">Franco Garcia</Link>)

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
        </div>
    )
}

export default Footer