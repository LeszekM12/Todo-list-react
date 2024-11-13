import styled from "styled-components";

export const StyledSection = styled.section`
    background-color: #ebebeb;
    box-shadow: 0 0 10px #505050;
    border-radius: 5px;
    margin: 10px 0;
    padding: 5px;
    flex-basis: 400px;
    text-align: center; 
`;

export const Header = styled.header`
    border-bottom: 1px solid #e6e6e6;
    display: grid;
    grid-template-columns: auto auto;
    grid-gap: 10px;
    justify-content: space-between;
    align-items: center;
    padding: 15px;  
    
    
    @media(max-width: ${({ theme }) => theme.breakpoints.mobileMax}) {
        grid-template-columns: 1fr;
    }
`;

export const Body = styled.div`
    padding: 20px;

    @media(max-width: 767px){
        padding: 5px;
    }
`;