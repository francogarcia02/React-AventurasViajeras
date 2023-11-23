import './Redes.css';
import { Link } from 'react-router-dom'

const Redes = () =>{
    return(
        <div className="Redes">
            <h2 className="Redes__title">Redes</h2>
            <div className="Redes__subcont">
                <Link to="https://www.instagram.com/"><img className="Redes__img" src="../../../assets/img/Footer/instagram.png"/></Link>
                <Link to="https://www.facebook.com/"><img className="Redes__img" src="../../../assets/img/Footer/facebook.png"/></Link>
                <Link to="https://twitter.com/home"><img className="Redes__img" src="../../../assets/img/Footer/twitter.png"/></Link>
            </div>
        </div>
    )
}

export default Redes