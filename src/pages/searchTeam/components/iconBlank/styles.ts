import styled from "styled-components";
import { colors } from "../../../../shared/globalStyles/globalValues";

export const Border = styled.div`
  width: 90px;
  height: 90px;
  clip-path: circle();
  background-color: ${colors.lightGreyBackgroundAddButton};
`;

export const Container = styled.div`
  width: 90%;
  height: 90%;
  background-color: ${colors.lightGreyBackgroundAddButton};
  clip-path: circle();
  display: flex;
  justify-content: center;
  align-items: center;

  span {
    font-size: 1.3rem;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;