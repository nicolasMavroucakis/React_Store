import React, { useContext } from 'react';
import ChangeCarrinho from './ChangeCarrinho';
import { CarrinhoContext } from '../context/CarrinhoContext';
import { useLocation } from 'react-router-dom';

const Compr_but = () => {
    const { troca_array} = useContext(ChangeCarrinho);

    const troca_arry = () => {
        troca_array()
    };

    return (
        <div className="ad_car_but">
            <button onClick={troca_array}>Adicionar ao Carrinho</button>
        </div>
    )
}

export default Compr_but;
