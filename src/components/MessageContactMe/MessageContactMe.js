import { WrapperMessageHome } from './MessageContactMe.style';
import { ButtonsBackColorNone } from '../../global/Styles';
import { Link } from 'react-router-dom';

export default function MessageContactMe() {

    return (
        <WrapperMessageHome>
            <h2>
                Interessado em fazer projetos comigo?
            </h2>
            <Link to='/contact'>
                <ButtonsBackColorNone>CONTATO</ButtonsBackColorNone>
            </Link>
        </WrapperMessageHome>
    )
};