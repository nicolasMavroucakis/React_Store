import React from 'react';
import { Link } from 'react-router-dom';
import Tenis_1 from '../assets/tenis_3.png'
import Moletom from '../assets/Rick_Morty_1.png';
import Gorro from '../assets/gorro_Jor_1.png'
import Tenis_2 from '../assets/Tenis_VANS_3.png'
import { motion, AnimatePresence } from 'framer-motion';
import './Promocao_home.css';

const products = [
    {id:'product_promocao_1', name:'Tênis', subname:'SB Dunk Low Pro', price: 'R$ 1299,99', second_price:'1.099,99', image:Tenis_1, to:'/products/JordanMid1_3'},
    {id:'product_promocao_2', name:'Moletom', subname:'Nike', price: 'R$ 999,99', second_price:'799,99', image:Moletom, to:'/products/moletomNike'},
    {id:'product_promocao_3', name:'Gorro', subname:'Jordan', price: 'R$ 359,99', second_price:'299,99', image:Gorro, to:'/products/GorroJordan'},
    {id:'product_promocao_4', name:'Tênis', subname:'VANS', price: 'R$ 899,99', second_price:'699,99', image:Tenis_2, to:'/products/TenisVANS'}
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
                            <div className='product_descont_price'>
                                <h2>{product.price}</h2>
                                <h2>-</h2>
                                <h2 id='descont_price'>{product.second_price}</h2>
                            </div>
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
  );
};

export default Promocao_home;
