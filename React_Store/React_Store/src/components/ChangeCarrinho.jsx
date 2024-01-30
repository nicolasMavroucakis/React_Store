import React, { useContext, useState } from 'react';
import { CarrinhoContext } from '../context/CarrinhoContext';
import { useLocation } from 'react-router-dom';

const ChangeCarrinho = () => {
    const {all_produtos, produtos_carrinho} = useContext(CarrinhoContext)

    useEffect(() => {
        const produtosNoCarrinho = all_produtos.filter((produto) => produto.carrinho === true);
        produtos_carrinho([...produtosNoCarrinho]); 
    }, [all_produtos, produtos_carrinho])
    
}

export default ChangeCarrinho;
