import './Search_box.css';
import { CarrinhoContext } from '../context/CarrinhoContext';
import { useContext, useState } from 'react';

const Search_box = () => {
    const { searchBox, setSearchBox, products } = useContext(CarrinhoContext)
    const [inputValue, setInputValue] = useState('')

    function limparBotao() {
        setInputValue('')
    }

    function searchProductsGenerator() {
        const filteredProducts = products.filter((product) => {
            const productName = product.name + product.name_2
            return productName.toLowerCase().includes(inputValue.toLowerCase())
        })

        setSearchBox(filteredProducts)
    }

    return (
        <form action="" className='input_search_box'>
            <input
                type="text"
                placeholder="Search"
                id='input_text'
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
            />
            <input type="button" id='imput_submit' onClick={searchProductsGenerator} />
        </form>
    )
}

export default Search_box;