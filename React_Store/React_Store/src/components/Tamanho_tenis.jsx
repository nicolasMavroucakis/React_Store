import { useLocation } from "react-router-dom";
import { useContext, useRef, useState } from "react";
import { CarrinhoContext } from "../context/CarrinhoContext";

const Tamanho_tenis = () => {
  const location = useLocation()
  const { all_produtos, setAllProdutos } = useContext(CarrinhoContext)

  const [selectedSize, setSelectedSize] = useState(null)

  const seleciona_tamanho = (tamanhoValue) => {
    const produtoEncontrado = all_produtos.find(
      (produto) => produto.to === location.pathname && !produto.carrinho
    )

    if (produtoEncontrado) {
      produtoEncontrado.tamanho = tamanhoValue
    }

    setAllProdutos([...all_produtos])
    setSelectedSize(tamanhoValue)
  }

  return (
    <div className="container_tamnhos">
      <div className="tamanhos_title">
        <p>
          ESCOLHA O SEU <span>TAMANHO</span>
        </p>
      </div>
      <div className="tamanhos_selecionar">
        {[40, 41, 42, 43, 44, 45, 46].map((size) => (
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

export default Tamanho_tenis;

