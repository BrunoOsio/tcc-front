import styled from "styled-components";
import { colors } from "../../../../shared/globalStyles/globalValues";

type InputProps = {
  isError?: boolean | "" |undefined;
}

type ButtonProps = {
  isEnableSend: boolean;
}

export const Container = styled.div`
  background-color: ${colors.white};
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
`;

export const Form = styled(Container)`
  border-radius: 7px;
  box-shadow: 0 0 7px ${colors.lightGreyBackgroundColumn};
  padding: 60px;
  width: 550px;
  max-height: 90vh;
  overflow-y: auto;
  font-size: 26px;
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

export const ExitButton = styled.div`
  transition: all .3s ease-in-out;
  display: flex;
  align-items: center;
  align-content: center;
  clip-path: circle();
  padding: 5px;
  &:hover {
    cursor: pointer;
    background-color: ${colors.lightGreyBackgroundAddButton};
  }
`;

export const FormGroup = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const Label = styled.label`
  font-size: 1rem;
  font-weight: lighter;
  margin-bottom: 3px;
  color: ${colors.darkGreyText};
`;

export const Input = styled.input<InputProps>`
  font-size: 1rem;
  width: 100%;
  color: ${colors.darkGreyText};
  padding: 6px 10px;
  border: none;
  outline: none;
  border-bottom: 3px solid ${colors.lightGreyBackgroundAddButton};
  border-bottom: ${({isError}) => isError && "3px solid #FF5757"};
  transition: all .2s ease-in-out;
  &:focus {
    border-bottom: 3px solid ${colors.blue};
  }
`;

export const TextArea = styled.textarea<InputProps>`
  outline: none;
  background: transparent;
  border: 3px solid ${colors.lightGreyBackgroundAddButton};
  border: ${({isError}) => isError && "3px solid #FF5757"};
  color: ${colors.greyScrollbarHover};
  padding: 10px 20px;
  margin-top: 5px;
  font-size: 1rem;
  resize: vertical;
  border-radius: 10px;

  &:focus {
    border: 3px solid ${colors.blue};
  }
`;

export const DateTimeFormGroup = styled(FormGroup)`
  flex-direction: row;
  justify-content: space-between;
  margin-top: 10px;
`;

export const Error = styled.small`
  width: 100%;
  font-size: 0.7rem;
  color: #FF5757;
  background-color: #F9C2C2;
  padding: 3px 5px;
  margin-top: 4px;
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

export const Button = styled.button<ButtonProps>`
  background: transparent;
  border: 4px solid ${colors.blue};
  border-color: ${({isEnableSend}) => !isEnableSend && `${colors.lightGreyBackgroundAddButton}`};
  color: ${colors.blue};
  color: ${({isEnableSend}) => !isEnableSend && `${colors.lightGreyBackgroundAddButton}`};
  width: 100%;
  font-size: 1rem;
  padding: 10px 20px;
  border-radius: 10px;
  transition: .2s all ease-in-out;
  font-weight: bold;
  margin-top: 15px;
  display: flex;
  align-items: center;
  align-content: center;
  justify-content: center;
  
  span {
    font-size: 1.2rem;
    display: flex;
    align-items: center;
    align-content: center;
    transition: .2s all ease-in-out;
  }

  &:hover {
    cursor: pointer;
    cursor: ${({isEnableSend}) => !isEnableSend && `not-allowed`};
    background: ${colors.blue};
    background: ${({isEnableSend}) => !isEnableSend && "transparent"};
    color: ${colors.lightGreyBackgroundColumn};
    color: ${({isEnableSend}) => !isEnableSend && `${colors.lightGreyBackgroundAddButton}`};
    border-color: ${({isEnableSend}) => !isEnableSend && `${colors.lightGreyBackgroundAddButton}`};

    span {
      transform: scale(1.4);
    }
  }
`;

export const Header = styled.h1`
  color: ${colors.blue};
  font-size: 35px;
  margin: 5px 0 10px;
  text-align: center;
`;