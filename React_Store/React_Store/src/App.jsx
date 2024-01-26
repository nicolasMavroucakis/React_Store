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
import Tenis_Dunk_Low_Pro from './products_pages/Tenis_Dunk_Low_Pro'
import Moletom_Puma_RM from './products_pages/Moletom_Puma_RM'
import Gorro_Jordan from './products_pages/Gorro_Jordan'
import Jordan_Mid from './products_pages/Jordan_mid_1'
import Jordan_mid_1_2 from './products_pages/Jordan_mid_1_2'
import Jordan_mid_1_3 from './products_pages/Jordan_mid_1_3'
import Tenis_VANS from './products_pages/Tenis_VANS'
import Bone_Vans from './products_pages/BoneVANS'

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
            <Route path='/products/TenisSBDunkLowPro' element={<Tenis_Dunk_Low_Pro/>}/>
            <Route path='/products/MoletomPumaRM' element={<Moletom_Puma_RM/>}/>
            <Route path='/products/GorroJordan' element={<Gorro_Jordan/>}/>
            <Route path='/products/JordanMid1' element={<Jordan_Mid/>}/>
            <Route path='/products/JordanMid1_2' element={<Jordan_mid_1_2/>}/>
            <Route path='/products/JordanMid1_3' element={<Jordan_mid_1_3/>}/>
            <Route path='/products/TenisVANS' element={<Tenis_VANS/>}/>
            <Route path='/products/BoneVANS' element={<Bone_Vans/>}/>
          </Routes>
          <Footer />
        </BrowserRouter>
      </div>
  )
}

export default App
