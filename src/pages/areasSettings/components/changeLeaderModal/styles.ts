import styled from "styled-components";
import { colors } from "../../../../shared/globalStyles/globalValues";

type MemberProps = {
  isSelected: boolean;
} 

export const Container = styled.div`
  background-color: ${colors.lightGreyBackgroundColumn};
  max-height: 90vh;
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

export const Members = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
  gap: 20px;
`;

export const Member = styled.span<MemberProps>`
  width: 100%;
  padding: 30px;
  background-color: transparent;
  background-color: ${({isSelected}) => isSelected && `${colors.greyBorderAddButton}`};
  color: ${colors.darkGreyText};
  color: ${({isSelected}) => isSelected && `${colors.white}`};
  transition: all .3s ease-in-out;
  cursor: pointer;
  border-radius: 10px 0px 0px 10px;

  &:hover {
    background-color: ${colors.lightGreyBackgroundAddButton};
    background-color: ${({isSelected}) => isSelected && `${colors.greyBorderAddButton}`};
  }
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
  border-color: ${colors.blue};
  color: ${colors.blue};

  &:hover {
    color: ${colors.white};
    background-color: ${colors.blue};
  }
`;