import styled from "styled-components";
import { colors } from "../../globalStyles/globalValues";

export type BorderProps = {
  size: number
  isDropdown?: boolean;
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

const calculateSize = (size: number) => {
  return `${size / 60}rem`;
}

export const Initials = styled.div<BorderProps>`
  color: white;
  text-transform: uppercase;
  font-size: ${({size}) => size && `${calculateSize(size)}`};
  font-weight: bold;
  pointer-events: none;
`;