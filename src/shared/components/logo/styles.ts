import styled from "styled-components";

export const Container = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
  cursor: pointer;
  transition: all .3s ease-in-out;
  
  &:hover{
    transform: scale(1.02);
    opacity: 0.8;
  }
`;