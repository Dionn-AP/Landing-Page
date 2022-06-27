import styled from "styled-components";

export const WrapperContentIntoPortifolio = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;
    min-height: auto;
    width: 89%;
    background-color: var(--color-secondary-v-light-grey);
`

export const WrapperContentCards = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    height: 49rem;
    width: 100%;
    margin-bottom: 10rem;
`

export const BannersPortifolio = styled.div`
    height: 100%;
    width: 53rem;
    background-image: ${ props => `url(${props.srcImage})`};
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
`

export const WrapperTextCard = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 44rem;
    align-items: flex-start;
    justify-content: center;
    border-top: 1px solid var(--color-primery-dark-blue-opacity-0-15);
    border-bottom: 1px solid var(--color-primery-dark-blue-opacity-0-15);
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
`
   