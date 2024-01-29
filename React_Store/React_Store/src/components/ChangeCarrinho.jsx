import React, { useContext, useState } from 'react';
import { CarrinhoContext } from '../context/CarrinhoContext';
import { useLocation } from 'react-router-dom';

const ChangeCarrinho = () => {
    
    

    const troca_array = () => {
        const { all_produtos, produtos_carrinho } = useContext(CarrinhoContext)
        const [locationState, setLocationState] = useState()
        const { pathname } = locationState
        
        if (pathname === '/products/moletomJordanJB') {
            const produtoSelecionado = all_produtos.find(
                (produto) => produto.to === '/products/moletomJordanJB'
            )

            if (produtoSelecionado) {
                produtos_carrinho.push(produtoSelecionado);
                console.log('Produto adicionado ao carrinho:', produtoSelecionado)
            } else {
                console.log('Produto não foi adicionado ao carrinho')
            }
        }
    }

    return { troca_array, setLocationState };
}

export default ChangeCarrinho;
