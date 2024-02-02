import { Children, createContext, useState } from "react";
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

export const CarrinhoContext = createContext()

export const CarrinhoContextProvider = ({ children }) => {
    const [all_produtos, setAllProdutos] = useState([
        { id: 'produto_1', tipo_produto:'Tênis',name: 'Tênis', name_2: 'Dunk Low Pro', price: '999,99', image: Tenis_1, to: '/products/TenisSBDunkLowPro', carrinho:false, full_name: 'Tênis Dunk Low Pro', tamanho: null},
        { id: 'produto_2', tipo_produto:'Moletom',name: 'Moletom', name_2: 'Puma x RM ', price: '649,99', image: Moletom_1, to: '/products/MoletomPumaRM', carrinho:false, full_name: 'Moletom Puma x RM', tamanho: null},
        { id: 'produto_3', tipo_produto:'Acessorio',name: 'Gorro', name_2: 'Jordan', price: '349,99', image: Gorro, to: '/products/GorroJordan', carrinho:false, full_name: 'Gorro Jordan', tamanho: null},
        { id: 'produto_4', tipo_produto:'Tênis',name: 'Tênis', name_2: 'Air Jordan 1', price: '999.99', image: Tenis_2, to: '/products/JordanMid1', carrinho:false, full_name: 'Tênis Air Jordan 1', tamanho: null},
        { id: 'produto_5', tipo_produto:'Moletom',name: 'Camisa', name_2: 'Off-White', price: '699.99', image: Moletom_2, to: '/products/moletomOffWhithe', carrinho:false, full_name: 'Camisa Off-White', tamanho: null},
        { id: 'produto_6', tipo_produto:'Moletom',name: 'Moletom', name_2: 'Nike Anorak', price: '759.99', image: Moletom_3, to: '/products/MoletomAnorak', carrinho:false, full_name: 'Moletom Nike Anorak', tamanho: null},
        { id: 'produto_7', tipo_produto:'Moletom',name: 'Moletom', name_2: 'Jordan x JB', price: '999.99', image: Moletom_4, to: '/products/moletomJordanJB', carrinho:false, full_name: 'Moletom Jordan x JB', tamanho: null},
        { id: 'produto_8', tipo_produto:'Tênis',name: 'Tênis', name_2: 'Jordan Mid', price: '1.099.99', image: Tenis_4, to: '/products/JordanMid1_2', carrinho:false,  full_name: 'Tênis Jordan Mid', tamanho: null},
        { id: 'produto_9', tipo_produto:'Tênis',name: 'Tênis', name_2: 'Jordan Mid', price: '1.299.99', image: Tenis_3, to: '/products/JordanMid1_3', carrinho:false, full_name: 'Tênis Jordan Mid 2', tamanho: null},
        { id: 'produto_10',tipo_produto:'Tênis', name: 'Tênis', name_2: 'Jordan 7', price: '1.899.99', image: Tenis_5, to: '/products/TenisJordan7',carrinho:false, full_name: 'Tênis Jordan 7', tamanho: null},
        { id: 'produto_11',tipo_produto:'Tênis', name: 'Tênis', name_2: 'VANS', price: '899.99', image: Tenis_6, to: '/products/TenisVANS', carrinho:false, full_name: 'Tênis VANS', tamanho: null},
        { id: 'produto_12', tipo_produto:'Acessorio',name: 'Bonê', name_2: 'VANS Felpudo', price: '999.99', image: Bone, to: '/products/BoneVANS', carrinho:false,  full_name: 'Bonê VANS Felpudo', tamanho: null}
        
    ])

    const [produtos_carrinho , setProdutosCarrinho] = useState([])

    const [products, setProducts] = useState([
        { id: 'produto_1', tipo_produto:'Tênis',name: 'Tênis', name_2: 'Dunk Low Pro', price: 'R$ 999,99', image: Tenis_1, to: '/products/TenisSBDunkLowPro' },
        { id: 'produto_2', tipo_produto:'Moletom',name: 'Moletom', name_2: 'Puma x RM ', price: 'R$ 649,99', image: Moletom_1, to: '/products/MoletomPumaRM' },
        { id: 'produto_3', tipo_produto:'Acessorio',name: 'Gorro', name_2: 'Jordan', price: 'R$ 349,99', image: Gorro, to: '/products/GorroJordan' },
        { id: 'produto_4', tipo_produto:'Tênis',name: 'Tênis', name_2: 'Air Jordan 1', price: 'R$ 999.99', image: Tenis_2, to: '/products/JordanMid1' },
        { id: 'produto_5', tipo_produto:'Moletom',name: 'Camisa', name_2: 'Off-White', price: 'R$ 699.99', image: Moletom_2, to: '/products/moletomOffWhithe' },
        { id: 'produto_6', tipo_produto:'Moletom',name: 'Moletom', name_2: 'Nike Anorak', price: 'R$ 759.99', image: Moletom_3, to: '/products/MoletomAnorak' },
        { id: 'produto_7', tipo_produto:'Moletom',name: 'Moletom', name_2: 'Jordan x JB', price: 'R$ 999.99', image: Moletom_4, to: '/products/moletomJordanJB' },
        { id: 'produto_8', tipo_produto:'Tênis',name: 'Tênis', name_2: 'Jordan Mid', price: 'R$ 1.099.99', image: Tenis_4, to: '/products/JordanMid1_2'  },
        { id: 'produto_9', tipo_produto:'Tênis',name: 'Tênis', name_2: 'Jordan Mid', price: 'R$ 1.299.99', image: Tenis_3, to: '/products/JordanMid1_3'},
        { id: 'produto_10',tipo_produto:'Tênis', name: 'Tênis', name_2: 'Jordan 7', price: 'R$ 1.899.99', image: Tenis_5, to: '/products/TenisJordan7' },
        { id: 'produto_11',tipo_produto:'Tênis', name: 'Tênis', name_2: 'VANS', price: 'R$ 899.99', image: Tenis_6, to: '/products/TenisVANS' },
        { id: 'produto_12', tipo_produto:'Acessorio',name: 'Bonê', name_2: 'VANS Felpudo', price: 'R$ 999.99', image: Bone, to: '/products/BoneVANS' }
    ])

    const [searchBox, setSearchBox] = useState([])

    return (
        <CarrinhoContext.Provider value={{ all_produtos,setAllProdutos,setProdutosCarrinho, produtos_carrinho, products, setProducts, searchBox, setSearchBox }}>
            {children}
        </CarrinhoContext.Provider>
    )
}