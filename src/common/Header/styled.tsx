import styled from "styled-components";

export const StyledHeader = styled.h1`
    font-weight: 800;
    font-size: 40px;
    text-align: center;
    color: ${({ theme }) => theme.color.headerColor};
    transition: color 0.25s ease;
`;
