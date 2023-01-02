import styled from "styled-components";
import { colors } from "../../globalStyles/globalValues";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-content: center;
  padding: 160px;
  color: ${colors.greyLighter};
  .icon {
    font-size: 1.6rem;
  }
`;