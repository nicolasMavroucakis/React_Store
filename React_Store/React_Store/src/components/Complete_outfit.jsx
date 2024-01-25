import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import Tenis_1 from '../assets/tenis.png';
import Moletom_1 from '../assets/moletom_4.png';
import Gorro from '../assets/gorro_1.png';
import Tenis_2 from '../assets/tenis_2.png';
import Moletom_2 from '../assets/moletom_2.png'
import Moletom_3 from '../assets/moletom_3.png'
import Moletom_4 from '../assets/moletom_1.png'
import Tenis_3 from '../assets/tenis_3.png'
import Tenis_4 from '../assets/tenis_4.png'
import Tenis_5 from '../assets/tenis_5.png'
import Tenis_6 from '../assets/tenis_6.png'
import Bone from '../assets/bone.png'
import './Complete_outfit.css';

const Complete_outfit = () => {
  const initialProducts = [
    { id: 'produto_1', tipo_produto:'Tênis',name: 'Tênis', name_2: 'Dunk Low Pro', price: 'R$ 999,99', image: Tenis_1, to: '/products/TênisSBDunkLowPro' },
    { id: 'produto_2', tipo_produto:'Moletom',name: 'Moletom', name_2: 'Nike ', price: 'R$ 499,99', image: Moletom_1, to: '/products/MoletomNike' },
    { id: 'produto_3', tipo_produto:'Acessorio',name: 'Gorro', name_2: 'Off-White', price: 'R$ 349,99', image: Gorro, to: '/products/GorroOff-White' },
    { id: 'produto_4', tipo_produto:'Tênis',name: 'Tênis', name_2: 'Nike Air Max', price: 'R$ 999.99', image: Tenis_2, to: '/products/TênisNikeAirMax' },
    { id: 'produto_5', tipo_produto:'Camisa',name: 'Camisa', name_2: 'Off-White', price: 'R$ 699.99', image: Moletom_2, to: '/products/CamisaOffWhite' },
    { id: 'produto_6', tipo_produto:'Moletom',name: 'Moletom', name_2: 'Nike', price: 'R$ 759.99', image: Moletom_3, to: '/products/MoletomNike' },
    { id: 'produto_7', tipo_produto:'Moletom',name: 'Moletom', name_2: 'Jordan x JB', price: 'R$ 999.99', image: Moletom_4, to: '/products/TênisNikeAirForce' },
    { id: 'produto_8', tipo_produto:'Tênis',name: 'Tênis', name_2: 'Jordan Mid', price: 'R$ 1.099.99', image: Tenis_4, to: '/products/TênisNikeAirForce' },
    { id: 'produto_9', tipo_produto:'Tênis',name: 'Tênis', name_2: 'Jordan Mid', price: 'R$ 1.299.99', image: Tenis_3, to: '/products/TênisNikeAirForce' },
    { id: 'produto_10',tipo_produto:'Tênis', name: 'Tênis', name_2: 'Jordan 7', price: 'R$ 1.199.99', image: Tenis_5, to: '/products/TênisNikeAirForce' },
    { id: 'produto_11',tipo_produto:'Tênis', name: 'Tênis', name_2: 'VANS', price: 'R$ 699.99', image: Tenis_6, to: '/products/TênisNikeAirForce' },
    { id: 'produto_12', tipo_produto:'Acessorio',name: 'Bonê', name_2: 'VANS Felpudo', price: 'R$ 999.99', image: Bone, to: '/products/TênisNikeAirForce' }
  ];

  const [selectedProducts, setSelectedProducts] = useState([]);

  useEffect(() => {
    const selected = [];
    const remaining = [...initialProducts];

    while (selected.length < 4 && remaining.length > 0) {
      const randomIndex = Math.floor(Math.random() * remaining.length);
      const selectedProduct = remaining.splice(randomIndex, 1)[0];
      selected.push(selectedProduct);
    }

    setSelectedProducts(selected);
  }, []);

  return (
    <div className="complete_outfit_container">
      <AnimatePresence>
        {selectedProducts.map((product) => (
          <motion.div
            key={product.id}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            className="produto_em_promocao"
            transition={{ duration: 0.5 }}
            id={product.id}
          >
            <div id='produtos_text'>
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

export default Complete_outfit;