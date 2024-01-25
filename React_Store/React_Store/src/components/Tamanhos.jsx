import './Tamanhos.css'

const Tamanhos = () => {
    return (
        <div className="container_tamnhos">
            <div className="tamanhos_title">
                <p>ESCOLHA O SEU <span>TAMANHO</span></p>
            </div>
            <div className="tamanhos_selecionar">
                <div className="tamanho">
                    <p>PP</p>
                </div>
                <div className="tamanho">
                    <p>P</p>
                </div>
                <div className="tamanho">
                    <p>M</p>
                </div>
                <div className="tamanho">
                    <p>G</p>
                </div>
                <div className="tamanho">
                    <p>GG</p>
                </div>
                <div className="tamanho">
                    <p>GGG</p>
                </div>
                <div className="tamanho">
                    <p>GGGG</p>
                </div>
            </div>
        </div>
    )
}
export default Tamanhos