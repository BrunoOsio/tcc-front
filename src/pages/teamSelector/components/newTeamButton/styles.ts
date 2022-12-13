import { Dropdown } from "antd";
import styled from "styled-components";
import { colors } from "../../../../shared/globalStyles/globalValues";

export const Container = styled.button`
  font-size: 1.1rem;
  padding: 5px 20px;
  outline:none;
  border: none;
  background: transparent;
  border: 3px solid white;
  position: relative;
  top: 12px;
  z-index: 2;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background-color: ${colors.darkBlue};
  border-radius: 10px;
  column-gap: 5px;
  transition: all .2s ease-in-out;
  cursor: pointer;

  article {
    color: white;
    transition: all .2s ease-in-out;
  }

  span {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 0.8rem;
  }
`;

export const ButtonLabel = styled.div`
  font-size: 0.8rem;
`;