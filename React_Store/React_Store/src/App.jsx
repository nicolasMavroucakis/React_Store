import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Footer from './components/Footer'

// Pages
import Home from './Pages/Home'
import Products from './Pages/Products'
import Moletom_jordan_jb from './products_pages/MoletoM_jordan_jb'

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
          </Routes>
          <Footer />
        </BrowserRouter>
      </div>
  )
}

export default App
