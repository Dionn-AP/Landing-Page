import {
    WrapperContentCards, BannersPortifolio, ColumnReverse,
    WrapperTextCard, TextCards, WrapperContentIntoPortifolio, WrapperPagePortifolio
} from './Portifolio.style';

import { ButtonsBackColorNone } from '../../global/Styles';
import BannerManage from '../../assets/banner-manage.svg';
import BannerBookMark from '../../assets/banner-bookmark.svg';
import BannerInsure from '../../assets/banner-insure.svg';
import BannerFylo from '../../assets/banner-fylo.svg';
import MessageContactMe from '../../components/MessageContactMe/MessageContactMe';
import ButtonScrollTop from '../../components/ButtonScrollTop/ButtonScrollTop';
import GoScrollTop from '../../components/GoScrollTop/GoScrollTop';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import { useEffect } from 'react';
import ScrollReveal from 'scrollreveal';
import { Link } from 'react-router-dom';

export default function Portifolio() {

    useEffect(() => {
        const srCards = ScrollReveal({
            distance: '30px',
            duration: 1500,
            reset: true
        })
        const srScroll = ScrollReveal({
            distance: '30px',
            duration: 1000,
            reset: true
        });
        srCards.reveal('#cards-left', { delay: 150, origin: 'left' });
        srCards.reveal('#cards-right', { delay: 150, origin: 'right' });
        srScroll.reveal('#scroll', { delay: 100, origin: 'bottom' });
    }, []);

    return (
        <WrapperPagePortifolio>
            <GoScrollTop />
            <Header />

            <WrapperContentIntoPortifolio>
                <WrapperContentCards>
                    <BannersPortifolio
                        id='cards-left'
                        srcImage={BannerManage}
                        alt='mange portifolio'
                    />
                    <WrapperTextCard
                        id='cards-right'
                        colorBorderTextCard={'--color-theme-manage'}
                    >
                        <TextCards>
                            <h2>Manage</h2>
                            <p>
                                Esse projeto me fez criar uma landing page responsiza de acordo
                                com o design que recebi. Usei HTML5, CSS Grid e JavaScript para
                                as ??reas interativas, como o slider de testimoniais.
                            </p>
                        </TextCards>
                        <Link to='/manage'>
                            <ButtonsBackColorNone
                                colorAndBorderButton={'--color-theme-manage'}
                            >VER PROJETO</ButtonsBackColorNone>
                        </Link>
                    </WrapperTextCard>
                </WrapperContentCards>

                <WrapperContentCards>
                    <ColumnReverse>
                        <WrapperTextCard
                            id='cards-left'
                            colorBorderTextCard={'--color-theme-bookmark'}
                        >
                            <TextCards>
                                <h2>Bookmark</h2>
                                <p>
                                    Esse projeto me fez criar uma landing page responsiza de acordo com
                                    o design que recebi. Usei HTML5, CSS Grid e JavaScript para as ??reas
                                    interativas, como a ??rea de Features.
                                </p>
                            </TextCards>
                            <Link to='/bookmark'>
                                <ButtonsBackColorNone
                                    colorAndBorderButton={'--color-theme-bookmark'}
                                >VER PROJETO</ButtonsBackColorNone>
                            </Link>
                        </WrapperTextCard>
                        <BannersPortifolio
                            id='cards-right'
                            srcImage={BannerBookMark}
                            alt='mange portifolio'
                        />
                    </ColumnReverse>
                </WrapperContentCards>

                <WrapperContentCards>
                    <BannersPortifolio
                        id='cards-left'
                        srcImage={BannerInsure}
                        alt='mange portifolio'
                    />
                    <WrapperTextCard
                        id='cards-right'
                        colorBorderTextCard={'--color-theme-insure'}
                    >
                        <TextCards>
                            <h2>Insure</h2>
                            <p>
                                Este foi um projeto pequeno que consistiu em HTML e CSS principalmente.
                                Eu constru?? uma landing page totalmente responsiva. O ??nico JavaScript
                                que usei foi para o menu de navega????o mobile.
                            </p>
                        </TextCards>
                        <Link to='/insure'>
                            <ButtonsBackColorNone
                                colorAndBorderButton={'--color-theme-insure'}
                            >VER PROJETO</ButtonsBackColorNone>
                        </Link>
                    </WrapperTextCard>
                </WrapperContentCards>

                <WrapperContentCards>
                    <ColumnReverse>
                        <WrapperTextCard
                            id='cards-left'
                            colorBorderTextCard={'--color-theme-fylo'}
                        >
                            <TextCards>
                                <h2>Fylo</h2>
                                <p>
                                    Este projeto foi puramente HTML e CSS. Eu recebi designs mobile e desktop para
                                    construir, ent??o ele foi totalmente responsivo. Eu tomei um caminho mobile-first
                                    e usei CSS moderno como Flexbox e Grid para criar o layout.
                                </p>
                            </TextCards>
                            <Link to='/fylo'>
                                <ButtonsBackColorNone
                                    colorAndBorderButton={'--color-theme-fylo'}
                                >VER PROJETO</ButtonsBackColorNone>
                            </Link>
                        </WrapperTextCard>
                        <BannersPortifolio
                            id='cards-right'
                            srcImage={BannerFylo}
                            alt='mange portifolio'
                        />
                    </ColumnReverse>
                </WrapperContentCards>

                <MessageContactMe />
            </WrapperContentIntoPortifolio>

            <Footer />
            <ButtonScrollTop
                colorButtonBack={'--color-primery-dark-blue'}
            />
        </WrapperPagePortifolio>
    )
};