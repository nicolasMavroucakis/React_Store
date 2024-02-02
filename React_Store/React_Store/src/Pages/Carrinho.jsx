import React, { useContext, useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CarrinhoContext } from '../context/CarrinhoContext';
import Remove from '../assets/remove-cart.png';
import './Carrinho.css'

const Carrinho = () => {
    const { produtos_carrinho, setProdutosCarrinho } = useContext(CarrinhoContext)
    const [valoresSelecionados, setValoresSelecionados] = useState({})
    const [total, setTotal] = useState(0)

    useEffect(() => {
        let total = 0;

        produtos_carrinho.forEach((product) => {
            const quantidade = valoresSelecionados[product.id] || 1;
            const valor = parseFloat(product.price.replace('R$', '').replace(',', '.'))

            total += valor * quantidade;
        })

        setTotal(total.toFixed(2));
    }, [produtos_carrinho, valoresSelecionados]);

    const handleSelecao = (event, productId) => {
        const quantidadeSelecionada = event.target.value;
        setValoresSelecionados({
            ...valoresSelecionados,
            [productId]: parseInt(quantidadeSelecionada, 10) || 1,
        })
    }

    const removerProduto = (productId) => {
        const novoCarrinho = produtos_carrinho.filter((produto) => produto.id !== productId)
        setProdutosCarrinho(novoCarrinho)
    };

    return (
        <div className="card_screen_div">
            <AnimatePresence>
                {produtos_carrinho.length > 0 ? (
                    produtos_carrinho.map((product) => (
                        <motion.div
                            key={product.id}
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="produtos_do_carrinho"
                            transition={{ duration: 0.7 }}
                            id={product.id}
                        >
                            <div className='produto_do_carrinho_img'>
                                <img src={product.image} alt={product.name + ' ' + product.name_2} />
                            </div>
                            <div className='text_but'>
                                <div className='produto_do_carrinho_textprice'>
                                    <h2>{product.name + ' ' + product.name_2}</h2>
                                    <h2>{'R$' + ' ' + product.price}</h2>
                                    <h2>Tamanho: {product.tamanho}</h2>
                                    <label>Quantidade</label>
                                    <select
                                        id="estado"
                                        name="estado"
                                        value={valoresSelecionados[product.id] || 1}
                                        onChange={(e) => handleSelecao(e, product.id)}
                                    >
                                        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((quantidade) => (
                                            <option key={quantidade} value={quantidade}>
                                                {quantidade}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                                <div className='produto_do_carrinho_remove'>
                                    <button onClick={() => removerProduto(product.id)} id={product.id}>
                                        <img src={Remove} alt="Remove" />
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    ))
                ) : (
                    <div className='nao_temos_produtos'>
                        <h1>Não há produtos no carrinho.</h1>
                    </div>
                )}
            </AnimatePresence>
            <AnimatePresence>
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="total_value"
                    transition={{ duration: 0.7, delay: .5 }}
                >
                    <h1>Valor Total </h1>
                    <h1>{'R$ ' + total}</h1>
                </motion.div>
            </AnimatePresence>
        </div>
    )
}

export default Carrinho;
