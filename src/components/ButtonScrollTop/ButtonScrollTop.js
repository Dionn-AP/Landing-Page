import { WrapperButtonScroll, ImageArrowUpScroll } from './ButtonScrollTop.style';
import ImageArrowUp from '../../assets/arrow-up-scroll.svg';

export default function ButtonScrollTop({ colorButtonBack }) {

    return (
        <WrapperButtonScroll colorButtonScroll={colorButtonBack}>
            <ImageArrowUpScroll src={ImageArrowUp} alt='arrow up' />
        </WrapperButtonScroll>
    )
};