import './Compr_but.css'
import { useLocation } from "react-router-dom"
import { useState } from 'react'




const Compr_but = () => {
    const location = useLocation()
    const pathname = location.pathname

    const [TenisSBDunkLowPro, setTenisSBDunkLowPro] = useState(false)

    function HandleClick () {
        if (pathname == '/products/TenisSBDunkLowPro' ) {
            setTenisSBDunkLowPro(true)     
        }
    }

    return (
        <div className="ad_car_but">
            <button onClick={HandleClick}>Adicionar ao Carrinho</button>
        </div>
    )
}
export default Compr_but