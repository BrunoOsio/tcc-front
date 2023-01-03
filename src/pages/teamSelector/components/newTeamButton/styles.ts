import { Dropdown } from "antd";
import styled from "styled-components";
import { colors } from "../../../../shared/globalStyles/globalValues";

export const Container = styled.button`
  font-size: 1.2rem;
  padding: 10px 20px;
  outline:none;
  border: none;
  background: transparent;
  border: 2px solid white;
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: rgba(255, 255, 255, 0.1);
  justify-content: space-between;
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