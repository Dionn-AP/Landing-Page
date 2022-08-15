import {
    WrapperFooterNavigation, WrapperLeftNavigation,
    WrapperTextLeftNavigation, WrapperTextRightNavigation,
    ImageFlowPages, WrapperRightNavigation
} from './FooterNavigation.style';

import IconArrowLeft from '../../assets/icon-arrow-left.svg';
import IconArrowRight from '../../assets/icon-arrow-right.svg';
import { Link } from 'react-router-dom';

export default function FooterNavigation({titlePrev, titleNext, linkPrev, linkNext}) {

    return (
        <WrapperFooterNavigation>
            <Link to={linkPrev}>
                <WrapperLeftNavigation>
                    <ImageFlowPages src={IconArrowLeft} alt='arrow left' />
                    <WrapperTextLeftNavigation>
                        <h3>
                            {titlePrev}
                        </h3>
                        <span>Projeto anterior</span>
                    </WrapperTextLeftNavigation>
                </WrapperLeftNavigation>
            </Link>
            <Link to={linkNext}>
                <WrapperRightNavigation>
                    <WrapperTextRightNavigation>
                        <h3>
                            {titleNext}
                        </h3>
                        <span>Próximo projeto</span>
                    </WrapperTextRightNavigation>
                    <ImageFlowPages src={IconArrowRight} alt='arrow right' />
                </WrapperRightNavigation>
            </Link>
        </WrapperFooterNavigation>
    )
};