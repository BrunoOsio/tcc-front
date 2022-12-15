import styled from "styled-components";
import { colors } from "../../../../shared/globalStyles/globalValues";


export const Container = styled.article`

  width: 240px;
  border-radius: 10px;
  height: 200px;
  
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  &:hover {
    cursor: pointer;
    opacity: 0.9;
  }
`;

export const Photo = styled.div`
  background-color: aqua;
  width: 100%;
  height: 100%;
  clip-path: circle();
`;

export const Name = styled.span`
  font-size: 1rem;
  position: relative;
  top: -10px;
  text-align: center;
`;