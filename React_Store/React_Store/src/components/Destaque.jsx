import React from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Moletom_1 from '../assets/moletom_1.png';
import Moletom_2 from '../assets/moletom_2.png';
import Moletom_3 from '../assets/moletom_3.png';
import Calca_1 from '../assets/Calca_1.png';
import './Destaque.css';

const products = [
    { id: 'produto_destaque_1', name: 'Moletom' , name_2:'Jordan x J Balvin' , price: 'R$ 999,99' , image: Moletom_1 , to:'/products/MoletomJordanxJBalvin' },
    { id: 'produto_destaque_2', name: 'Moletom' , name_2:'Nike x Off-White' , price: 'R$ 999,99' , image: Moletom_2 , to:'/products/MoletomNikexOffWhite'},
    { id: 'produto_destaque_3', name: 'Moletom' , name_2:'Anorak' , price: 'R$ 999,99' , image: Moletom_3 , to:'/products/MoletomAnokar'},
    { id: 'produto_destaque_4', name: 'Calça Cargo' , name_2:'Nike' , price: 'R$ 599.99' , image: Calca_1 , to:'/products/CalçaCargoNike '},
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
                        exit={{ opacity: 0, y: -50 }}
                        className="produtos"
                        transition={{ duration: .5 }}
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

export default Destaque;
