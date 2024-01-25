import ImageSlider from "./ImageSlider";
import { useLocation } from "react-router-dom"

import Foto_1 from '../assets/JB_1.png'
import Foto_2 from '../assets/JB_2.png'
import Foto_3 from '../assets/JB_3.webp'

import Foto_4 from '../assets/moletom_2.png'
import Foto_5 from '../assets/moletom_off_white_back.png'

import Foto_6 from '../assets/moletom_3.png'
import Foto_7 from '../assets/Moletom_Anorak_Back.png'

import Foto_8 from '../assets/tenis_5.png'
import Foto_9 from '../assets/Jordan7_2.png'
import Foto_10 from '../assets/Jordan7_3.png'
import Foto_11 from '../assets/Jordan7_4.png'
import Foto_12 from '../assets/Jordan7_5.png'
import Foto_13 from '../assets/Jordan7_6.png'

const Slider = () => {
    let slides = []

    const location = useLocation();
    const { pathname } = location;

    if (pathname == '/products/moletomJordanJB') {
        slides = [
                { url: Foto_1, title: "Imagem 1"},
                { url: Foto_2, title: "Imagem 2"},
                { url: Foto_3, title: "Imagem 3"}
        ]
    }
    else if (pathname == '/products/moletomOffWhithe') {
        slides = [
            {url:Foto_4, title: "Imagem 1"},
            {url:Foto_5, title: "Imagem 2"}
        ]
    }
    else if (pathname == '/products/MoletomAnorak') {
        slides = [
            {url:Foto_6, title: "Imagem 1"},
            {url:Foto_7, title: "Imagem 2"}
        ]
    }
    else if (pathname == '/products/TenisJordan7') {
        slides = [
            {url:Foto_8, title: "Imagem 1"},
            {url:Foto_9, title: "Imagem 2"},
            {url:Foto_10, title: "Imagem 3"},
            {url:Foto_11, title: "Imagem 4"},
            {url:Foto_12, title: "Imagem 5"},
            {url:Foto_13, title: "Imagem 6"},

        ]
    }

    const containerStyles = {
    width: "500px",
    height: "480px",
    margin: "0 auto",
    };

    return (
        <div>
            <div style={containerStyles}>
                <ImageSlider slides={slides.filter(slide => slide.url)} />
            </div>
        </div>
    )
}
export default Slider