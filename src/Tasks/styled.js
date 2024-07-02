import styled, { css } from "styled-components";

export const List = styled.ul`
  list-style: none;
  padding: 0px;
  margin: 0px;
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

export const Content = styled.span`
  ${({ done }) =>
    done &&
    css`
      text-decoration: line-through;
    `}
`;

export const Button = styled.button`
  border: none;
  width: 30px;
  height: 30px;
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
