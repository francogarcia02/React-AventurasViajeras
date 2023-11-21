import './App.css';
import Navbar from './components/Navbar/Navbar';
import Landing from './components/Landing/Landing';
import { BrowserRouter, Route, Routes } from 'react-router-dom';


const App = ()=>{
    return(
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<><Navbar/><Landing/></>}/>
            </Routes>
        </BrowserRouter>

    )
}

export default App