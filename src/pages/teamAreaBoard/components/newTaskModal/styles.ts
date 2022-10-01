import styled from "styled-components";
import { colors } from "../../../../shared/globalStyles/globalValues";

export const Container = styled.div`
  background-color: ${colors.lightGreyBackgroundColumn};
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
`;

export const DesktopContainer = styled(Container)`
  border-radius: 7px;
  box-shadow: 0 0 7px ${colors.lightGreyBackgroundColumn};
  padding: 60px;
  width: 550px;
  font-size: 26px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const Label = styled.label`
  width: 118px;
  box-sizing: border-box;
  font-size: 0.8rem;
  font-weight: bold;
  margin-left: 20px;
  color: ${colors.greyScrollbarHover};
  z-index: 1;
  position: relative;
  top: 15px;
  background-color: ${colors.lightGreyBackgroundColumn};
`;

export const Input = styled.input`
  outline: none;
  background: transparent;
  border: 2px solid ${colors.greyScrollbarHover};
  color: ${colors.greyScrollbarHover};
  padding: 10px 20px;
  margin-top: 5px;
  font-size: 1rem;
  border-radius: 5px;
`;

export const Button = styled.button`
  background: transparent;
  border: 4px solid ${colors.blue};
  color: ${colors.blue};
  width: 100%;
  font-size: 1rem;
  padding: 10px 20px;
  border-radius: 10px;
  transition: .2s all ease-in-out;
  font-weight: bold;
  margin-top: 15px;

  &:hover {
    cursor: pointer;
    background: ${colors.blue};
    color: ${colors.lightGreyBackgroundColumn};
  }
`;

export const Header = styled.h1`
  color: ${colors.blue};
  font-size: 35px;
  margin: 5px 0 10px;
  text-align: center;
`;