import React, { useContext, useState } from 'react';
import { Link } from "react-router-dom"
import { motion, AnimatePresence } from 'framer-motion';
import './Products.css';
import Search_box from '../components/Search_box';
import { CarrinhoContext } from '../context/CarrinhoContext';

const Products = () => {
    const { products, searchBox } = useContext(CarrinhoContext);
    const [categoriaSelecionada, setCategoriaSelecionada] = useState('Todos');

    const filtrarProdutosPorCategoria = () => {
        if (categoriaSelecionada === 'Todos') {
            return products;
        } else {
            return products.filter(product => product.tipo_produto === categoriaSelecionada);
        }
    }

    return (
        <div className='products_prin_container'>
            <div className='search_box_div'>
                <Search_box />
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
                        {searchBox.length > 0 ? (
                            searchBox.map((product) => (
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
                                        <img src={product.image} alt={`${product.name} ${product.name_2}`} />
                                    </div>
                                    <div className='product_but'>
                                        <Link to={`${product.to}`}>Detalhes</Link>
                                    </div>
                                </motion.div>
                            ))
                        ) : (
                            filtrarProdutosPorCategoria().map((product) => (
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
                                        <img src={product.image} alt={`${product.name} ${product.name_2}`} />
                                    </div>
                                    <div className='product_but'>
                                        <Link to={`${product.to}`}>Detalhes</Link>
                                    </div>
                                </motion.div>
                            ))
                        )}
                    </AnimatePresence>
                </div>
            </div>
        </div>
    )
}

export default Products;
