import { motion, AnimatePresence } from 'framer-motion';
import Tenis_1 from '../assets/tenis.png'
import Tenis_2 from '../assets/tenis_2.png'
import Moletom from '../assets/moletom_4.png'
import Gorro from '../assets/gorro_1.png'
import { Link } from 'react-router-dom';
import './Promocao.css';

const Promocao = () => {
    const products = [
        {id:'product_promocao_1', name:'Tênis', subname:'SB Dunk Low Pro', image:Tenis_1, to:'/product/tenisSBDunkLowPro'},
        {id:'product_promocao_2', name:'Moletom', subname:'Nike', image:Moletom, to:'/product/moletomNike'},
        {id:'product_promocao_3', name:'Gorro', subname:'Off-White', image:Gorro, to:'/product/gorroOffWhite'},
        {id:'product_promocao_4', name:'Tênis', subname:'Nike Air Max', image:Tenis_2, to:'/product/tenisNikeAirMax'}
    ]

    return(
        <div className="promocao_container_div">
            <div className="promocao_title">
                <h1>Promoção</h1>
            </div>
            <div className="prom_produtos">
                <AnimatePresence>
                    {products.map((product) => (
                        <motion.div
                            key={product.id}
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            className='produto_em_promocao'
                            transition={{duration: .5}}
                            id={product.id}
                        >
                            <div className='produto_em_prom_text'>
                                <h2>{product.name}</h2>
                                <h2>{product.subname}</h2>
                                <h2>{product.price}</h2>
                            </div>
                            <div className='produtos_img'>
                                <img src={product.image}/>
                            </div>
                            <div className='produto_but'>
                                <Link to={`${product.to}`}>Detalhes</Link>
                            </div>
                       </motion.div> 
                    ))}
                </AnimatePresence>
            </div>
        </div>  
    )
}
export default Promocao