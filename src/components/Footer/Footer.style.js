import styled from "styled-components";

export const WrapperFooter = styled.footer`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 2.4rem 16rem;
    width: 100%;
    position: absolute;
    bottom: 0;
    background-color: var(--color-primery-grayish-dark-blue);

    @media (max-width: 1389px) {
        padding: 2.4rem 12rem;
    }

    @media (max-width: 1264px) {
        padding: 2.4rem 8rem;
    }

    @media (max-width: 1064px) {
        padding: 2.4rem 6rem
    }

    @media (max-width: 768px) {
        padding: 2.4rem 3rem
    }

    @media (max-width: 575px) {
        flex-direction: column;
    }
`

export const WrapperNavPages = styled.nav`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 40%;

    @media (max-width: 1264px) {
        justify-content: flex-start;
        width: 50%;
    }

    @media (max-width: 860px) {
        width: 60%;
    }

    @media (max-width: 760px) {
        width: 65%;
    }

    @media (max-width: 680px) {
        width: 68%;
    }

    @media (max-width: 575px) {
        width: 95%;
        justify-content: space-between;
        margin-bottom: 3rem;
    }

    @media (max-width: 500px) {
        img {
            display: none;
        }
    }
`

export const WrapperMenuFooter = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    height: 100%;
    width: 35rem;
    letter-spacing: 0.2rem;
    justify-content: space-between;
    margin-left: 1.5rem;
    color: var(--color-primery-grayish-dark-blue);

    a:hover {
        color: var(--color-primary-cyan);
        transition: all 0.4s;
    }

    @media (max-width: 500px) {
        margin-left: 0;
        width: 100%;
    }
`

export const WrapperNavSocialNetwork = styled.nav`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 15%;

    @media (max-width: 1264px) {
        width: 20%;
    }

    @media (max-width: 760px) {
        width: 25%;
    }

    @media (max-width: 575px) {
        width: 80%;
    }

    @media (max-width: 500px) {
        width: 90%;
        margin-right: 1.3rem;
    }
`

export const ImageSocialNetwork = styled.img`
    height: 3rem;
    width: auto;
    cursor: pointer;
    transition: all 0.4s;

    :hover {
        transform: scale(1.1);
        transition: all 0.4s
    }
`

