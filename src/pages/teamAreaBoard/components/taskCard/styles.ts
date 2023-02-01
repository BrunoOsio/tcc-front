import styled from "styled-components";
import { colors, sizes } from "../../../../shared/globalStyles/globalValues";

type MemberPhotoProps = {
  amount: number;
};

type LimitDateLabelProps = {
  color: string;
  isDone: boolean;
}

export const dateLabelColors = {
  normal: `${colors.lightBlueDarker}`,
  warning: "#FFBF80",
  late: `rgba(255, 147, 147, 1)`,
  done: `rgba(167, 210, 186, 1)`
}

export const Container = styled.article`
  padding: 12px 12px;
  height: auto;
  min-height: 70px;
  background-color: ${colors.lightBlue};
  cursor: grab;
  user-select: none;
  display: flex;
  margin-bottom: 10px;
  word-break: break-all;
  border: 4px solid ${colors.white};
  border-radius: 12px;

  &:active {
    cursor: grabbing;
  }

  &:hover {
    background-color: ${colors.purpleBlue};
  }
`;

export const Informations = styled.div`
  background-color: inherit;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  gap: 10px;
`;

export const Title = styled.span`
  display: inline;
  font-size: 0.8rem;
  max-width: 100%;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

const isDarkFont = (color: string): boolean => false;

export const LimitAt = styled.div<LimitDateLabelProps>`
  background-color: ${({ color }) => color};
  color: ${({color}) => isDarkFont(color) ? colors.white : colors.darkGreyText};
  width: 80px;
  display: flex;
  font-size: 0.8rem;
  color: ${colors.darkGreyText};
  align-items: center;
  align-content: center;
  justify-content: center;
  padding: 3px 5px;
  border-radius: 5px;

  span {
    position: relative;
    top: 1px;
  }
`;


export const LimitDateLabel = styled.small`
  padding: 3px 5px 3px;
  border-radius: 3px;
  font-weight: 600;
`;

export const Members = styled.div`
  background-color: inherit;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  width: 20%;
`;

export const EditContainer = styled.div`
  display: flex;
  align-content: flex-end;
  align-items: center;
  justify-content: flex-end;
  width: 20%;

  span {
    padding: 5px;
    background-color: rgba(255, 255, 255, 0.3);
    color: ${colors.darkGreyText};
    display: flex;
    justify-content: center;
    align-items: center;
    align-content: center;
    border-radius: 5px;
    cursor: pointer;
    transition: all .3s ease-in-out;

    &:hover {
      background-color: rgba(255, 255, 255, 0.8);;
    }
  }
`;

export const MemberPhoto = styled.div<MemberPhotoProps>`
  background-color: ${colors.white};
  border: 1px solid black;
  border-radius: 999px;
  padding: 0px 5px;
  position: relative;
  font-size: 0.8rem;
  top: ${({ amount }) => -(amount * 7) + "px"};

  &:first-child {
    top: 0px;
  }
`;
