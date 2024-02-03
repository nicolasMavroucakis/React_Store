import Slider from "../components/Slider"
import './Moletom_jordan_jb.css'
import Complete_outfit from "../components/complete_outfit"
import Tamanho_unico from "../components/Tamanho_unico"
import Compr_but from "../components/Compr_but"
import Frete from "../components/Frete"
import { AnimatePresence,motion } from "framer-motion"


const Gorro_Jordan = () => {
    return (
        <AnimatePresence>
            <motion.div
                key='produto'
                initial={{opacity: 0, y: 50}}
                animate={{opacity: 1, y: 0}}
                className="jb_container"
                transition={{duration:.5}}
            >
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
            </motion.div>
            <motion.div
                key='produto'
                initial={{opacity: 0, y: 50}}
                animate={{opacity: 1, y: 0}}
                className="complete_outfit_div_title"
                transition={{duration:.5, delay: .5}}
            >
                <h1>Complete seu Outfit</h1>
            </motion.div>
            <motion.div
                key='produto'
                initial={{opacity: 0, y: 50}}
                animate={{opacity: 1, y: 0}}
                transition={{duration:.5, delay: 1}}
            >
                <Complete_outfit/>
            </motion.div>
        </AnimatePresence>
    )
}
export default Gorro_Jordan