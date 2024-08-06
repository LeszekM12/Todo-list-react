import styled from "styled-components";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

export const Navigation = styled.nav`
    border: 1px solid black;
`;

export const List = styled.ul`
    background-color: teal;
`;

export const StyledLink = styled(Link)`
  text-align: center;
  color: black;
  text-decoration: none;
  transition: 0.5s;
  padding:  0px 10px;
  line-height: 1.5;
`;
