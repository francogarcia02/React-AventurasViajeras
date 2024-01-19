import './Navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () =>{
    return(
        <header>
            <nav className="Navbar">
                <Link className="Navbar__item" to="/">Home</Link>
                <Link className="Navbar__item" to="/Alojamientos">Alojamientos</Link>
                <Link className="Navbar__item" to="/Excurciones">Excursiones</Link>
                <Link className="Navbar__item" to="/Contacto">Contacto</Link>
            </nav>
        </header>
    )
}

export default Navbar