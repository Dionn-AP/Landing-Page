import {
    WrapperContentCards, BannersPortifolio,
    WrapperTextCard, TextCards, WrapperContentIntoPortifolio
} from './Portifolio.style';

import { WrapperAllPages, ButtonsBackColorNone } from '../../global/Styles';
import BannerManage from '../../assets/banner-manage.svg';
import BannerBookMark from '../../assets/banner-bookmark.svg';
import BannerInsure from '../../assets/banner-insure.svg';
import BannerFylo from '../../assets/banner-fylo.svg';
import MessageContactMe from '../../components/MessageContactMe/MessageContactMe';
import ButtonScrollTop from '../../components/ButtonScrollTop/ButtonScrollTop';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import { Link } from 'react-router-dom';

export default function Portifolio() {

    return (
        <WrapperAllPages>
            <Header />
            <WrapperContentIntoPortifolio>
                <WrapperContentCards>
                    <BannersPortifolio
                        srcImage={BannerManage}
                        alt='mange portifolio'
                    />
                    <WrapperTextCard>
                        <TextCards>
                            <h2>Manage</h2>
                            <p>
                                Esse projeto me fez criar uma landing page responsiza de acordo
                                com o design que recebi. Usei HTML5, CSS Grid e JavaScript para
                                as áreas interativas, como o slider de testimoniais.
                            </p>
                        </TextCards>
                        <Link to='/manage'>
                            <ButtonsBackColorNone>VER PROJETO</ButtonsBackColorNone>
                        </Link>
                    </WrapperTextCard>
                </WrapperContentCards>

                <WrapperContentCards>
                    <WrapperTextCard>
                        <TextCards>
                            <h2>Bookmark</h2>
                            <p>
                                Esse projeto me fez criar uma landing page responsiza de acordo com
                                o design que recebi. Usei HTML5, CSS Grid e JavaScript para as áreas
                                interativas, como a área de Features.
                            </p>
                        </TextCards>
                        <Link to='/bookmark'>
                            <ButtonsBackColorNone>VER PROJETO</ButtonsBackColorNone>
                        </Link>
                    </WrapperTextCard>
                    <BannersPortifolio
                        srcImage={BannerBookMark}
                        alt='mange portifolio'
                    />
                </WrapperContentCards>

                <WrapperContentCards>
                    <BannersPortifolio
                        srcImage={BannerInsure}
                        alt='mange portifolio'
                    />
                    <WrapperTextCard>
                        <TextCards>
                            <h2>Insure</h2>
                            <p>
                                Este foi um projeto pequeno que consistiu em HTML e CSS principalmente.
                                Eu construí uma landing page totalmente responsiva. O único JavaScript
                                que usei foi para o menu de navegação mobile.
                            </p>
                        </TextCards>
                        <Link to='/insure'>
                            <ButtonsBackColorNone>VER PROJETO</ButtonsBackColorNone>
                        </Link>
                    </WrapperTextCard>
                </WrapperContentCards>

                <WrapperContentCards>
                    <WrapperTextCard>
                        <TextCards>
                            <h2>Fylo</h2>
                            <p>
                                Este projeto foi puramente HTML e CSS. Eu recebi designs mobile e desktop para
                                construir, então ele foi totalmente responsivo. Eu tomei um caminho mobile-first
                                e usei CSS moderno como Flexbox e Grid para criar o layout.
                            </p>
                        </TextCards>
                        <Link to='/fylo'>
                            <ButtonsBackColorNone>VER PROJETO</ButtonsBackColorNone>
                        </Link>
                    </WrapperTextCard>
                    <BannersPortifolio
                        srcImage={BannerFylo}
                        alt='mange portifolio'
                    />
                </WrapperContentCards>
                <MessageContactMe />
            </WrapperContentIntoPortifolio>
            <Footer />
            <ButtonScrollTop 
                colorButtonBack={'--color-theme-manage'}
            />
        </WrapperAllPages>
    )
};