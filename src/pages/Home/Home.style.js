import styled from "styled-components";
import BannerHome from '../../assets/banner.svg';
import ImageAboutMe from '../../assets/banner-about-me.svg';

export const WrapperHomeBanner = styled.div`
    display: flex;
    align-items: flex-end;
    height: 60rem;
    width: 100%;
    background-image: url(${BannerHome});
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    margin-bottom: 14rem;

    @media (max-width: 927px) {
        background-position: top;
        background-size: cover;
        height: 45rem;
    }

    @media (max-width: 660px) {
        height: 40rem;
        line-height: 6rem;
        border-radius: 0.5rem;
        border: 1px solid var(--color-white);
    }
`

export const WrapperContentBanner = styled.div`
    display: flex;
    text-align: left;
    position: relative;
    width: 43rem;
    height: auto;
    padding: 5.3rem 2.6rem 5rem 2.6rem;
    background-color: var(--color-secondary-v-light-grey-opacity-0-9);

    @media (max-width: 660px) {
        width: 100%;
        text-align: center;
        align-items: center;
        justify-content: center;
        height: 100%;
        background-color: var(--color-white-opacity-0-7);
    }
`

export const WrapperAboutMe = styled.section`
    display: flex;
    flex-direction: row;
    align-items: center;
    position: relative;
    justify-content: space-between;
    height: 60rem;
    width: 100%;
    margin-bottom: 15rem;

    @media (max-width: 1300px) {
        height: 50rem;
    }

    @media (max-width: 1017px) {
        height: 45rem;
    }

    @media (max-width: 927px) {
        height: 115rem;
        flex-direction: column;
        justify-content: flex-start;
        margin-bottom: 4.3rem;
    }

    @media (max-width: 620px) {
        margin-bottom: 0;
    }

    @media (max-width: 610px) {
        height: 115rem;
    }
`

export const ImageDivAboutMe = styled.div`
    height: 100%;
    width: 50%;
    background-image: url(${ImageAboutMe});
    background-repeat: no-repeat;
    background-position: center;
    background-size: 100%;

    @media (max-width: 1300px) {
        background-size: contain;
        background-position: left;
    }

    @media (max-width: 927px) {
        background-size: contain;
        width: 60%;
        height: 40%;
        background-position: top;
        margin-bottom: 4rem;
    }

    @media (max-width: 810px) {
        background-size: cover;
    }

    @media (max-width: 610px) {
        height: 35%;
        background-size: 100%;
    }

    @media (max-width: 580px) {
        height: 30%;
    }

    @media (max-width: 500px) {
        background-size: 100%;
        width: 85%;
    }
`

export const DivTextAboutMe = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 40%;
    padding: 5rem 0 4.5rem 0;
    align-items: center;
    justify-content: center;
    border-top: 1px solid var(--color-primery-dark-blue-opacity-0-15);
    border-bottom: 1px solid var(--color-primery-dark-blue-opacity-0-15);

    @media (max-width: 1300px) {
        width: 45%;
        padding: 2.5rem 0 2.5rem 0;
    }

    @media (max-width: 1027px) {
        width: 50%;
        padding-left: 2rem;
    }

    @media (max-width: 927px) {
        height: 54%;
        width: 60%;
        border-top: none;
        border-bottom: none;
        padding: 0 0 4rem 0;
    }

    @media (max-width: 610px) {
        justify-content: flex-start;
        width: 85%;
        height: 63%;
    }

    @media (max-width: 500px) {
        height: 75%;
        padding: 0;
    }
`

export const TextAboutMe = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
    justify-content: left;
    position: relative;

    h2 {
        margin-bottom: 2.5rem;
    }

    p {
        margin-bottom: 2.5rem;
    }

    @media (max-width: 1389px) {
        overflow-y: scroll;
        ::-webkit-scrollbar {
            height: 20px;
        }

        text-align: left;
        padding-right: 1.5rem;
        margin-bottom: 3.2rem;
    }

    @media (max-width: 927px) {
        align-items: center;
        text-align: justify;
        padding: 0 0.5rem 0 0.5rem;
        margin-bottom: 0;
        height: 80%;

        p {
            margin-bottom: 2rem;
        }

        ::-webkit-scrollbar {
            display: none;
            position: absolute;
        }
    }
`
