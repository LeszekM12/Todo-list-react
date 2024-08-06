import styled from "styled-components";
import { NavLink } from "react-router-dom/cjs/react-router-dom.min";

export const Navigation = styled.nav`
    border: 1px solid black;
`;

export const List = styled.ul`
    background-color: teal;
`;

const activeClassName = "active";

export const StyledNavLink = styled(NavLink).attrs(() => ({
  activeClassName,
}))`
  text-align: center;
  color: black;
  text-decoration: none;
  transition: 0.1s;
  padding:  0px 10px;
  line-height: 1.5;

  &.${activeClassName} {
      background-color: white;
      border: 2px solid rgba(179, 174, 174, 0.742);
      border-radius: 5px;
      font-weight: 600;
  }
`;
