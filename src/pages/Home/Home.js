import {
    WrapperHomeBanner,
    WrapperContentBanner, BannerButton,
    WrapperBannerButton, ImageDivBannerButton,
    ImageBannerButton, WrapperAboutMe, ImageDivAboutMe,
    TextAboutMe, DivTextAboutMe

} from './Home.style';
import { WrapperAllPages, ButtonsBackColorNone } from '../../global/Styles';
import { Link } from 'react-router-dom';
import ImageButtonBanner from '../../assets/arrow-down-button.svg';
import GoScrollTop from '../../components/GoScrollTop/GoScrollTop';
import ButtonScrollTop from '../../components/ButtonScrollTop/ButtonScrollTop';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import MessageContactMe from '../../components/MessageContactMe/MessageContactMe';

export default function Home() {

    return (
        <WrapperAllPages>
            <GoScrollTop />
            <Header />
            <WrapperHomeBanner>
                <WrapperContentBanner>
                    <h1>Olá, me chamo Dionnatan Alves e eu amo construir websites lindos</h1>
                    {/* <WrapperBannerButton
                        href='#about-me'
                        onClick={() => window.scroll({ behavior: 'smooth' })}
                    >
                        <ImageDivBannerButton>
                            <ImageBannerButton src={ImageButtonBanner} alt='arrown-down' />
                        </ImageDivBannerButton>
                        <BannerButton>SOBRE MIM</BannerButton>
                    </WrapperBannerButton> */}
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