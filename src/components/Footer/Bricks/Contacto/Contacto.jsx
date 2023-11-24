import './Contacto.css';
import { Link } from 'react-router-dom';

const Contacto = () =>{

    const mail = 'turismo@UnaEmpresa.com'

    return(
        <div className="Contacto">
            <h2 className="Contacto__title">Contacto</h2>
            <h5 className="Contacto__item">Un Lugar, Argentina</h5>
            <Link className="mail" to="mailto:{mail}"><h5 className="Contacto__item">{mail}</h5></Link>
            <h5 className="Contacto__item">+54 9 0351-123-4567</h5>
        </div>
    )
}

export default Contacto