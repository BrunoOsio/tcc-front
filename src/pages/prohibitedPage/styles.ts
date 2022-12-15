import styled from "styled-components";
import { colors } from "../../shared/globalStyles/globalValues";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  align-content: center;
`;

export const Main = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-content: center;
  gap: 10px;
`;

export const Label = styled.span`

`;

export const Button = styled.button`
  width: 100%;
  outline: none;
  border-radius: 4px;
  border: none;
  cursor: pointer;

  &:hover {
    background-color: ${colors.lightGreyBackgroundAddButton};
  }
`;