import { Link } from 'react-router-dom';
import ButtonScrollTop from '../../components/ButtonScrollTop/ButtonScrollTop';
import Footer from '../../components/Footer/Footer';
import GoScrollTop from '../../components/GoScrollTop/GoScrollTop';
import Header from '../../components/Header/Header';
import MessageContactMe from '../../components/MessageContactMe/MessageContactMe';
import { ButtonsBackColorNone, WrapperAllPages } from '../../global/Styles';
import {
    DivTextAboutMe, ImageDivAboutMe,
    TextAboutMe, WrapperAboutMe, WrapperContentBanner, WrapperHomeBanner
} from './Home.style';

export default function Home() {

    return (
        <WrapperAllPages>
            <GoScrollTop />
            <Header />
            <WrapperHomeBanner>
                <WrapperContentBanner>
                    <h1>Olá, me chamo Dionnatan Alves e eu amo construir websites lindos</h1>
                </WrapperContentBanner>
            </WrapperHomeBanner>
            <WrapperAboutMe id='about-me'>
                <ImageDivAboutMe></ImageDivAboutMe>
                <DivTextAboutMe>
                    <TextAboutMe>
                        <h2>Sobre mim</h2>
                        <p>
                            Sou um desenvolvedor front-end júnior procurando por uma oportunidade.
                            Eu foco em escrever HTML acessível, usando práticas modernas de CSS e escrevendo um JavaScript limpo.
                            Quando estou escrevendo código JavaScript, na maioria das vezes estou usando React, mas posso me adaptar
                            para qualquer ferramenta se necessário. Moro em Londres, UK, mas também seria feliz trabalhando remotamente
                            e tenho experiência em times remotos. Quando não estou codando, poderá me achar fora de casa. Eu adoro estar
                            próximo a natureza seja para uma caminhada, corrida ou ciclismo. Eu amaria se você desse uma olhada no meu trabalho.
                        </p>
                    </TextAboutMe>
                    <Link to='/portifolio'>
                        <ButtonsBackColorNone
                            colorAndBorderButton={'--color-primery-dark-blue'}
                        >IR PARA PORTIFOLIO</ButtonsBackColorNone>
                    </Link>
                </DivTextAboutMe>
            </WrapperAboutMe>
            <MessageContactMe />
            <Footer />
            <ButtonScrollTop
                colorButtonBack={'--color-primery-dark-blue'}
            />
        </WrapperAllPages>
    )
};