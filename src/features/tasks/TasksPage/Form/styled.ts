import styled from "styled-components";

export const StyledForm = styled.form`
    display: grid;
    grid-template-columns: 1fr auto;
    grid-gap: 15px;

    @media(max-width: 767px) {
        grid-template-columns: 1fr;
    }
`;

export const Input = styled.input`
    border: 1px solid;
    padding: 10px;
    border-radius: 20px;
    color: rgb(130, 137, 143);

    @media(max-width: 767px) {
        width: 100%;
    }
`;

export const Button = styled.button`
    border-radius: 25px;
    border: none;
    padding: 10px;
    width: 150px;
    color: white;
    background-color: hsl(180, 100%, 20%);

    &:hover {
        transform: scale(1.1);
        background-color: hsl(180, 100%, 25%);
    }

    &:active {
        background: hsl(180, 100%, 35%);
    }

    @media(max-width: 767px) {
        width: 100%;
    }
`;