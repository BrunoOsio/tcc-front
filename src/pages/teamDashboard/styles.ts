import styled from "styled-components";
import { sizes } from "../../shared/globalStyles/globalValues";

export const Container = styled.div`
  width: 80vw;
  margin: 0 auto;
  margin-top: ${sizes.navbar};
  height: calc(100vh - ${sizes.navbar});
  max-height: 1200px;
`;

export const Areas = styled.div`
  display: grid;
  gap: 30px;
  grid-template-columns: repeat(4, auto);
  justify-content: center;
`;