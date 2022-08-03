import styled from "styled-components";

export const Container = styled.article`
  padding: 10px 15px;
  height: 100%;
  width: 300px;
  background-color: tomato;
  cursor: grab;
  user-select: none;

  &:active {
    cursor: grabbing; 
  }
`;