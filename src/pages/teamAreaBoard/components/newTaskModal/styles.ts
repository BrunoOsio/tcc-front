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
  max-height: 90vh;
  overflow-y: auto;
  font-size: 26px;
  display: flex;
  flex-direction: column;
  gap: 10px;

  ::-webkit-scrollbar {
    width: 5px;
    height: 30px;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    background: inherit;
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: ${colors.greyScrollbar};
    border-radius: 999px;
  }

  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: ${colors.greyScrollbarHover};
  }
`;

export const ExitButton = styled.div`
  transition: all .3s ease-in-out;
  position: relative;
  top: -30px;
  &:hover {
    cursor: pointer;
    transform: scale(1.2);
  }
`;

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const DateTimeFormGroup = styled(FormGroup)`
  flex-direction: row;
  justify-content: space-between;
  margin-top: 10px;
`;

export const Input = styled.input`
  outline: none;
  background: transparent;
  border: none;
  border-bottom: 2px solid ${colors.greyScrollbarHover};
  color: ${colors.greyScrollbarHover};
  padding: 15px 10px 3px 10px;
  margin-top: 5px;
  font-size: 1rem;
`;

export const Label = styled.label`
  box-sizing: border-box;
  font-size: 0.8rem;
  font-weight: bold;
  margin-left: 10px;
  padding: 0 6px;
  color: ${colors.greyScrollbarHover};
  z-index: 1;
  position: relative;
  top: 15px;
  background-color: ${colors.lightGreyBackgroundColumn};
`;

export const DescriptionLabel = styled(Label)`
  width: 90px;
`;

export const TextArea = styled.textarea`
  outline: none;
  background: transparent;
  border: 2px solid ${colors.greyScrollbarHover};
  color: ${colors.greyScrollbarHover};
  padding: 10px 20px;
  margin-top: 5px;
  font-size: 1rem;
  resize: vertical;
  border-radius: 5px;
`;

export const CheckboxContainer = styled.div`
  display: flex;
  align-items: center;
  align-content: center;
`;

export const EnableLimitDate = styled.input`
  font-size:1.3rem;
  height: 27px;
  width: 27px;
`;
export const CheckboxLabel = styled.label`
  box-sizing: border-box;
  font-size: 0.8rem;
  font-weight: bold;
  margin-left: 8px;
  color: ${colors.greyScrollbarHover};
`;

export const DateTimeInput = styled.input`
  height: 30px;
  padding: 20px 10px;
  border-radius: 5px;
  outline: none;
  background-color: ${colors.blue};
  border: none;
  color: white;
  font-weight: 600;
`;

export const Placeholder = styled.div`
  height: 40px;
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