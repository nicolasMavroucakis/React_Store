import { NavLink } from "react-router-dom"
import './NavBar.css'
import Logo from "../assets/logo.png"
import Carrinho from '../assets/carrinho.png'
import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { motion, AnimatePresence } from 'framer-motion';
import User_foto from '../assets/user.png'
import User from "../Pages/User";



const NavBar = () => {
    const navRef = useRef()

	const showNavbar = () => {
		navRef.current.classList.toggle("responsive_nav")
	}

    return (
        <nav className="principal_nav">
            <Helmet>
                <link
                rel="stylesheet"
                href="https://api.fontshare.com/v2/css?f[]=comico@400&display=swap"
                />
            </Helmet>
            <header>
			<div>
				<img src={Logo}/>
			</div>
            <div className="carrinho_hamburguer">
                <div className="user_div">
                    <Link to='/user'><img src={User_foto}/></Link>
                </div>
                <div className="big_nav_element nav_img" id="big_nav_element_img">
                    <div className="carrinho_img">
                        <Link to='/carrinho'><img src={Carrinho} id="carrinho_img"/></Link>
                    </div>
                </div>
                <nav ref={navRef} className="opcoes_Navbar">
                    <Link to='/' onClick={showNavbar} id="home_link">Home</Link>
                    <Link to='/products' onClick={showNavbar} id="products_link">Produtos</Link>
                    <button
                        className="nav-btn nav-close-btn"
                        onClick={showNavbar}>
                        <FaTimes />
                    </button>
                </nav>
                <button
                    className="nav-btn"
                    onClick={showNavbar}>
                    <FaBars />
                </button>
            </div>
		</header>
        </nav>
    )
}

export default NavBar