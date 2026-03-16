import styled from "styled-components";

export const StyledSection = styled.section`
    background-color: ${({ theme }) => theme.color.sectionBg};
    box-shadow: ${({ theme }) => theme.color.sectionShadow};
    border: ${({ theme }) => theme.color.sectionBorder};
    border-radius: ${({ theme }) => theme.color.sectionRadius};
    margin: 12px 0;
    padding: 5px;
    flex-basis: 400px;
    text-align: center;
    transition: background-color 0.25s ease, box-shadow 0.25s ease;
`;

export const Header = styled.header`
    border-bottom: 1px solid ${({ theme }) => theme.color.taskBorder};
    display: grid;
    grid-template-columns: auto auto;
    grid-gap: 10px;
    justify-content: space-between;
    align-items: center;
    padding: 15px;

    h2 {
        color: ${({ theme }) => theme.color.headerColor};
        margin: 0;
        font-size: 18px;
    }

    @media(max-width: ${({ theme }) => theme.breakpoints.mobileMax}) {
        grid-template-columns: 1fr;
    }
`;

export const Body = styled.div`
    padding: 20px;

    @media(max-width: 767px) {
        padding: 5px;
    }
`;
