import styled from "styled-components";
import { colors } from "../../globalStyles/globalValues";

export const Border = styled.div`
  width: 50px;
  height: 50px;
  clip-path: circle();
  background-color: ${colors.lightGreyAlmostTransparent};
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all .3s ease-in-out;
  cursor: grab;
  
  &:active {
    transform: scale(4);
    cursor: grabbing;
  }
`;

export const Container = styled.div`
  width: 100%;
  height: 100%;


`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: fill;
`;