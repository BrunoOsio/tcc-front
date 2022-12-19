import styled from "styled-components";
import { colors } from "../../../../shared/globalStyles/globalValues";

export const Container = styled.div`
  width: 100%;
  background-color: ${colors.lightGreyBackgroundColumn};
  padding: 10px;
  border-radius: 15px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  transition: all .3s ease-in-out;

  &:hover {
    box-shadow: 0px 3px 3px -1px rgba(150,150,150,0.5);
    transform: translateY(-2px);

    .icon {
      color: ${colors.greyBorderAddButton};
    }
  }
`;

export const LeftInformations = styled.div`
  display: flex;
  flex-direction: row;
`;

export const UserInformations = styled.div`
  margin-left: 10px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
`;

export const Name = styled.span`
  font-size: 1.4rem;
`;

export const Email = styled.small``;

export const RightInformations = styled.div`
  display: flex;
  align-items: center;
  align-content: center;

  span {
    display: flex;
    align-items: center;
    align-content: center;
    font-size: 1.4rem;
    padding: 5px;
    margin-right: 15px;
    cursor: pointer;
    border-radius: 8px;
    color: transparent;
    transition: all .3s ease-in-out;
  }

  &:hover {
    .icon {
      color: white;
    }

    span {
      background-color: ${colors.redSalmon};
    }
  }
`;