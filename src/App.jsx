import Navbar from './components/Navbar/Navbar';
import Landing from './components/Landing/Landing';
import Footer from './components/Footer/Footer';
import Alojamientos from './components/Services/Alojamientos/Alojamientos';
import Excurciones from './components/Services/Excurciones/Excurciones';
import Contact from './components/Contact/Contact';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';


const App = ()=>{
    return(
        <BrowserRouter>
            <Navbar/>
            <Routes>
                <Route path='/' element={<Landing/>}/>
                <Route path='/Alojamientos' element={<Alojamientos/>}/>
                <Route path='/Excurciones' element={<Excurciones/>}/>
                <Route path='/Contacto' element={<Contact/>}/>
            </Routes>
            <Footer/>
        </BrowserRouter>

    )
}

export default App