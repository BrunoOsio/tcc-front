import styled from "styled-components";
import { colors } from "../../../../shared/globalStyles/globalValues";

export const Border = styled.div`
  width: 40px;
  height: 40px;
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
  background-color: #639AE4;
  clip-path: circle();
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Initials = styled.div`
  color: white;
  text-transform: uppercase;
  font-weight: bold;
`;