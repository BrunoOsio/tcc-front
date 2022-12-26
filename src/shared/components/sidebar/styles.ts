import styled from "styled-components";
import { Link } from 'react-router-dom';
import { colors } from "../../globalStyles/globalValues";
import { PositionCoordinates } from "./types/PositionCoordinates";

type OpenButtonProps = {
  size?: number
  position: PositionCoordinates
}

export const Nav = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  height: 0rem;
  position: relative;
  background: transparent;
`;

export const SidebarNav = styled.div<{ sidebar: boolean }>`
  width: 380px;
  height: 100vh;
  background-color: #0B347C;
  position: fixed;
  top: 0;
  left: ${({ sidebar }) => (sidebar ? '0' : '-100%')};
  transition: 0.2s ;
  z-index: 999;
  overflow-y: scroll;

  ::-webkit-scrollbar {
    width: 12px;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    border-radius: 12px;
    background-color: #0B347C;
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: rgba(255, 255, 255, 0.1);
    border-radius: 999px;
  }

  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: rgba(255, 255, 255, 0.2);
  }
`;

export const OpenButton = styled(Link)<OpenButtonProps>`
  font-size: 2rem;
  font-size: ${({size}) => `${size}px`};
  position: relative;
  top: ${({position}) => position.top};
  left: ${({position}) => position.left};
`;

export const CloseButton = styled(Link)`
  font-size: 1.3rem;
  display: flex;
  align-items: center;
  align-content: center;
  clip-path: circle();
  padding: 3px;
  transition: all .2s ease-in-out;

  &:hover {
    background: ${colors.darkBlue};
  }
`;

export const NavIcon = styled(Link)`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  height: 5rem;
  font-size: 2rem;
  margin-left: 2rem;
`;

export const Header = styled.div`
  gap: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-content: center;
  width: 60%;
  margin: 0 auto;
  margin-bottom: 30px; 

  span {
    position: absolute;
    top: 12px;
    left: 16px;
    color: tomato;
    display: flex;
    align-items: center;
    align-content: center;
    font-size: 1.2rem;
    padding: 5px;
    background-color: transparent;
    border-radius: 5px;
    cursor: pointer;

    &:hover {
      background-color: #1F4689;
    }
  }
`;

export const SidebarWrap = styled.div`
  padding-top: 40px;
  display: flex;
  flex-direction: column;
`;

export const Divider = styled.div`
  width: 70%;
  margin-left: 40px;
  height: 2px;
  background: rgba(255, 255, 255, 0.1);
`;