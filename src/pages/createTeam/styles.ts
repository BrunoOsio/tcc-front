import styled from "styled-components";
import { colors, sizes } from "../../shared/globalStyles/globalValues";

type InputProps = {
  isError?: boolean | "" | undefined;
};

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  background: rgb(42,115,255);
  background: linear-gradient(43deg, rgba(42,115,255,1) 0%, rgba(126,172,255,1) 67%);
`;

export const FormContainer = styled.div`
  width: 80%;
  max-width: 750px;
  margin: 0 auto;
  padding: 50px;
  background-color: white;
  border-radius: 20px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  margin-top: 20px;
  
`;

export const Header = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: white;
  border-radius: 10px;
  padding: 25px 30px;
  background: rgb(83,142,255);
  background: linear-gradient(83deg, rgba(83,142,255,1) 0%, rgba(126,172,255,1) 67%);
`;

export const Title = styled.h1`
  font-size: 1.3rem;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  row-gap: 30px;
  margin: 30px auto 0px auto;
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
  outline: none;
  border: none;
  border-bottom: 3px solid ${colors.lightGreyBackgroundAddButton};
  border-bottom: ${({ isError }) => isError && "3px solid #FF5757"};
  transition: all 0.2s ease-in-out;


  &:focus {
    border-bottom: 3px solid #5286d5;
  }
`;

export const Select = styled.select<InputProps>`
  font-size: 1rem;
  width: 100%;
  color: ${colors.darkGreyText};
  padding: 6px 10px;
  border: none;
  border-bottom: 3px solid ${colors.lightGreyBackgroundAddButton};
  border-bottom: ${({ isError }) => isError && "3px solid #FF5757"};
  outline: none;
  transition: all 0.2s ease-in-out;

  &:focus {
    border-bottom: 3px solid #5286d5;
  }
`;


export const Error = styled.small`
  width: 100%;
  font-size: 0.7rem;
  color: #ff5757;
  background-color: #f9c2c2;
  padding: 3px 5px;
  margin-top: 4px;
  border-radius: 5px;
`;

export const Button = styled.button`
  width: 100%;
  font-size: 1rem;
  padding: 8px 30px;
  border: 3px solid ${colors.darkBlue};
  background-color: transparent;
  color: ${colors.darkBlue};
  border-radius: 10px;
  outline: none;
  transition: all 0.4s ease-in-out;

  span {
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.4s ease-in-out;
  }

  &:hover {
    background-color: #5286d5;
    border-color: #5286d5;
    cursor: pointer;
    span {
      color: white;
      transform: scale(1.4);
    }
  }
`;
