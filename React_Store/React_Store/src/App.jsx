import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Footer from './components/Footer'

// Pages
import Home from './Pages/Home'
import Products from './Pages/Products'
import Moletom_jordan_jb from './products_pages/MoletoM_jordan_jb'
import Moletom_off_white from './products_pages/Moletom_off_white'
import Moletom_Anorak from './products_pages/Moletom_Anorak'
import Tenis_Jordan7 from './products_pages/Tenis_Jordan7'

// Components
import NavBar from './components/NavBar'
import Promocao from './Pages/Promocao'

function App() {
  const [count, setCount] = useState(0)

  return (
      <div className='container'>
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/products' element={<Products />} />
            <Route path='/promocao' element={<Promocao/>}/>
            <Route path='/products/moletomJordanJB' element={<Moletom_jordan_jb/>}/>
            <Route path='/products/moletomOffWhithe' element={<Moletom_off_white/>}/>
            <Route path='/products/MoletomAnorak' element={<Moletom_Anorak/>}/>
            <Route path='/products/TenisJordan7'  element={<Tenis_Jordan7/>}/>
          </Routes>
          <Footer />
        </BrowserRouter>
      </div>
  )
}

export default App
