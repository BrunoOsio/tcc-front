import styled from "styled-components";
import { colors } from "../../../../shared/globalStyles/globalValues";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  align-content: center;

  span {
    display: flex;
    flex-direction: row;
    align-items: center;
    align-content: center;
    color: ${colors.lightBlueDarker};
    font-size: 2.35rem;
    margin-right: 15px;
  }
`;