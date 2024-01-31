import React, { useContext, useEffect } from 'react';
import ChangeCarrinho from './ChangeCarrinho';
import { CarrinhoContext } from '../context/CarrinhoContext';
import { useLocation } from 'react-router-dom';
import './Compr_but.css'

const Compr_but = () => {
    const location = useLocation() 
    const {pathname} = location
    const {all_produtos, produtos_carrinho} = useContext(CarrinhoContext)
    

    const add_card = () => {
        const produtoEncontrado = all_produtos.find((produto) => produto.to === location.pathname && !produto.carrinho);

        if (produtoEncontrado) {
            produtoEncontrado.carrinho = true;
            produtos_carrinho.push(produtoEncontrado)
            console.log(produtos_carrinho)
            console.log('Produto adicionado ao carrinho:', produtoEncontrado);
        }
    };
    useEffect(() => {
        if (produtos_carrinho.length === 0) {
            const produtoParaCarrinho = all_produtos.find((produto) => produto.carrinho === true);
            if (produtoParaCarrinho) {
                produtos_carrinho.push(produtoParaCarrinho);
            }
        }
    }, [all_produtos, produtos_carrinho]);
    
    return (
        <div className="ad_car_but">
            <button id='compr_but' onClick={add_card}>Adicionar ao Carrinho</button>
        </div>
    )
}

export default Compr_but;
