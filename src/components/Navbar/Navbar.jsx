import './Navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () =>{
    return(
        <header>
            <nav>
                <Link to="/">Hola mundo</Link>
            </nav>
        </header>
    )
}

export default Navbar