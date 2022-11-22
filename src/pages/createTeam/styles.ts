import styled from "styled-components";
import { colors, sizes } from "../../shared/globalStyles/globalValues";

type InputProps = {
  isError?: boolean | "" | undefined;
};

export const Container = styled.div`
  width: 80%;
  max-width: 700px;
  margin: 0 auto;
  margin-top: calc(${sizes.navbar} + 10px) ;
`;

export const Title = styled.h1`
  font-size: 1.3rem;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  row-gap: 30px;
  width: 100%;
  background-color: tomato;
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
  color: ${colors.white};
`;

export const Input = styled.input<InputProps>`
  font-size: 1rem;
  width: 100%;
  color: ${colors.darkGreyText};
  padding: 6px 10px;
  border-radius: 10px;
  outline: none;
  border: 3px solid transparent;
  border: ${({ isError }) => isError && "3px solid #FF5757"};
  transition: all 0.2s ease-in-out;

  &:focus {
    border: 3px solid #5286d5;
  }
`;

export const Select = styled.select<InputProps>`
  font-size: 1rem;
  width: 100%;
  color: ${colors.darkGreyText};
  padding: 6px 10px;
  border-radius: 10px;
  outline: none;
  border: 3px solid transparent;
  border: ${({ isError }) => isError && "3px solid #FF5757"};
  transition: all 0.2s ease-in-out;

  &:focus {
    border: 3px solid #5286d5;
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
  border: 3.5px solid white;
  background-color: transparent;
  border-radius: 10px;
  outline: none;
  transition: all 0.4s ease-in-out;

  span {
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    transition: all 0.4s ease-in-out;
  }

  &:hover {
    background-color: #5286d5;
    border-color: #5286d5;
    cursor: pointer;
    span {
      transform: scale(1.4);
    }
  }
`;
