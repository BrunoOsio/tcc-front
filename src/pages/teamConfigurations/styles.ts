import styled from "styled-components";
import { appGradient, colors, lighterAppGradient } from "../../shared/globalStyles/globalValues";

export const Container = styled.div`
  width: 100vw;
  max-width: 1200px;
  margin: 0 auto;
  margin-top: 30px;
  display: flex;
  flex-direction: column;
`;

export const Footer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, auto);
  gap: 30px;

  .first {
    background: ${colors.lightGreyFullTransparent};
    color: ${colors.greyDarker};
  }

  .second {
    background: ${colors.lightGreyFullTransparent};
    color: ${colors.greyDarker};
  }
`;

export const FooterButton = styled.div`
  justify-content: center;
  gap: 10px;
  display: flex;
  text-align: center;
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

export const Border = styled.div`
  width: 27px;
  clip-path: circle();
  background-color: ${colors.white};
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all .3s ease-in-out;
`;

export const NewRequestsNumber = styled.div`
  width: 85%;
  height: 85%;
  background-color: ${colors.redSalmon};
  clip-path: circle();
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 0.9rem;

  span {
    position: relative;
    left: -0.5px;
    top: 1px;
    color: white;
    display: flex;
    align-items: center;
    align-content: center;
    justify-content: center;
  }
`;

export const Divider = styled.div`
  margin: 20px 0px;
  width: 100%;
  height: 3px;
  background-color: ${colors.lightGreyAlmostTransparent};
`;

export const TitleContainer = styled.div`
  background: ${lighterAppGradient};
  padding: 30px;
  border-radius: 15px;
`;

export const Title = styled.h1`
  font-size: 1.5rem;
  color: ${colors.white};
`;

export const Main = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  gap: 15px;
`;