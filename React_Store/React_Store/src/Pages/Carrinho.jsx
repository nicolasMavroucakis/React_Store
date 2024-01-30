import './Carrinho.css'
import { motion, AnimatePresence } from 'framer-motion';
import { useEffect } from 'react';
import { useState } from 'react';
import { CarrinhoContext } from '../context/CarrinhoContext';
import { useContext } from 'react';
import Remove_but from '../components/remove_but';

// fotos
import Tenis_1 from '../assets/PG_Dunk_low_1.png';
import Moletom_1 from '../assets/Rick_Morty_1.png';
import Gorro from '../assets/gorro_Jor_1.png';
import Tenis_2 from '../assets/Jodan_1.png';
import Moletom_2 from '../assets/moletom_2.png'
import Moletom_3 from '../assets/moletom_3.png'
import Moletom_4 from '../assets/moletom_1.png'
import Tenis_3 from '../assets/tenis_3.png'
import Tenis_4 from '../assets/tenis_4.png'
import Tenis_5 from '../assets/tenis_5.png'
import Tenis_6 from '../assets/tenis_6.png'
import Bone from '../assets/bone.png'
import Remove from '../assets/remove-cart.png'

const Carrinho = () => {
    const {all_products, produtos_carrinho} = useContext(CarrinhoContext)
    let [valor_total, setValorTotal] = useState(0)
    
    useEffect(() => {
        let total = 0
    
        produtos_carrinho.forEach((product) => {
            const valor_string = product.price
            const valor = parseFloat(valor_string)
            total = total + valor
        });
    
        setValorTotal(total) 
    }, [produtos_carrinho])

    useEffect(() => {
        console.log('Produtos no carrinho foram modificados:', produtos_carrinho);
    }, [produtos_carrinho]);

    const remove_product = () => { 

    }

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
                            <div className='produto_do_carrinho_textprice'>
                                <h2>{product.name + ' ' + product.name_2}</h2>
                                <h2>{'R$' + ' ' + product.price}</h2>
                                <label>Quantidade</label>
                                <select id="estado" name="estado">
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                    <option value="6">6</option>
                                    <option value="7">7</option>
                                    <option value="8">8</option>
                                    <option value="9">9</option>
                                    <option value="10">10</option>
                                </select>
                            </div>
                            <div className='produto_do_carrinho_remove'>
                                <button  id={product.id}>
                                    <img src={Remove} alt="Remove" />
                                </button>
                            </div>
                        </motion.div>
                    ))
                ) : (
                    <div className='nao_temos_produtos'>
                        <h1>Não temos produtos no carrinho.</h1>
                    </div>
                )}
            </AnimatePresence>
            <div className='total_value'>
                <h1>Valor Total =</h1>
                <h1>{'R$ ' + valor_total}</h1>
            </div>
        </div>
    )
}
export default Carrinho