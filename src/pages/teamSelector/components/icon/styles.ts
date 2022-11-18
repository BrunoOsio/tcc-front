import styled from "styled-components";
import { colors } from "../../../../shared/globalStyles/globalValues";

export const Border = styled.div`
  width: 70px;
  height: 70px;
  clip-path: circle();
  background-color: ${colors.white};
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all .3s ease-in-out;

  &:hover {
    cursor: pointer;
    opacity: 0.8;
    transform: scale(1.05);
  }
`;

export const Container = styled.div`
  width: 90%;
  height: 90%;
  background-color: #3579D2;
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