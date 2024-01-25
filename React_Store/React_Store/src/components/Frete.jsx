import "./Frete.css"
import Truck from '../assets/truck.png'
import Lock from '../assets/lock.png'
import Arrow from '../assets/right-arrow.png'



const Frete = () => {
    return (
        <div className="Frete_container">
            <div className="info_frete_div">
                <div className="info_frete">
                    <div className="truck_img">
                        <img src={Truck}/> 
                        <p>FRETE GRÁTIS</p>
                    </div>
                    <div className="lock_img">
                        <img src={Lock}/>
                        <p>COMPRA100% Segura</p>
                    </div>
                </div>
                <div className="info_empresa_frete">
                    <div className="frete_calc_text">
                        <p>CALCULAR FRETE</p>
                    </div>
                    <div className="frete_calc_input">
                        <input type="text" placeholder="Digite o seu cep"/>
                        <button><img src={Arrow}/></button>
                    </div>
                </div>
            </div>
            <div className="calc_frete">
                <div className="text_calc_frete">

                </div>
                <div className="input_cep_frete">

                </div>
            </div>
        </div>
    )
}
export default Frete