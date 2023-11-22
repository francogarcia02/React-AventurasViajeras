import './Navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () =>{

    const ruta = '../../../assets/logo/logo.png'

    return(
        <header>
            <nav className="Navbar">
                <Link className="Navbar__contImg" to="/"><img className="Navbar__img" src={ruta} alt="logo de pagina"/></Link>
                <Link className="Navbar__item" to="/">Home</Link>
                <Link className="Navbar__item" to="/Alojamientos">Alojamientos</Link>
                <Link className="Navbar__item" to="/Excurciones">Excurciones</Link>
                <Link className="Navbar__item" to="/Transportes">Transportes</Link>
                <Link className="Navbar__item" to="/">Contacto</Link>
            </nav>

        </header>
    )
}

export default Navbar