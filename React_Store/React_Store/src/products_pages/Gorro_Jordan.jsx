import Slider from "../components/Slider"
import './Moletom_jordan_jb.css'
import Complete_outfit from "../components/complete_outfit"
import Tamanho_unico from "../components/Tamanho_unico"
import Compr_but from "../components/Compr_but"
import Frete from "../components/Frete"

const Gorro_Jordan = () => {
    return (
        <div>
            <div className="jb_container">
                <div className="jb_product_container">
                    <div id="slider_img_jb">
                        <Slider/>
                    </div>
                    <div id="jb_info">
                        <div className="produto_name">
                            <h1>Gorro Jordan</h1>
                            <h1>R$ 349,99</h1>
                        </div>
                        <Tamanho_unico/>
                        <Compr_but/>
                        <Frete/>
                    </div>
                </div>
                <div className="complete_outfit_div_title">
                    <h1>Complete seu Outfit</h1>
                </div>
                <Complete_outfit/>
            </div>
        </div>
    )
}
export default Gorro_Jordan