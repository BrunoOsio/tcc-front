import styled from "styled-components";
import { colors, sizes } from "../../shared/globalStyles/globalValues";

export const Container = styled.main`
  display: flex;
  flex-direction: row;
  margin-top: ${sizes.navbar};
  margin-left: ${sizes.navbar};
  overflow-x: scroll;
  margin-right: 50px;

  ::-webkit-scrollbar {
    width: 15px;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    background: ${colors.lightGreyBackgroundAddButton};
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: ${colors.greyScrollbar};
    border-radius: 999px;
  }

  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: ${colors.greyScrollbarHover};
    cursor: pointer;
  }
  
`;