import styled from "styled-components";

export const WraaperManage = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: auto;
    max-width: 100vw;
`

export const MainBannerPages = styled.div`
    height: 55rem;
    width: 100%;
    background-image: ${ props => `url(${props.srcImage})`};
    background-repeat: no-repeat;
    background-position: center;
    background-size: 100%;
    margin-bottom: 11rem;
`

export const WrapperContentPages = styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-between;
    height: auto;
    width: 100%;
    margin-bottom: 6.4rem;
`

export const WrapperContentPagesLeft = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    height: auto;
    width: 30%;
`

export const WrapperContentPagesTextLeft = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    height: auto;
    width: 100%;
    padding: 4.8rem 0;

    h2 {
        margin-bottom: 2.9rem;
    }

    p {
        margin-bottom: 5rem;
    }

    span {
        color: var(--color-primary-cyan);
        margin-bottom: 1.6rem;
    }
`

export const WrapperContentPagesRight = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
    height: auto;
    width: 55%;
`

export const WrapperContentPagesTextRight = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    height: auto;
    width: 100%;

    h3 {
        margin-bottom: 2.9rem;
    }

    p {
        margin-bottom: 4rem;
    }
`

export const MiniBannerManage = styled.div`
    height: 40rem;
    width: 100%;
    background-image: ${ props => `url(${props.srcImage})`};
    background-repeat: no-repeat;
    background-position: center;
    background-size: 100%;
    margin-bottom: 3.2rem;
`