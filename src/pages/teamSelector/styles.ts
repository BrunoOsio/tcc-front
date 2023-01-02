import styled from "styled-components";
import { appGradient, colors } from "../../shared/globalStyles/globalValues";

type TeamsProps = {
  listSize: number
}

export const Container = styled.main`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: ${colors.white};
  `;

export const Header = styled.section`
  background: ${appGradient};
  width: 100%;
  height: 230px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  `;

export const UserCard = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  top: -20px;
`;

export const Name = styled.span`
  color: ${colors.white};
  margin-top: 10px;
  font-size: 1.2rem;
`;

const headerOverlayPx = "-50px";

export const Teams = styled.section<TeamsProps>`
  background-color: ${colors.lightBlue};
  border: 5px solid rgba(176,197,247,0.68);
  width: 800px;
  height: 530px;
  margin: 0 auto;
  padding: ${({listSize}) => listSize >= 5 && "100px"};
  padding-bottom: 20px;
  position: relative;
  top: ${headerOverlayPx};
  border-radius: 20px;
  overflow-y: auto;

  ::-webkit-scrollbar-track {
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
    border-top-right-radius: 20px;
    border-bottom-right-radius: 20px;
  }

  display: grid;
  grid-template-columns: repeat(2, auto);
  grid-template-columns: ${({listSize}) => listSize == 1 && "none"}; 

  grid-template-rows: ${({listSize}) => listSize > 2 && "repeat(2, 120px)"};

  justify-content: center;
  align-items: center;
  place-items: center;

  place-content: center;
  place-content: ${({listSize}) => listSize >= 5 && "inherit"};
  
  column-gap: ${({listSize}) => listSize ? "50px" : "0px"};
  row-gap: ${({listSize}) => listSize ? "100px" : "0px"};
`;

export const GridWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const ButtonLabel = styled.div`
  font-size: 0.8rem;
`;