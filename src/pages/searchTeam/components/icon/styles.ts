import styled from "styled-components";
import { colors } from "../../../../shared/globalStyles/globalValues";

export type BorderProps = {
  size: number
}

export const Border = styled.div<BorderProps>`
  width: ${({size}) => `${size}px`};
  height: ${({size}) => `${size}px`};
  clip-path: circle();
  background-color: ${colors.white};
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all .3s ease-in-out;
`;

export const Container = styled.div`
  width: 90%;
  height: 90%;
  background-color: ${colors.darkBlue};
  clip-path: circle();
  display: flex;
  justify-content: center;
  align-items: center;

  span {
    font-size: 1.3rem;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const Initials = styled.div`
  color: white;
  text-transform: uppercase;
  font-weight: bold;
`;