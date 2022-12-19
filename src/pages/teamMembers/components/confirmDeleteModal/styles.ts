import styled from "styled-components";
import { colors } from "../../../../shared/globalStyles/globalValues";

export const Container = styled.div`
  background-color: ${colors.lightGreyBackgroundColumn};
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  border-radius: 20px;
  padding: 40px;
  justify-content: space-between;
  gap: 50px;
`;

export const Title = styled.h1`
  font-size: 1.3rem;
  font-weight: normal;
`;

export const ButtonGroup = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
`;

export const Button = styled.button`
  font-size: 1.2rem;
  font-weight: bold;
  padding: 20px 30px;
  width: 49%;
  border: 3px solid black;
  outline: none;
  cursor: pointer;
  border-radius: 10px;
  transition: all .2s ease-in-out;

  &:hover {
    transform: scale(1.01);
  }
`;

export const BackButton = styled(Button)`
`;

export const ConfirmButton = styled(Button)`
  border-color: ${colors.redSalmon};
  color: ${colors.redSalmon};

  &:hover {
    color: ${colors.white};
    background-color: ${colors.redSalmon};
  }
`;