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
import { useContext } from 'react';
import { CarrinhoContext } from '../context/CarrinhoContext';

const Complete_outfit = () => {
  const {products} = useContext(CarrinhoContext)

  const [selectedProducts, setSelectedProducts] = useState([])

  useEffect(() => {
    const selected = []
    const remaining = [...products]

    while (selected.length < 4 && remaining.length > 0) {
      const randomIndex = Math.floor(Math.random() * remaining.length)
      const selectedProduct = remaining.splice(randomIndex, 1)[0]
      selected.push(selectedProduct)
    }

    setSelectedProducts(selected)
  }, [])

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

export default Complete_outfit