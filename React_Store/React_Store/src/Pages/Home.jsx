import'./Home.css'
import Search_box from '../components/Search_box'
import Destaque from '../components/Destaque'
import Facilidades from '../components/Facilidades'
import Promocao_home from '../components/Promocao_home'
import Promocao_text_home from '../components/Promocao_text_home'
import Categoria_title from '../components/Categoria_title'
import Categoria_1 from '../components/Categoria_1'
import Categoria_2 from '../components/Categoria_2'
import { GlobalStateProvider } from '../components/GlobalStateContext'

const Home = () => {
    return(  
        <div id="home_container">
            <div className="destaque_search">
                <div className="destaque_texto">
                    <h1>Destaques da semana</h1>
                </div>
                <div>
                    <Search_box/>
                </div>
            </div>
            <Destaque/>
            <Facilidades/>
            <Promocao_text_home/>
            <Promocao_home/>
            <Categoria_title/>
            <Categoria_1/>
            <Categoria_2/>
        </div>
    )
}
export default Home