import './Navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () =>{

    const ruta = '../../../public/assets/logo/.jpg'

    return(
        <header>
            <nav className="Navbar">
                <img className="Navbar__img" src={ruta} alt="logo de pagina"/>
                <Link className="Navbar__item" to="/">Home</Link>
                <Link className="Navbar__item" to="/">Alojamientos</Link>
                <Link className="Navbar__item" to="/">Excurciones</Link>
                <Link className="Navbar__item" to="/">Transportes</Link>
                <Link className="Navbar__item" to="/">Contacto</Link>
            </nav>
        </header>
    )
}

export default Navbar