import React from 'react';
import { Link } from 'react-router-dom';
import Tenis_1 from '../assets/tenis.png';
import Moletom_1 from '../assets/moletom_4.png';
import Gorro from '../assets/gorro_1.png';
import Tenis_2 from '../assets/tenis_2.png';
import { motion, AnimatePresence } from 'framer-motion';
import './Promocao_home.css';

const products = [
  { id: 'produto_promocao_1', name: 'Tênis', name_2: 'SB Dunk Low Pro', price: 'R$ 999,99', image: Tenis_1, to: '/products/TênisSBDunkLowPro' },
  { id: 'produto_promocao_2', name: 'Moletom', name_2: 'Nike ', price: 'R$ 499,99', image: Moletom_1, to: '/products/MoletomNike' },
  { id: 'produto_promocao_3', name: 'Gorro', name_2: 'Off-White', price: 'R$ 399,99', image: Gorro, to: '/products/GorroOff-White' },
  { id: 'produto_promocao_4', name: 'Tênis', name_2: 'Nike Air Max', price: 'R$ 999.99', image: Tenis_2, to: '/products/TênisNikeAirForce' },
];

const Promocao_home = () => {
  return (
    <div className='produtos_destaque_container'>
            <AnimatePresence>
                {products.map((product) => (
                    <motion.div
                        key={product.id}
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -50 }}
                        className="produtos"
                        transition={{ duration: .5, delay:1 }}
                        id={product.id}
                    >
                        <div className='produtos_text'>
                            <h2>{product.name}</h2>
                            <h2>{product.name_2}</h2>
                            <h2>{product.price}</h2>
                        </div>
                        <div className='produtos_img'>
                            <img src={product.image}/>
                        </div>
                        <div className='produto_but'>
                            <Link to={`/${product.to}`}>Detalhes</Link>
                        </div>
                    </motion.div>
                ))}
            </AnimatePresence>
        </div>
  );
};

export default Promocao_home;
