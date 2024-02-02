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
import'./Complete_outfit.css'

const Complete_outfit = () => {
  const initialProducts = [
    { id: 'produto_1', tipo_produto:'Tênis',name: 'Tênis', name_2: 'Dunk Low Pro', price: '999,99', image: Tenis_1, to: '/products/TenisSBDunkLowPro', carrinho:false },
        { id: 'produto_2', tipo_produto:'Moletom',name: 'Moletom', name_2: 'Puma x RM ', price: '649,99', image: Moletom_1, to: '/products/MoletomPumaRM', carrinho:false },
        { id: 'produto_3', tipo_produto:'Acessorio',name: 'Gorro', name_2: 'Jordan', price: '349,99', image: Gorro, to: '/products/GorroJordan', carrinho:false },
        { id: 'produto_4', tipo_produto:'Tênis',name: 'Tênis', name_2: 'Air Jordan 1', price: '999.99', image: Tenis_2, to: '/products/JordanMid1', carrinho:false },
        { id: 'produto_5', tipo_produto:'Moletom',name: 'Camisa', name_2: 'Off-White', price: '699.99', image: Moletom_2, to: '/products/moletomOffWhithe', carrinho:false },
        { id: 'produto_6', tipo_produto:'Moletom',name: 'Moletom', name_2: 'Nike Anorak', price: '759.99', image: Moletom_3, to: '/products/MoletomAnorak', carrinho:false },
        { id: 'produto_7', tipo_produto:'Moletom',name: 'Moletom', name_2: 'Jordan x JB', price: '999.99', image: Moletom_4, to: '/products/moletomJordanJB', carrinho:false },
        { id: 'produto_8', tipo_produto:'Tênis',name: 'Tênis', name_2: 'Jordan Mid', price: '1.099.99', image: Tenis_4, to: '/products/JordanMid1_2', carrinho:false  },
        { id: 'produto_9', tipo_produto:'Tênis',name: 'Tênis', name_2: 'Jordan Mid', price: '1.299.99', image: Tenis_3, to: '/products/JordanMid1_3', carrinho:false},
        { id: 'produto_10',tipo_produto:'Tênis', name: 'Tênis', name_2: 'Jordan 7', price: '1.899.99', image: Tenis_5, to: '/products/TenisJordan7',carrinho:false },
        { id: 'produto_11',tipo_produto:'Tênis', name: 'Tênis', name_2: 'VANS', price: '899.99', image: Tenis_6, to: '/products/TenisVANS', carrinho:false},
        { id: 'produto_12', tipo_produto:'Acessorio',name: 'Bonê', name_2: 'VANS Felpudo', price: '999.99', image: Bone, to: '/products/BoneVANS', carrinho:false }
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