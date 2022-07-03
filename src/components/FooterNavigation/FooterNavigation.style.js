import styled from "styled-components";

export const WrapperFooterNavigation = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    height: auto;
    width: 100%;
    color: var(--color-primery-grayish-dark-blue);
    border-top: 0.5px solid var(--color-primery-dark-blue-opacity-0-15);
    border-bottom: 0.5px solid var(--color-primery-dark-blue-opacity-0-15);

    @media (max-width: 575px) {
        margin-bottom: 11rem;
    }

    @media (max-width: 500px) {
        margin-bottom: 4.5rem;
    }
`

export const WrapperLeftNavigation = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    height: 13rem;
    width: auto;
`

export const WrapperTextLeftNavigation = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    height: 100%;
    width: 100%;
    text-align: left;
    margin-left: 3rem;

    h3 {
        margin-bottom: 1rem;
    }

    span {
        color: var(--color-primery-grayish-dark-blue);
        opacity: 0.7;
    }

    @media (max-width: 560px) {
        margin-left: 1rem;
    }
`

export const WrapperRightNavigation = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    height: 13rem;
    width: auto;
`

export const WrapperTextRightNavigation = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: center;
    height: 100%;
    width: 100%;
    text-align: right;
    margin-right: 3rem;
    h3 {
        margin-bottom: 1rem;
    }

    span {
        color: var(--color-primery-grayish-dark-blue);
        opacity: 0.7;
    }

    @media (max-width: 560px) {
        margin-right: 1rem;
    }
`

export const ImageFlowPages = styled.img`
    height: 2.7rem;
    width: auto;
`