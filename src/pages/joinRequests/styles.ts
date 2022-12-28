import styled from "styled-components";
import { colors } from "../../shared/globalStyles/globalValues";

export const Container = styled.div`
  width: 100vw;
  max-width: 1200px;
  margin: 0 auto;
  margin-top: 30px;
  display: flex;
  flex-direction: column;
`;

export const Header = styled.div`
  width: 100%;
  display: flex;
  gap: 30px;

  .first {
    background: rgb(52,136,235);
    background: linear-gradient(90deg, rgba(52,136,235,1) 0%, rgba(96,129,255,1) 100%);
  }

  .second {
    background: rgb(96,129,255);
    background: linear-gradient(90deg, rgba(96,129,255,1) 0%, rgba(52,136,235,1) 100%);
  }
`;

export const HeaderButton = styled.button`
  width: 100%;
  font-size: 1.3rem;
  padding: 20px 0px;
  border-radius: 15px;
  border: none;
  outline: none;
  color: white;
  cursor: pointer;
  transition: all .3s ease-in-out;

  &:hover {
    transform: scale(1.01);
    opacity: .9;
  }
`;

export const Divider = styled.div`
  margin: 20px 0px;
  width: 100%;
  height: 3px;
  background-color: ${colors.lightGreyAlmostTransparent};
`;

export const Title = styled.h1`
  font-size: 1.5rem;
  color: ${colors.darkGreyText};
`;

export const Members = styled.div`
margin-top: 20px;
  display: flex;
  flex-direction: column;
  gap: 15px;
`;