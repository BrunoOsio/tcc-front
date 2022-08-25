import styled from "styled-components";
import { colors, sizes } from "../../shared/globalStyles/globalValues";

export const Container = styled.main`
  display: flex;
  flex-direction: row;
  margin-top: ${sizes.navbar};
  margin-left: ${sizes.navbar};
  overflow: auto;
  margin-right: 50px;
  height: calc(100vh - ${sizes.navbar});
  max-height: 1200px;

  @media (max-width: 400px){
    margin: 0px 10px;
    margin-top: ${sizes.navbarMobile};
    height: calc(100vh - ${sizes.navbarMobile});
  }

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