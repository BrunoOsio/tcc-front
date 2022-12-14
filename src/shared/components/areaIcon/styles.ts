import styled from "styled-components";
import { colors } from "../../globalStyles/globalValues";

export type BorderProps = {
  size: number
  enableRoute: boolean;
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
  cursor: ${({enableRoute}) => enableRoute && "pointer"};

  &:hover {
    opacity: ${({enableRoute}) => enableRoute && "0.8"};
    transform: ${({enableRoute}) => enableRoute && "scale(1.02)"};
  }
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

export const Icon = styled.div`
  font-size: 1.4rem;
  color: white;
  display: flex;
  align-items: center;
  align-content: center;
`;