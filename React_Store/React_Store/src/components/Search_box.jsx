import './Search_box.css';
import { CarrinhoContext } from '../context/CarrinhoContext';
import { useContext, useState } from 'react';
import { useRef } from 'react';

const Search_box = () => {
    const { searchBox, setSearchBox, all_produtos } = useContext(CarrinhoContext)
    const [inputValue, setInputValue] = useState('')
    const input = useRef(null)

    const searchProductsGenerator = () => {
        const input_value = input.current.value.toLowerCase()

        const filteredProducts = all_produtos.filter((product) => {
            const productName = product.full_name.toLowerCase()

            return productName.includes(input_value)
        });

        setSearchBox(filteredProducts)
    };

    return (
        <form action="" className='input_search_box'>
            <input
                type="text"
                placeholder="Search"
                id='input_text'
                onChange={(e) => setInputValue(e.target.value)}
                ref={input}
            />
            <input type="button" id='imput_submit' onClick={searchProductsGenerator} />
        </form>
    );
};

export default Search_box;
