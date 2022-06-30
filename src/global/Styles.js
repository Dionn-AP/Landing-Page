import styled from "styled-components";

export const WrapperAllPages = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;
    min-height: auto;
    max-width: 100vw;
    padding: 6rem 16rem 23rem 16rem;
    background-color: var(--color-secondary-v-light-grey);

    @media (max-width: 1389px) {
        padding: 6rem 12rem 23rem 12rem;
    }

    @media (max-width: 1264px) {
        padding: 6rem 8rem 23rem 8rem;
    }

    @media (max-width: 1064px) {
        padding: 6rem 6rem 23rem 6rem;
    }

    @media (max-width: 768px) {
        padding: 6rem 3rem 23rem 3rem;
    }
`

export const WrapperMain = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: auto;
    max-width: 100vw;
`

export const ButtonsBackColorNone = styled.button`
    display: flex;
    background-color: var(--color-secondary-v-light-grey);
    border: 1px solid ${ props => `var(${props.colorAndBorderButton})`};
    color: ${ props => `var(${props.colorAndBorderButton})`};
    transition: all 0.5s;

    :hover {
        background-color: ${ props => `var(${props.colorAndBorderButton})`};
        color: var(--color-white);
        transition: all 0.3s;
    }
`
