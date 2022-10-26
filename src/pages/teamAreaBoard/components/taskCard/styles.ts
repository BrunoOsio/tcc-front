import styled from "styled-components";
import { colors, sizes } from "../../../../shared/globalStyles/globalValues";

type MemberPhotoProps = {
  amount: number;
};

type LimitDateLabelProps = {
  color: string;
}

export const dateLabelColors = {
  normal: "#AEC4FF",
  warning: "#FFBF80",
  late: "#FF9999"
}

export const Container = styled.article`
  padding: 12px 12px;
  height: ${sizes.taskHeight};
  background-color: ${colors.background};
  cursor: grab;
  user-select: none;
  display: flex;
  margin-bottom: 10px;

  border: 4px solid ${colors.white};
  border-radius: 12px;

  &:active {
    cursor: grabbing;
  }
`;

export const Informations = styled.div`
  background-color: inherit;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 80%;
`;

export const Title = styled.span`
  display: inline;
  font-size: 0.8rem;
`;

export const LimitAt = styled.div`
  background-color: inherit;
  display: flex;
  gap: 5px;
  font-size: 0.8rem;
  color: ${colors.darkGreyText};
  align-items: center;
`;

const isDarkFont = (color: string): boolean => false;

export const LimitDateLabel = styled.small<LimitDateLabelProps>`
  background-color: ${({ color }) => color};
  color: ${({color}) => isDarkFont(color) ? colors.white : colors.darkGreyText};
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
