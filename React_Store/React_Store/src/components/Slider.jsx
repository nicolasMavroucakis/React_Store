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

import Foto_14 from '../assets/PG_Dunk_low_1.png'
import Foto_15 from '../assets/PG_SB_Dunk_2.png'
import Foto_16 from '../assets/PG_SB_Dunk_5.png'
import Foto_17 from '../assets/PG_SB_Dunk_6.png'
import Foto_18 from '../assets/PG_SB_Dunk_7.png'

import Foto_19 from '../assets/Rick_Morty_1.png'
import Foto_20 from '../assets/Rick_Morty_2.png'

import Foto_21 from '../assets/gorro_Jor_1.png'
import Foto_22 from '../assets/gorro_Jor_2.png'

import Foto_23 from '../assets/Jodan_1.png'
import Foto_24 from '../assets/Jordan_1_2.png'
import Foto_25 from '../assets/Jordan_1_3.png'
import Foto_26 from '../assets/Jordan_1_4.png'
import Foto_27 from '../assets/Jordan_1_5.png'
import Foto_28 from '../assets/Jordan_1_6.png'

import Foto_29 from '../assets/Jordan_1_3_1.png'
import Foto_30 from '../assets/Jordan_1_3_2.png'
import Foto_31 from '../assets/Jordan_1_3_3.png'
import Foto_32 from '../assets/Jordan_1_3_4.png'
import Foto_33 from '../assets/Jordan_1_3_5.png'
import Foto_34 from '../assets/Jordan_1_3_6.png'

import Foto_35 from '../assets/Jordan_mid_1_2_1.png'
import Foto_36 from '../assets/Jordan_mid_1_2_2.png'
import Foto_37 from '../assets/Jordan_mid_1_2_3.png'
import Foto_38 from '../assets/Jordan_mid_1_2_4.png'
import Foto_39 from '../assets/Jordan_mid_1_2_5.png'
import Foto_40 from '../assets/Jordan_mid_1_2_6.png'

import Foto_41 from '../assets/Tenis_VANS_1.png'
import Foto_42 from '../assets/Tenis_VANS_2.png'
import Foto_43 from '../assets/Tenis_VANS_3.png'
import Foto_44 from '../assets/Tenis_VANS_4.png'
import Foto_45 from '../assets/Tenis_VANS_5.png'
import Foto_46 from '../assets/Tenis_VANS_6.png'

import Foto_47 from '../assets/bone.png'

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
            {url:Foto_13, title: "Imagem 6"}

        ]
    }
    else if (pathname == '/products/TenisSBDunkLowPro') {
        slides = [
            {url:Foto_14, title: "Imagem 1"},
            {url:Foto_15, title: "Imagem 2"},
            {url:Foto_16, title: "Imagem 3"},
            {url:Foto_17, title: "Imagem 4"},
            {url:Foto_18, title: "Imagem 5"}
        ]
    }
    else if(pathname == '/products/MoletomPumaRM') {
        slides = [
            {url:Foto_19, title: "Imagem 1"},
            {url:Foto_20, title: "Imagem 2"}
        ]
    }
    else if( pathname == '/products/GorroJordan') {
        slides = [
            {url:Foto_21, title: "Imagem 1"},
            {url:Foto_22, title: "Imagem 2"}
        ]
    }
    else if( pathname == '/products/JordanMid1') {
        slides = [
            {url:Foto_23, title: "Imagem 1"},
            {url:Foto_24, title: "Imagem 2"},
            {url:Foto_25, title: "Imagem 3"},
            {url:Foto_26, title: "Imagem 4"},
            {url:Foto_27, title: "Imagem 5"},
            {url:Foto_28, title: "Imagem 6"}
        ]
    }
    else if( pathname == '/products/JordanMid1_2') {
        slides = [
            {url:Foto_35, title: "Imagem 1"},
            {url:Foto_36, title: "Imagem 2"},
            {url:Foto_37, title: "Imagem 3"},
            {url:Foto_38, title: "Imagem 4"},
            {url:Foto_39, title: "Imagem 5"},
            {url:Foto_40, title: "Imagem 6"} 
        ]
    }
    else if( pathname == '/products/JordanMid1_3') {
        slides = [ 
            {url:Foto_29, title: "Imagem 1"},
            {url:Foto_30, title: "Imagem 2"},
            {url:Foto_31, title: "Imagem 3"},
            {url:Foto_32, title: "Imagem 4"},
            {url:Foto_33, title: "Imagem 5"},
            {url:Foto_34, title: "Imagem 6"}
        ]
    }
    else if ( pathname == '/products/TenisVANS' ) {
        slides = [
            {url:Foto_41, title: "Imagem 1"},
            {url:Foto_42, title: "Imagem 2"},
            {url:Foto_43, title: "Imagem 3"},
            {url:Foto_44, title: "Imagem 4"},
            {url:Foto_45, title: "Imagem 5"},
            {url:Foto_46, title: "Imagem 6"}
        ]
    }
    else {
        slides = [
            {url:Foto_47, title: "Imagem 1"}
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
                <ImageSlider slides={slides.filter(slide => slide.url !== undefined)} />
            </div>
        </div>
    )
}
export default Slider