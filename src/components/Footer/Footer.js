import {
    WrapperFooter, WrapperNavPages, WrapperNavSocialNetwork,
    ImageSocialNetwork, WrapperMenuFooter
} from './Footer.style';

import LogoWhite from '../../assets/logo-white.svg';
import ImageGitHub from '../../assets/icon-github.svg';
import ImageTwiter from '../../assets/icon-twiter.svg';
import ImageLinkedin from '../../assets/icon-linkedin.svg';
import { Link } from 'react-router-dom';
import { Logo } from '../Header/Header.styles';

export default function Footer() {

    return (
        <WrapperFooter>
            <WrapperNavPages>
                <Logo src={LogoWhite} alt='logomark whie' />
                <WrapperMenuFooter>
                    <Link to='/home' style={{ textDecoration: 'none', color: 'var(--color-white)' }}>HOME</Link>
                    <Link to='/portifolio' style={{ textDecoration: 'none', color: 'var(--color-white)' }}>PORTIFOLIO</Link>
                    <Link to='/contact' style={{ textDecoration: 'none', color: 'var(--color-white)' }}>CONTATO</Link>
                </WrapperMenuFooter>
            </WrapperNavPages>
            <WrapperNavSocialNetwork>
                <ImageSocialNetwork src={ImageGitHub} alt='github' />
                <ImageSocialNetwork src={ImageTwiter} alt='twiter' />
                <ImageSocialNetwork src={ImageLinkedin} alt='linkedin' />
            </WrapperNavSocialNetwork>
        </WrapperFooter>
    )
};