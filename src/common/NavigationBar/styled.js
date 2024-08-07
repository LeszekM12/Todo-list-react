import styled from "styled-components";
import { NavLink } from "react-router-dom/cjs/react-router-dom.min";

export const Navigation = styled.ul`
    border: 1px solid teal;
    background-color: teal;
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: center;
    list-style: none;
`;

export const List = styled.li`
    background-color: teal;
    margin: 20px;
`;

const activeClassName = "active-link";

export const StyledNavLink = styled(NavLink).attrs(() => ({
  activeClassName,
}))`
  text-align: center;
  color: black;
  text-decoration: none;
  transition: 0.1s;
  padding: 10px;
  line-height: 2;
  font-size: 17px;

  &.${activeClassName} {
      background-color: white;
      border: 5px solid white;
      border-radius: 30px;
      font-weight: bold;
  }

  &:hover {
    border-bottom: 1px solid white;
  }
`;
