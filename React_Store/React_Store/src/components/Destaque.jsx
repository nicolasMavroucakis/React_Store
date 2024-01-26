import React from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Moletom_1 from '../assets/moletom_1.png'
import Moletom_2 from '../assets/moletom_2.png'
import Moletom_3 from '../assets/moletom_3.png'
import Tenis_1 from '../assets/tenis_5.png'
import './Destaque.css';

const products = [
    { id: 'produto_destaque_1', name: 'Moletom' , name_2:'Jordan x J Balvin' , price: 'R$ 999,99' , image: Moletom_1 , to:'/products/moletomJordanJB' },
    { id: 'produto_destaque_2', name: 'Moletom' , name_2:'Nike x Off-White' , price: 'R$ 999,99' , image: Moletom_2 , to:'/products/moletomOffWhithe'},
    { id: 'produto_destaque_3', name: 'Moletom' , name_2:'Anorak' , price: 'R$ 999,99' , image: Moletom_3 , to:'/products/MoletomAnorak'},
    { id: 'produto_destaque_4', name: 'Tênis' , name_2:'Jordan 7' , price: 'R$ 1899.99' , image: Tenis_1 , to:'/products/TenisJordan7'},
];

const Destaque = () => {
    return (
        <div className='produtos_destaque_container'>
            <AnimatePresence>
                {products.map((product) => (
                    <motion.div
                        key={product.id}
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="produtos"
                        transition={{ duration: .7 }}
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
                            <Link to={`${product.to}`}>Detalhes</Link>
                        </div>
                    </motion.div>
                ))}
            </AnimatePresence>
        </div>
    );
};

export default Destaque;
