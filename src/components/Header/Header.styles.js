import styled from "styled-components";

export const WrapperHeader = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    height: 5rem;
    width: 100%;
    margin-bottom: 5.2rem;
`

export const WrapperMenu = styled.nav`
    display: flex;
    flex-direction: row;
    align-items: center;
    height: 100%;
    width: 35rem;
    letter-spacing: 0.2rem;
    justify-content: space-between;
    color: var(--color-primery-grayish-dark-blue);

    a:hover {
        color: var(--color-primary-cyan);
        transition: all 0.4s;
    }

    @media (max-width: 500px) {
        margin-left: 1.7rem;
    }
`

export const Logo = styled.img`
    height: 4rem;
    width: auto;
`
