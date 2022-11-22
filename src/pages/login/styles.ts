import styled from "styled-components";
import { colors } from "../../shared/globalStyles/globalValues";

type InputProps = {
  isError?: boolean | "" |undefined;
}

export const Container = styled.main`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: row;
`;

export const LeftSide = styled.div`
  width: 37%;
  height: 100%;
  background: rgb(42,115,255);
  background: linear-gradient(180deg, rgba(42,115,255,1) 9%, rgba(126,172,255,1) 67%);  
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 0px 40px 40px 0px;
`;

export const Title = styled.h1`
  color: ${colors.white};
  font-weight: lighter;
  margin-bottom: 15px;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  row-gap: 30px;
  width: 70%;
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
  border: ${({isError}) => isError && "3px solid #FF5757"};
  transition: all .2s ease-in-out;

  &:focus {
    border: 3px solid #5286D5;
  }
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

export const Button = styled.button`
  width: 100%;
  font-size: 1rem;
  padding: 8px 30px;
  border: 3.5px solid white;
  background-color: transparent;
  border-radius: 10px;
  outline: none;
  transition: all .4s ease-in-out;

  span {
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    transition: all .4s ease-in-out;
  }

  &:hover {
    background-color: #5286D5;
    border-color: #5286D5;
    cursor: pointer;
    span {
      transform: scale(1.4)
    }
  }
`;

export const DividerContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-content: center;
  width: 70%;
  margin: 30px 0px;

`;

export const Line = styled.div`
  width: 100%;
  height: 3px;
  background-color: white;
`;

export const TextDivider = styled.span`
  position: relative;
  top: -12px;
  z-index: 1;
  background-color: rgba(126,172,255,1);
  padding: 0px 5px;
  font-weight: bolder;
  color: white;
`;

export const NotRegisteredText = styled.span`
  margin-top: -23px;
  color: white;
  width: 297px;
  text-align: center;
  padding: 5px 0px;
  border-radius: 7px;
  font-size: 0.8rem;
  font-weight: lighter;
  transition: all .3s ease-out;

  &:hover {
    cursor: pointer;
    background-color: #5286D5;
  }
`;

export const RightSide = styled.div`
  width: 60%;
`;