import { Link } from "react-router-dom"
import { motion, AnimatePresence } from 'framer-motion';
import './Promocao_text_home.css';

const Promocao_text_home = () => {
    return (
        <AnimatePresence>
            <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            className="promocao_tile_motion_Div"
            transition={{ duration: .5,delay: 1 }}
            >
            <div className="promocao_title">
                <div id="promocao_title_1">
                    <h1>Promoção</h1>
                </div>
                <div id="promocao_title_2">
                    <Link to='/promocao'>Saiba Mais</Link>
                </div>
            </div>
            </motion.div>
        </AnimatePresence>
        
    )
}
export default Promocao_text_home