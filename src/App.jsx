import Navbar from './components/Navbar/Navbar'
import { BrowserRouter, Route, Routes } from 'react-router-dom';


const App = ()=>{
    return(
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Navbar/>}/>
            </Routes>
        </BrowserRouter>

    )
}

export default App