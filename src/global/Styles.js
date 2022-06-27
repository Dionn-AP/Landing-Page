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
