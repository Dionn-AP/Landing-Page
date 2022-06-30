import styled from "styled-components";

export const WrapperMessageHome = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    min-height: auto;
    width: 100%;

    h2 {
        width: 40%;
    }

    @media (max-width: 1264px) {
        h2 {
            width: 50%;
        }
    }

    @media (max-width: 826px) {
        h2 {
            width: 70%;
        }
    }

    @media (max-width: 575px) {
        flex-direction: column;
        text-align: center;

        h2 {
            margin-bottom: 5rem;
        }
        
    }
`