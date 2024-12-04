// componentes
import StyledSection from './styles'

// imagens
import Instagram from '@/assets/icons/instagram.svg'
import Linkedin from '@/assets/icons/linkedin.svg'
import Whatsapp from '@/assets/icons/whatsapp.svg'
import AboutImg from '@/assets/images/about-image.png'

const About = () => {
    return (
        <StyledSection>
            <div className='image'>
                <img
                    src={AboutImg}
                    alt='Imagem de uma pessoa com um capuz programando'
                />
            </div>
            <div className='content'>
                <p>
                    Nasceu com o propósito de [missão da empresa: exemplo,
                    "transformar o mercado de tecnologia com soluções inovadoras
                    e acessíveis para todos"]. Desde o início, nossa paixão por
                    [área de atuação] e nosso compromisso com a excelência têm
                    guiado cada um dos nossos passos.
                </p>
                <div className='content__icons'>
                    <a href='#'>
                        <img src={Whatsapp} alt='Logo do Whatsapp' />
                    </a>
                    <a href='#'>
                        <img src={Instagram} alt='Logo do Instagram' />
                    </a>
                    <a href='#'>
                        <img src={Linkedin} alt='Logo do Linkedin' />
                    </a>
                </div>
            </div>
        </StyledSection>
    )
}

export default About
