import styled from "styled-components";

export const WrapperButtonScroll = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 6rem;
    width: 6rem;
    border-radius: 50%;
    background-color: ${ props => `var(${props.colorButtonScroll})`};
    cursor: pointer;
    position: fixed;
    bottom: 12.5rem;
    right: 5rem;
`

export const ImageArrowUpScroll = styled.img`
    height: 3.5rem;
    width: auto;
`