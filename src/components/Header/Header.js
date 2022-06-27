import { WrapperHeader, WrapperMenu, Logo } from './Header.styles';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-use';
import LogoMark from '../../assets/icon-arrow-up-down.svg';

export default function Header() {
    const { pathname } = useLocation();

    return (
        <WrapperHeader>
            <Logo src={LogoMark} alt='logomark'></Logo>
            <WrapperMenu>
                <Link to='/home'
                    style={
                        {
                            textDecoration: 'none',
                            color: (pathname == '/home')
                                ? 'var(--color-primary-cyan)'
                                : 'var(--color-primery-grayish-dark-blue)'
                        }}>HOME</Link>
                <Link to='/portifolio' style={
                    {
                        textDecoration: 'none',
                        color: (pathname != '/home' && pathname != '/contact')
                            ? 'var(--color-primary-cyan)'
                            : 'var(--color-primery-grayish-dark-blue)'
                    }}>PORTIFOLIO</Link>
                <Link to='/contact' style={
                    {
                        textDecoration: 'none',
                        color: pathname == '/contact'
                            ? 'var(--color-primary-cyan)'
                            : 'var(--color-primery-grayish-dark-blue)'
                    }}>CONTATO</Link>
            </WrapperMenu>
        </WrapperHeader>
    )
};