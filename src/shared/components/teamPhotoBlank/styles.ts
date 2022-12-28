import styled from "styled-components";
import { colors } from "../../globalStyles/globalValues";

type BorderProps = {
  size: number;
}
export const Border = styled.div<BorderProps>`
  width: ${({size}) => `${size}px`};
  height: ${({size}) => `${size}px`};
  clip-path: circle();
  background-color: ${colors.lightGrey};
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;
`;

export const Container = styled.div`
  width: 90%;
  height: 90%;
  background-color: ${colors.lightGrey};
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