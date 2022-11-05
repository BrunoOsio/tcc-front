import styled from "styled-components";
import { colors, responsivity, sizes } from "../../shared/globalStyles/globalValues";

type InputProps = {
  isBlank: boolean;
}

export const Container = styled.main`
  display: flex;
  flex-direction: row;
  margin-top: ${sizes.navbar};
  margin-left: ${sizes.navbar};
  overflow: auto;
  margin-right: 50px;
  height: calc(100vh - ${sizes.navbar});
  max-height: 1200px;

  @media (max-width: ${responsivity.mobile}){
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

export const NoColumnContainer = styled.div`
  width: 100%;
  margin-right: ${sizes.navbar};
  display: flex;
  flex-direction: column;
  
`;

export const NewColumnLabel = styled.h1`
  font-size: 1.2rem;
  text-align: left;
  font-weight: 400;
  color: ${colors.darkGreyText};
`;

export const NewColumnPlaceholder = styled.div`
  height: 100%;
  min-width: ${sizes.column};
  width: 317px;
  display: flex;
  flex-direction: column;
  align-content: center;
  background-color: ${colors.lightGreyBackgroundColumn};
  margin-right: auto;
  border-radius: 10px 10px 0px 0px;
`;

export const FormGroup = styled.div`
  display: flex;
  flex-direction: row;
`;

export const Input = styled.input<InputProps>`
  width: 100%;
  font-size: 1.3rem;
  background-color: ${colors.blue};
  padding: 10px 15px;
  border-radius: 10px 10px 0px 0px;
  border-radius: ${({ isBlank }) => !isBlank && "10px 0px 0px 0px;"};
  outline: none;
  border: none;
  color: ${colors.white};

  &::selection {
    background-color: ${colors.lightGreyBackgroundAddButton};
    color: ${colors.darkGreyText};
  }

  &::placeholder {
    color: ${colors.lightGreyBackgroundAddButton};
  }
`;

export const Submit = styled.button`
  outline: none;
  font-size: 1rem;
  border: none;
  color: white;
  background-color: ${colors.blue};
  border-radius: 0px 10px 0px 0px;
  padding: 0px 20px;
  position: relative;

  &:hover {
    cursor: pointer;
  }
`;

export const PlaceholderBody = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
`;

export const NewColumnButton = styled.button`
  height: 50px;
  min-width: ${sizes.column};
  width: 317px;
  font-size: 1.4rem;
  border-radius: 5px;
  border: none;
  background-color: ${colors.lightGreyBackgroundColumn};
  transition: .3s all ease-in-out;

  &:hover {
    cursor: pointer;
    background-color: ${colors.lightGreyBackgroundAddButton}

  }

  &:hover span {
    color: ${colors.darkGreyText};
  }

  span {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: .3s all ease-in-out;
    color: ${colors.greyBorderAddButton}
  }
`;