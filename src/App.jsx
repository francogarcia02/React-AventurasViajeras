import './App.css';
import Navbar from './components/Navbar/Navbar';
import Landing from './components/Landing/Landing';
import Footer from './components/Footer/Footer';
import Alojamientos from './components/Services/Alojamientos/Alojamientos';
import Excurciones from './components/Services/Excurciones/Excurciones';
import Transportes from './components/Services/Transportes/Transportes';
import { BrowserRouter, Route, Routes } from 'react-router-dom';


const App = ()=>{
    return(
        <BrowserRouter>
            <Navbar/>
            <Routes>
                <Route path='/' element={<Landing/>}/>
                <Route path='/Alojamientos' element={<Alojamientos/>}/>
                <Route path='/Excurciones' element={<Excurciones/>}/>
                <Route path='/Transportes' element={<Transportes/>}/>
            </Routes>
            <Footer/>
        </BrowserRouter>

    )
}

export default App