import'./Home.css'
import Search_box from '../components/Search_box'
import Destaque from '../components/Destaque'
import Facilidades from '../components/Facilidades'
import Promocao_home from '../components/Promocao_home'
import Promocao_text_home from '../components/Promocao_text_home'
import Banner from '../components/banner'



const Home = () => {
    return( 
        <div id="home_container">
            <Banner/>
            <div className="destaque_search">
                <div className="destaque_texto">
                    <h1>Destaques da semana</h1>
                </div>
            </div>
            <Destaque/>
            <Facilidades/>
            <Promocao_text_home/>
            <Promocao_home/>
        </div>
    )
}
export default Home