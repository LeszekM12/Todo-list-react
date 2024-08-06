import styled from "styled-components";

export const Input = styled.input`
    border: 1px solid;
    padding: 10px;
    color: rgb(130, 137, 143);

    @media(max-width: 767px) {
        width: 100%;
    }
`;

export const StyledInput = styled.form`
    display: grid;
    grid-template-columns: 1fr auto;
    grid-gap: 15px;

    @media(max-width: 767px) {
        grid-template-columns: 1fr;
    }
`;