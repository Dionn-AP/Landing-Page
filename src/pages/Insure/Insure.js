import {
    MainBannerPages, WrapperContentPages, WrapperContentPagesLeft,
    WrapperContentPagesTextLeft, WrapperContentPagesRight,
    WrapperContentPagesTextRight, MiniBannerManage
} from '../../global/StylesPages';

import MiniBanner1 from '../../assets/mini-banner-insure1.svg';
import MiniBanner2 from '../../assets/mini-banner-insure2.svg';

import FooterNavigation from '../../components/FooterNavigation/FooterNavigation';
import { WrapperAllPages, ButtonsBackColorNone } from '../../global/Styles';
import ButtonScrollTop from '../../components/ButtonScrollTop/ButtonScrollTop';
import BannerPages from '../../assets/banner-page-insure.svg';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

export default function Insure() {

    return (
        <WrapperAllPages>
            <Header />
            <MainBannerPages
                srcImage={BannerPages}
                alt='mange banner'
            />
            <WrapperContentPages>
                <WrapperContentPagesLeft>
                    <WrapperContentPagesTextLeft>
                        <h2>
                            Insure
                        </h2>
                        <p>
                            Esse projeto me fez criar uma landing page responsiza de acordo
                            com o design que recebi. Usei HTML5, CSS Grid e JavaScript para
                            as áreas interativas, como o slider de testimoniais.
                        </p>
                        <span>Interaction Design / Front End Development</span>
                        <span>HTML / CSS / JS</span>
                    </WrapperContentPagesTextLeft>
                    <ButtonsBackColorNone
                        colorAndBorderButton={'--color-theme-insure'}
                    >VISITAR</ButtonsBackColorNone>
                </WrapperContentPagesLeft>

                <WrapperContentPagesRight>
                    <WrapperContentPagesTextRight>
                        <h3>
                            Projeto
                        </h3>
                        <p>
                            Este projeto foi um desafio de front-end do Frontend Mentor.  É uma plataforma
                            que te faz práticar construindo websites  a partir de um design e casos de usuário.
                            Cada desafio contém designs mobile e desktop para ilustrar como o website seria em
                            diferentes tamanhos de tela. Criar esses projetos me ajudou a refinar meu fluxo de
                            trabalho e resolver problemas de código da vida real. Eu aprendi algo novo com cada
                            projeto, me ajudando a melhorar e adaptar meu estilo.
                        </p>
                        <h3>
                            Previews Estáticos
                        </h3>
                    </WrapperContentPagesTextRight>
                    <MiniBannerManage
                        srcImage={MiniBanner1}
                        alt='banner manage'
                    />
                    <MiniBannerManage
                        srcImage={MiniBanner2}
                        alt='banner manage'
                    />
                </WrapperContentPagesRight>
            </WrapperContentPages>
            <FooterNavigation
                titlePrev={'Bookmark'}
                titleNext={'Fylo'}
                linkPrev={'/bookmark'}
                linkNext={'/fylo'}
            />
            <Footer />
            <ButtonScrollTop 
                colorButtonBack={'--color-theme-insure'}
            />
        </WrapperAllPages>
    )
};