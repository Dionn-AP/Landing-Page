import styled from "styled-components";

export const WrapperContentContact = styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-between;
    height: auto;
    width: 100%;
    padding: 4.8rem 0 8rem 0;
    border-top: 0.5px solid var(--color-primery-dark-blue-opacity-0-15);
`

export const WrapperTextLeftContactTop = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    height: auto;
    width: 45%;
`

export const WrapperTextRightContactTop = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    height: auto;
    width: 55%;
`

export const WrapperFormContact = styled.form`
    height: auto;
    width: 55%;
`

export const WrapperFormInputLabel = styled.form`
    display: flex;
    flex-direction: column;
    margin-bottom: 3rem;
`

export const InputFormContact = styled.input`
    padding: 1.5rem 1.5rem;
    border: 1px solid transparent;
    background-color: var(--color-primery-grayish-dark-blue-opacity-0-10);
    
    :focus {
        border: 1px solid var(--color-primery-grayish-dark-blue);
    }
`

export const TextAreaContact = styled.div`
    display: flex;
    flex-direction: column;
    height: 12rem;
    width: 100%;
    margin-bottom: 3.5rem;

    textarea {
        border: 1px solid transparent;
        background-color: var(--color-primery-grayish-dark-blue-opacity-0-10);
    }

    textarea:focus {
        border: 1px solid var(--color-primery-grayish-dark-blue);
    }
`

export const ButtonForm= styled.button`
    display: flex;
    background-color: var(--color-primery-dark-blue);
    color: var(--color-white);

    :hover {
        opacity: 0.95;
        transition: all 0.3s;
    }
`