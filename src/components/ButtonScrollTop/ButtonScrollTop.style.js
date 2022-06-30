import styled from "styled-components";

export const WrapperButtonScroll = styled.a`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 6rem;
    width: 6rem;
    border-radius: 50%;
    background-color: ${props => `var(${props.colorButtonScroll})`};
    cursor: pointer;
    position: absolute;
    bottom: 12.5rem;
    right: 5rem;

    :hover {
        opacity: 0.9;
        transition: all 0.3s;
    }

    @media (max-width: 575px) {
        bottom: 22rem;
    }

    @media (max-width: 500px) {
        bottom: 17rem;
    }
`

export const ImageArrowUpScroll = styled.img`
    height: 3.5rem;
    width: auto;
`