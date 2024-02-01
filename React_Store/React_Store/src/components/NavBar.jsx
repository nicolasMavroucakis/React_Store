import { NavLink } from "react-router-dom"
import './NavBar.css'
import Logo from "../assets/logo.png"
import Carrinho from '../assets/carrinho.png'
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { motion, AnimatePresence } from 'framer-motion';



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
            <div className="small_screen_nav">
                
            </div>
            <div className="big_screen_nav">
                <div className="big_nav_element">
                    <NavLink to='/'>Home</NavLink>
                </div>
                <div className="big_nav_element">
                    <NavLink to='/products'>Produtos</NavLink>
                </div>
                <div className="big_nav_element nav_img" id="big_nav_element_img">
                    <div>
                        <Link to='/carrinho'><img src={Carrinho} id="carrinho_img"/></Link>
                    </div>
                </div>
            </div>
        </nav>
    )
}
export default NavBar