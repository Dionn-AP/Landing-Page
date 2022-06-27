import styled from "styled-components";
import BannerHome from '../../assets/banner.svg';
import ImageAboutMe from '../../assets/banner-about-me.svg';

// export const WrapperHome = styled.div`
//     display: flex;
//     flex-direction: column;
//     align-items: center;
//     justify-content: center;
//     position: relative;
//     min-height: auto;
//     max-width: 100vw;
//     padding: 6rem 16rem 23rem 16rem;
//     background-color: var(--color-secondary-v-light-grey);
// `

export const WrapperHomeBanner = styled.div`
    display: flex;
    align-items: flex-end;
    height: 65rem;
    width: 100%;
    background-image: url(${BannerHome});
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-position: bottom;
    background-size: contain;
    margin-bottom: 14rem;
`

export const WrapperContentBanner = styled.div`
    display: flex;
    text-align: left;
    position: relative;
    width: 43rem;
    height: auto;
    padding: 5.3rem 2.6rem 10rem 2.6rem;
    background-color: var(--color-secondary-v-light-grey-opacity-0-9);
`

export const WrapperBannerButton = styled.a`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    height: auto;
    width: auto;
    position: absolute;
    bottom: 0;
    left: 0;
    background-color: var(--color-primery-dark-blue);
`

export const ImageDivBannerButton = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: auto;
    width: 5rem;
    background-color: var(--color-total-black-opacity);
    cursor: pointer;
`

export const ImageBannerButton = styled.img`
    height: 1.8rem;
    width: auto;
`

export const BannerButton = styled.button`
    color: var(--color-white);
`

export const WrapperAboutMe = styled.section`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    height: 60rem;
    width: 100%;
    margin-bottom: 15rem;
`

export const ImageDivAboutMe = styled.div`
    height: 100%;
    width: 50%;
    background-image: url(${ImageAboutMe});
    background-repeat: no-repeat;
    background-position: left;
    background-size: contain;
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
`

export const TextAboutMe = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
    justify-content: left;

    h2 {
        margin-bottom: 2.7rem;
    }

    p {
        margin-bottom: 2.4rem;
    }
`

export const TextAboutMeButton = styled.button`
    display: flex;
    background-color: var(--color-secondary-v-light-grey);
    border: 1px solid var(--color-primery-grayish-dark-blue);
    color: var(--color-primery-grayish-dark-blue);
`