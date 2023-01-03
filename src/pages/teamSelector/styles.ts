import styled from "styled-components";
import { appGradient, colors } from "../../shared/globalStyles/globalValues";

type TeamsProps = {
  listSize: number
}

export const Container = styled.main`
  width: 100%;
  display: flex;
  flex-direction: column;
  background-color: ${colors.white};
  background: url("main_background.png");
`;

export const Body = styled.main`
  width: 95.5%;
  margin: 0 auto;
`; 

export const Header = styled.section`
  background: ${appGradient};
  width: 100%;
  min-height: 230px;
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

export const TitleContainer = styled.div`
  width: 100%;
  margin: 40px 0px;

  background: ${appGradient};
  padding: 30px 40px;
  border-radius: 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  align-content: center;
`;

export const Title = styled.h1`
  font-size: 1.4rem;
  color: ${colors.white};
`;

export const Teams = styled.section<TeamsProps>`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  gap: 10px;
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