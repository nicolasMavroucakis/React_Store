import Mobile from '../assets/mobile.png'
import Question from '../assets/question.png'
import Arrow from '../assets/right-arrow.png'
import './Footer.css'
import Logo from '../assets/logo.png'

const Footer = () => {
    return (
        <div className="footer_div">
            <div className="footer_conteudo">
                <div className="footer_saber_form">
                    <div className='footer_saber_form_text'>
                        <p>Receba as novidade da <span>MAVRO</span></p>
                        <p>Saiba antes dos <span>futuros lançamentos</span></p>
                    </div>
                    <div className='footer_saber_form_form'>
                        <form>
                            <input type="text" placeholder="Digite o seu nome"/>
                            <div className='footer_saber_form_form_submit'>
                                <input type="text" placeholder="Digite seu e-mail"/>
                                <button><img src={Arrow}/></button>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="footer_map_logo">
                    <div className='map_footer'>
                        <iframe
                                title="Conteúdo Embutido"
                                width="300"
                                height="300"
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d233844.60354661848!2d-46.76010398096214!3d-23.682325213999686!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce448183a461d1%3A0x9ba94b08ff335bae!2zU8OjbyBQYXVsbywgU1A!5e0!3m2!1spt-BR!2sbr!4v1705809889658!5m2!1spt-BR!2sbr"
                                style={{ border: 0 }}
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            ></iframe>
                    </div>
                    <div className='footer_logo'>
                        <img src={Logo}/>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Footer