import { WrapperButtonScroll, ImageArrowUpScroll } from './ButtonScrollTop.style';
import { useEffect } from 'react';
import ScrollReveal from 'scrollreveal';
import ImageArrowUp from '../../assets/arrow-up-scroll.svg';

export default function ButtonScrollTop({ colorButtonBack }) {
    useEffect(() => {
        const srScroll = ScrollReveal({
            distance: '100px',
            duration: 1000,
            reset: true
        });
        srScroll.reveal('#scroll', { delay: 100, origin: 'bottom' });
    }, []);

    return (
        <WrapperButtonScroll
            id='scroll'
            onClick={() => window.scroll({top: 0, behavior: 'smooth'})}
            colorButtonScroll={colorButtonBack}>
            <ImageArrowUpScroll src={ImageArrowUp} alt='arrow up' />
        </WrapperButtonScroll>
    )
};