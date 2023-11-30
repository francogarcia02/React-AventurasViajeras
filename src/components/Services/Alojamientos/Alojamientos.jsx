import './Alojamientos.css';
import ItemList from './ItemList/ItemList';
import Header from './Header/Header';


const Alojamientos = () =>{
    return(
        <div className="Alojamientos">
            <Header/>
            <ItemList/>
        </div>
    )
}

export default Alojamientos