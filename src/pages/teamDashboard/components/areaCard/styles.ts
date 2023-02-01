import styled from "styled-components";
import { colors } from "../../../../shared/globalStyles/globalValues";

type ContainerProps = {
  hoverColor: string | undefined;
}

export const Container = styled.div<ContainerProps>`
  width: 230px;
  height: 270px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border: 7px solid ${colors.blue};
  border-radius: 20px;
  padding: 30px;
  align-items: center;
  transition: all 0.4s ease-in-out;
  cursor: pointer;

  &:hover {
    transform: scale(1.03);
    border-color: ${({hoverColor}) => hoverColor && `${hoverColor}`};
    color: ${colors.white};
    background-color: ${({hoverColor}) => hoverColor && `${hoverColor}`};
    span {
      color: ${colors.white};
    }
  }
`;

export const Title = styled.span`
  color: ${colors.blue};
  font-size: 1.3rem;
  font-weight: 600;
`;

export const Specialization = styled.div`
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  align-content: center;
  transition: .2s;

  span {
    width: 100%;
    font-size: 2rem;
    display: flex;
    justify-content: center;
    align-items: center;
    align-content: center;
    color: ${colors.blue};
  }
`;