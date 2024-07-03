import styled from "styled-components";

export const StyledButtons = styled.div`
    display: flex;
    flex-wrap: wrap;
`;

export const Button = styled.button`
    border: none;
    background-color:rgb(255, 255, 255);
    color: hsl(180, 100%, 25%);
    margin: 0 0 0 20px;
    transition: color 0.3s;

    &:hover {
        color: hsl(180, 100%, 35%);
    }

    &:disabled {
        color: rgb(147, 145, 145);
    }

    @media(max-width: 767px) {
        flex-basis: 100%;
        margin: 10px;
    }
`;