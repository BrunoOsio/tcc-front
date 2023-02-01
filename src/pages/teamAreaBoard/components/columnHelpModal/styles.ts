import styled from "styled-components";
import { colors } from "../../../../shared/globalStyles/globalValues";

export const Container = styled.div`
  width: 800px;
  padding: 30px;
  background-color: ${colors.white};
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  text-align: justify;
  row-gap: 15px;
`;

export const Text = styled.p`
`;

export const ListContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 10px 0px;
`;

export const List = styled.span`
  padding: 10px;
  background-color: ${colors.blue};
  color: ${colors.white};
  border-radius: 10px;
  width: 32%;
  gap: 30px;
  text-align: center;
`;

export const OptionalList = styled.span`
  padding: 10px;
  background-color: ${colors.purpleDarkBlue};
  color: ${colors.white};
  border-radius: 10px;
  width: 32%;
  gap: 30px;
  text-align: center;
`;

export const CloseButton = styled.button`
  outline: none;
  border: none;
  padding: 20px;
  color: ${colors.grey};
  font-weight: bold;
  border-radius: 16px;
  background-color: transparent;
  border: 3px solid ${colors.lightGreyAlmostTransparent};
  cursor: pointer;
  transition: all .3s ease-in-out;
  
  &:hover {
    filter: brightness(0.9);
  }
`;