import styled from "styled-components";

export const StyledSection = styled.section`
    margin: 10px 0;
    padding: 5px;
    flex-basis: 400px;
`;

export const Header = styled.header`
    border-bottom: 1px solid #e6e6e6;
    display: grid;
    grid-template-columns: auto auto;
    grid-gap: 10px;
    justify-content: space-between;
    align-items: center;
    padding: 15px;  
    
    
    @media(max-width: 767px) {
        grid-template-columns: 1fr;
    }
`;

export const Body = styled.div`
    padding: 20px;

    @media(max-width: 767px){
        padding: 5px;
    }
`;