import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useContext } from 'react';
import { CarrinhoContext } from '../context/CarrinhoContext';

import './Tamanhos.css'

const Tamanhos = () => {
  const location = useLocation();
  const { all_produtos, setAllProdutos } = useContext(CarrinhoContext)

  const [selectedSize, setSelectedSize] = useState(null)

  const seleciona_tamanho = (size) => {
    const produtoEncontrado = all_produtos.find((produto) => produto.to === location.pathname && !produto.carrinho)

    if (produtoEncontrado) {
      produtoEncontrado.tamanho = size
    }
    setSelectedSize(size)
    setAllProdutos([...all_produtos])
  };

  return (
    <div className="container_tamnhos">
      <div className="tamanhos_title">
        <p>
          ESCOLHA O SEU <span>TAMANHO</span>
        </p>
      </div>
      <div className="tamanhos_selecionar">
        {['PP', 'P', 'M', 'G', 'GG', 'GGG', 'GGGG'].map((size) => (
          <div
            key={size}
            className={`tamanho ${selectedSize === size ? 'selecionado' : ''}`}
            onClick={() => seleciona_tamanho(size)}
          >
            <p>{size}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Tamanhos;
