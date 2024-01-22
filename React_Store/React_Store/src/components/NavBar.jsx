import { NavLink } from "react-router-dom"
import './NavBar.css'
import Logo from "../assets/logo.png"
import Carrinho from '../assets/carrinho.png'
import { Helmet } from "react-helmet";

const NavBar = () => {

    return (
        <nav className="principal_nav">
            <Helmet>
                <link
                rel="stylesheet"
                href="https://api.fontshare.com/v2/css?f[]=comico@400&display=swap"
                />
            </Helmet>
            <div>
                <img src={Logo} className="logo"/>
            </div>
            <div className="big_screen_nav">
                <div className="big_nav_element">
                    <NavLink to='/'>Home</NavLink>
                </div>
                <div className="big_nav_element">
                    <NavLink to='/products'>Products</NavLink>
                </div>
                <div className="big_nav_element nav_img" id="big_nav_element_img">
                    <img src={Carrinho} id="carrinho_img"/>
                </div>
            </div>
        </nav>
    )
}
export default NavBar