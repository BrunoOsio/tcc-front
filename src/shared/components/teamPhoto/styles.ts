import styled from "styled-components";
import { colors } from "../../globalStyles/globalValues";

export type BorderProps = {
  size: number
}

export type NameProps = {
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

export const PhotoCard = styled.img`
  width: 100%;
  height: 100%;
  max-width: 220px;
  max-height: 220px;
  object-fit: fill;
  aspect-ratio: 1/1;
`;

const calculateSize = (size: number) => {
  return `${size / 200}rem`;
}

export const Name = styled.div<NameProps>`
  color: white;
  text-transform: uppercase;
  font-weight: bold;
  text-align: center;
  font-size: ${({size}) => size && `${calculateSize(size)}`};
`;