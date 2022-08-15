import {
    MainBannerPages, WrapperContentPages, WrapperContentPagesLeft,
    WrapperContentPagesTextLeft, WrapperContentPagesRight,
    WrapperContentPagesTextRight, MiniBannerManage
} from '../../global/StylesPages';

import MiniBanner1 from '../../assets/mini-banner-bookmark1.svg';
import MiniBanner2 from '../../assets/mini-banner-bookmark2.svg';
import FooterNavigation from '../../components/FooterNavigation/FooterNavigation';
import { WrapperAllPages, ButtonsBackColorNone } from '../../global/Styles';
import ButtonScrollTop from '../../components/ButtonScrollTop/ButtonScrollTop';
import ScrollReveal from 'scrollreveal';
import { useEffect } from 'react';
import GoScrollTop from '../../components/GoScrollTop/GoScrollTop';
import BannerPages from '../../assets/banner-page-bookmark.svg';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

export default function BookMark() {

    useEffect(() => {
        const srCards = ScrollReveal({
            distance: '100px',
            duration: 2500,
            reset: false
        });
        const srMiniBanner = ScrollReveal({
            distance: '100px',
            duration: 2000,
            reset: false
        });
        srCards.reveal('#banner-main', { delay: 0, origin: 'top', });
        srMiniBanner.reveal('#mini-banner', { delay: 50, origin: 'right' });
    });

    return (
        <WrapperAllPages>
            <GoScrollTop />
            <Header />
            <MainBannerPages
                id='banner-main'
                srcImage={BannerPages}
                alt='mange banner'
            />
            <WrapperContentPages>
                <WrapperContentPagesLeft>
                    <WrapperContentPagesTextLeft>
                        <h2>
                            Bookmark
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
                        colorAndBorderButton={'--color-theme-bookmark'}
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
                        id='mini-banner'
                        srcImage={MiniBanner1}
                        alt='banner manage'
                    />
                    <MiniBannerManage
                        id='mini-banner'
                        srcImage={MiniBanner2}
                        alt='banner manage'
                    />
                </WrapperContentPagesRight>
            </WrapperContentPages>
            <FooterNavigation
                titlePrev={'Manage'}
                titleNext={'Insure'}
                linkPrev={'/manage'}
                linkNext={'/insure'}
            />
            <Footer />
            <ButtonScrollTop
                colorButtonBack={'--color-theme-bookmark'}
            />
        </WrapperAllPages>
    )
};