import { useContext } from "react";
import { CarrinhoContext } from "../context/CarrinhoContext";

export const useCarrinhoContext = () => {
    const context = useContext(CarrinhoContext)

    if(!context) {
        console.log('contexto nao encontrado')
    }
    return context
}