import Complete_outfit from "../components/complete_outfit"
import Tamanho_tenis from "../components/Tamanho_tenis"
import Compr_but from "../components/Compr_but"
import Frete from "../components/Frete"
import Slider from "../components/Slider"

const Jordan_mid_1_2 = () => {
    return (
        <div className="jb_container">
            <div className="jb_product_container">
                <div id="slider_img_jb">
                    <Slider/>
                </div>
                <div id="jb_info">
                    <div className="produto_name">
                        <h1>TÊNIS AIR JORDAN 1 MID</h1>
                        <h1>R$ 1.099,99</h1>
                    </div>
                    <Tamanho_tenis/>
                    <Compr_but/>
                    <Frete/>
                </div>
            </div>
            <div className="complete_outfit_div_title">
                <h1>Complete seu Outfit</h1>
            </div>
            <Complete_outfit/>
        </div>
    )
}
export default Jordan_mid_1_2