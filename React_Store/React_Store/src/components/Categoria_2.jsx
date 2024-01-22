import { Link } from "react-router-dom"
import { motion, AnimatePresence } from 'framer-motion';
import Acessorios_cat from '../assets/acessorios_cat.png'
import Todos_cat from '../assets/TodosCategorias.png'
import Camisa_cat from '../assets/Camisa_cat.png'

const products = [
    {id:'cat_2_item_1', img:Acessorios_cat, title:"Acessorios", to:'/acessorio'},
    {id:'cat_2_item_2', img:Todos_cat, title:"Todos", to:''},
    {id:'cat_2_item_3', img:Camisa_cat, title:"Camisas", to:'/camisa'}
]

const Categoria_2 = () => {
    return (
        <div className="categoria_div">
            <AnimatePresence>
                {products.map((product) => (
                    <motion.div
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
                            {/* <Link to={'/products' + to.value}>Detalhes</Link> */}
                        </div>
                    </motion.div>
                ))}
            </AnimatePresence>
        </div>
    )
}
export default Categoria_2