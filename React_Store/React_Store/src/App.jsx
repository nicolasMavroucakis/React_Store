import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Footer from './components/Footer'

// Pages
import Home from './Pages/Home'
import Products from './Pages/Products'

// Components
import NavBar from './components/NavBar'

function App() {
  const [count, setCount] = useState(0)

  return (
      <div className='container'>
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/products' element={<Products />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </div>
  )
}

export default App
