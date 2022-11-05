import styled from "styled-components";
import { sizes } from "../../shared/globalStyles/globalValues";

type AreasProps = {
  listSize: number;
}
export const Container = styled.div`
  width: 80vw;
  margin: 0 auto;
  margin-top: ${sizes.navbar};
  height: calc(100vh - ${sizes.navbar});
  max-height: 1200px;
`;

export const Areas = styled.div<AreasProps>`
  display: grid;
  gap: ${({listSize}) => listSize >= 2 ? "30px" : "0px"};
  grid-template-columns: repeat(4, auto);
  justify-content: center;
`;