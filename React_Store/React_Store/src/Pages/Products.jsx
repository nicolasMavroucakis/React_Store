import React, { useState } from 'react';
import { Link } from "react-router-dom"
import { motion, AnimatePresence } from 'framer-motion';
import './Products.css';
import Tenis_1 from '../assets/PG_Dunk_low_1.png';
import Moletom_1 from '../assets/Rick_Morty_1.png';
import Gorro from '../assets/gorro_Jor_1.png';
import Tenis_2 from '../assets/Jodan_1.png';
import Moletom_2 from '../assets/moletom_2.png'
import Moletom_3 from '../assets/moletom_3.png'
import Moletom_4 from '../assets/moletom_1.png'
import Tenis_3 from '../assets/tenis_3.png'
import Tenis_4 from '../assets/tenis_4.png'
import Tenis_5 from '../assets/tenis_5.png'
import Tenis_6 from '../assets/tenis_6.png'
import Bone from '../assets/bone.png'
import Search_box from '../components/Search_box';


const products = [
    { id: 'produto_1', tipo_produto:'Tênis',name: 'Tênis', name_2: 'Dunk Low Pro', price: 'R$ 999,99', image: Tenis_1, to: '/products/TenisSBDunkLowPro' },
    { id: 'produto_2', tipo_produto:'Moletom',name: 'Moletom', name_2: 'Puma x RM ', price: 'R$ 649,99', image: Moletom_1, to: '/products/MoletomPumaRM' },
    { id: 'produto_3', tipo_produto:'Acessorio',name: 'Gorro', name_2: 'Jordan', price: 'R$ 349,99', image: Gorro, to: '/products/GorroJordan' },
    { id: 'produto_4', tipo_produto:'Tênis',name: 'Tênis', name_2: 'Air Jordan 1', price: 'R$ 999.99', image: Tenis_2, to: '/products/JordanMid1' },
    { id: 'produto_5', tipo_produto:'Moletom',name: 'Camisa', name_2: 'Off-White', price: 'R$ 699.99', image: Moletom_2, to: '/products/moletomOffWhithe' },
    { id: 'produto_6', tipo_produto:'Moletom',name: 'Moletom', name_2: 'Nike Anorak', price: 'R$ 759.99', image: Moletom_3, to: '/products/MoletomAnorak' },
    { id: 'produto_7', tipo_produto:'Moletom',name: 'Moletom', name_2: 'Jordan x JB', price: 'R$ 999.99', image: Moletom_4, to: '/products/moletomJordanJB' },
    { id: 'produto_8', tipo_produto:'Tênis',name: 'Tênis', name_2: 'Jordan Mid', price: 'R$ 1.099.99', image: Tenis_4, to: '/products/JordanMid1_2'  },
    { id: 'produto_9', tipo_produto:'Tênis',name: 'Tênis', name_2: 'Jordan Mid', price: 'R$ 1.299.99', image: Tenis_3, to: '/products/JordanMid1_3'},
    { id: 'produto_10',tipo_produto:'Tênis', name: 'Tênis', name_2: 'Jordan 7', price: 'R$ 1.899.99', image: Tenis_5, to: '/products/TenisJordan7' },
    { id: 'produto_11',tipo_produto:'Tênis', name: 'Tênis', name_2: 'VANS', price: 'R$ 899.99', image: Tenis_6, to: '/products/TenisVANS' },
    { id: 'produto_12', tipo_produto:'Acessorio',name: 'Bonê', name_2: 'VANS Felpudo', price: 'R$ 999.99', image: Bone, to: '/products/BoneVANS' }
]

const Products = () => {
    const [categoriaSelecionada, setCategoriaSelecionada] = useState('Todos')

    const filtrarProdutosPorCategoria = () => {
        if (categoriaSelecionada === 'Todos') {
            return products
        } else {
            return products.filter(product => product.tipo_produto === categoriaSelecionada)
        }
    };

    return (
        <div className='products_prin_container'>
            <div className='search_box_div'>
                <Search_box/>
            </div>
            <div className="products_container">
                <div className="products_select_cat">
                    <div className={`categorias ${categoriaSelecionada === 'Todos' ? 'ativo' : ''}`}>
                        <button onClick={() => setCategoriaSelecionada('Todos')}>Todos</button>
                    </div>
                    <div className={`categorias ${categoriaSelecionada === 'Tênis' ? 'ativo' : ''}`}>
                        <button onClick={() => setCategoriaSelecionada('Tênis')}>Tênis</button>
                    </div>
                    <div className={`categorias ${categoriaSelecionada === 'Acessorio' ? 'ativo' : ''}`}>
                        <button onClick={() => setCategoriaSelecionada('Acessorio')}>Acessórios</button>
                    </div>
                    <div className={`categorias ${categoriaSelecionada === 'Moletom' ? 'ativo' : ''}`}>
                        <button onClick={() => setCategoriaSelecionada('Moletom')}>Moletons</button>
                    </div>
                </div>
                <div className="products_products">
                    
                    <AnimatePresence>
                    {filtrarProdutosPorCategoria().map((product) => (
                        <motion.div
                        key={product.id}
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -50 }}
                        className="product_motion_Div"
                        transition={{ duration: .5 }}
                        >
                        <div className='product_text'>
                            <h2>{product.name}</h2>
                            <h2>{product.name_2}</h2>
                            <h2>{product.price}</h2>
                        </div>
                        <div className='product_img'>
                            <img src={product.image}/>
                        </div>
                        <div className='product_but'>
                            <Link to={`${product.to}`}>Detalhes</Link>
                        </div>
                        </motion.div>
                    ))}
                    </AnimatePresence>
                </div>
            </div>
        </div>
    )
}
export default Products