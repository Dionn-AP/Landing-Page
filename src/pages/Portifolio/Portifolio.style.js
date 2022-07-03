import styled from "styled-components";

export const WrapperPagePortifolio = styled.div`
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

    @media (max-width: 668px) {
        padding: 6rem 3rem 23rem 3rem;
    }
`

export const WrapperContentIntoPortifolio = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: auto;
    width: 95%;
    background-color: var(--color-secondary-v-light-grey);

    @media (max-width: 668px) {
        width: 100%;
    }
`

export const WrapperContentCards = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    position: relative;
    height: 49rem;
    width: 100%;
    gap: 6%;
    margin-bottom: 10rem;

    @media (max-width: 1160px) {
        height: 40rem;
    }

    @media (max-width: 976px) {
        height: 38rem;
    }

    @media (max-width: 886px) {
        width: 98%;
        margin-bottom: 25rem;
        gap: 0;
    }

    @media (max-width: 720px) {
        justify-content: space-between;
        flex-direction: column;
        height: 82rem;
        margin-bottom: 15rem;
    }

    @media (max-width: 560px) {
        width: 100%;
    }
`

export const BannersPortifolio = styled.div`
    height: 100%;
    width: 50%;
    background-image: ${props => `url(${props.srcImage})`};
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;

    @media (max-width: 1510px) {
        background-size: cover;
    }

    @media (max-width: 960px) {
        width: 48%;
    }

    @media (max-width: 886px) {
        width: 60%;
        position: absolute;
        top: 0;
        left: 0;
    }

    @media (max-width: 720px) {
        background-position: top;
        position: initial;
        width: 90%;
        height: 38rem;
    }
`

export const WrapperTextCard = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 44%;
    align-items: flex-start;
    justify-content: center;
    border-top: 1px solid var(--color-primery-dark-blue-opacity-0-15);
    border-bottom: 1px solid var(--color-primery-dark-blue-opacity-0-15);

    @media (max-width: 960px) {
        width: 42%;
    }

    @media (max-width: 886px) {
        justify-content: space-between;
        align-items: center;
        text-align: justify;
        width: 60%;
        padding: 2rem 1.2rem 3rem 1.2rem;
        position: absolute;
        top: 20rem;
        right: 0;
        border: 0.5px solid ${props => `var(${props.colorBorderTextCard})`};
        background-color: var(--color-secondary-v-light-grey-opacity-0-9);
        box-shadow: var(--color-boxshadow-text-card-portifolio);
        z-index: 1;
    }

    @media (max-width: 720px) {
        border: none;
        border-radius: 0;
        position: initial;
        height: 38rem;
        width: 88%;
    }
`

export const TextCards = styled.div`
    display: flex;
    flex-direction: column;
    height: auto;
    justify-content: left;
    margin-bottom: 5.2rem;

    h2 {
        margin-bottom: 2.7rem;
    }

    p {
        margin-bottom: 2.4rem;
    }

    @media (max-width: 1160px) {
        margin-bottom: 2.5rem;
    }

    @media (max-width: 976px) {
        margin-bottom: 1rem;
    }

    @media (max-width: 976px) {
        margin-bottom: 0;
    }

    @media (max-width: 668px) {
        p {
            text-align: justify;
            margin-bottom: 1.4rem;
            line-height: 2.5rem;
        }
    }
`

export const ColumnReverse = styled(WrapperContentCards)`
    position: initial;
    @media (max-width: 720px) {
        
        flex-direction: column-reverse;
    }
`
