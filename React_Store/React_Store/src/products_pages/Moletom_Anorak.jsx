import Complete_outfit from "../components/complete_outfit"
import Tamanhos from "../components/tamanhos"
import Compr_but from "../components/Compr_but"
import Frete from "../components/Frete"
import Slider from "../components/Slider"

const Moletom_Anorak = () => {
    return (
        <div className="jb_container">
            <div className="jb_product_container">
                <div id="slider_img_jb">
                    <Slider/>
                </div>
                <div id="jb_info">
                    <div className="produto_name">
                        <h1>Moletom Nike Anorak</h1>
                        <h1>R$ 759.99</h1>
                    </div>
                    <Tamanhos/>
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
export default Moletom_Anorak