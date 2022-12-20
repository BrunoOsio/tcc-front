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

    .changeLeaderButton {
      color: ${colors.greyScrollbarHover};
      background-color: ${colors.lightGreyBackgroundAddButton};
    }

    .icon {
      color: ${colors.greyBorderAddButton};
    }
  }
`;

export const LeftInformations = styled.div`
  display: flex;
  flex-direction: row;
`;

export const AreaInformations = styled.div`
  margin-left: 10px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
`;

export const Name = styled.span`
  color: ${colors.darkGreyText};
  font-size: 1.3rem;
`;

export const LeaderGroup = styled.div`
  color: ${colors.greyScrollbarHover};
  display: flex;
  flex-direction: row;
  align-items: center;
  align-content: center;
  font-size: 1rem;
  gap: 5px;

  span {
    display: flex;
    align-items: center;
    align-content: center;
  }
`;

export const LeaderName = styled.small`
`;

export const RightInformations = styled.div`
  display: flex;
  align-items: center;
  align-content: center;
  gap: 30px;

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
  }
`;

export const CloseIcon = styled.span`
  &:hover {
    background-color: ${colors.redSalmon};
  }
`;

export const ChangeLeaderButton = styled.button`
  color: transparent;
  background-color: transparent;
  padding: 10px;
  border-radius: 10px;
  border: none;
  outline: none;
  cursor: pointer;
  transition: all .3s ease-in-out;

  &:hover {
    opacity: 0.8;
    transform: scale(1.03);
  }
`;