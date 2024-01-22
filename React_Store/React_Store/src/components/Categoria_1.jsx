import { Link } from "react-router-dom"
import { motion, AnimatePresence } from 'framer-motion'
import Tenis_cat from '../assets/tenis_cat.png'
import Calca_cat from '../assets/calca_cat.png'
import Moletom_cat from '../assets/moletom_1.png'
import './Categorias.css';
import { useGlobalState } from "./GlobalStateContext"

const products = [
    {id:'cat_1_item_1', img:Tenis_cat, title:"Tênis", to:'/tenis'},
    {id:'cat_1_item_2', img:Calca_cat, title:"Calças", to:'/calca'},
    {id:'cat_1_item_3', img:Moletom_cat, title:"Moletom", to:'/moletom'}
]

const Categoria_1 = () => {
    const { setCategoriaSelecionada } = useGlobalState();

    const handleCategoriaClick = (categoriaSelecionada) => {
        setCategoriaSelecionada(categoriaSelecionada); 
    };

    return (
        <div className="categoria_div">
            <AnimatePresence>
                {products.map((product) => (
                    <motion.div
                    key={product.id}
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -50 }}
                    className="promocao_tile_motion_div"
                    transition={{ duration: .5,delay: 1 }}
                    >
                        <div className="cat_title">
                            <h1>{product.title}</h1>
                        </div>
                        <div className="cat_img">
                            <img src={product.img}/>
                        </div>
                        <div className="cat_detalhes_but">
                            <Link to='/products'  onClick={() => handleCategoriaClick(product.title)}>Detalhes</Link>
                        </div>
                    </motion.div>
                ))}
            </AnimatePresence>
        </div>
    )
}
export default Categoria_1