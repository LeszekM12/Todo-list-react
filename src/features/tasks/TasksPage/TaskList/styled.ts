import {Link} from "react-router-dom";
import styled, { css } from "styled-components";


interface TaskActions {
  hidden?: boolean;
  done?: boolean;
  toggleDone?: boolean;
  remove?: boolean;
}

export const List = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

export const Item = styled.li`
  display: grid;
  grid-template-columns: auto 1fr auto;
  grid-gap: 10px;
  align-items: center;
  padding: 10px;

  ${({ hidden }) =>
    hidden &&
    css`
      display: none;
    `}
`;

export const Content = styled.span<TaskActions>`
  ${({ done }) =>
    done &&
    css`
      text-decoration: line-through;
    `}
`;

export const Button = styled.button<TaskActions>`
  border: none;
  width: 35px;
  height: 35px;
  padding: 0;
  display: grid;
  align-items: center;
  border-bottom: 1px solid #ddd;
  transition: color 0.3s;

  ${({ toggleDone }) =>
    toggleDone &&
    css`
      background-color: green;
      &:hover {
        background-color: hsl(120, 100%, 40%);
      }
    `}

  ${({ remove }) =>
    remove &&
    css`
      background-color: red;
      &:hover {
        background-color: hsl(0, 100%, 70%);
      }
    `}
`;

export const StyledLink = styled(Link)`
  color: black;
  text-decoration: none;
  transition: 0.5s;
  padding: 0 10px;
  line-height: 1.5;
`;
