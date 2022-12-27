import styled from "styled-components";
import { appGradient, colors, responsivity, sizes } from "../../shared/globalStyles/globalValues";

type InputProps = {
  isBlank: boolean;
}

export const Container = styled.div`
  width: 100vw;
  flex-direction: column;
  background: url("/background_tasks.png");
  object-fit: contain;
`;


export const ColumnsContainer = styled.main`
  display: flex;
  flex-direction: row;
  margin-top: ${sizes.navbar};
  margin-left: calc(${sizes.navbar} + 100px);
  overflow: auto;
  margin-right: 50px;
  height: calc(100vh - 200px);
  max-height: 1200px;

  @media (max-width: ${responsivity.mobile}){
    margin: 0px 10px;
    margin-top: ${sizes.navbarMobile};
    height: calc(100vh - ${sizes.navbarMobile});
  }
`;

export const TeamInformationsGroup = styled.div`
  width: 100vw;
  height: 100px;
  display: flex;
  justify-content: space-between;
  margin-bottom: 40px;
  background: ${appGradient};
  padding-left: 12px;
`;

export const LeftInformations = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  align-content: center;
`;

export const NameAndLeaderGroup = styled.div`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  margin-left: 20px;
`;

export const Name = styled.div`
  font-size: 1.2rem;
  color: white;
`;

export const LeaderGroup = styled.div`
  display: flex;
  color: #E4E4E4;

  span {
    display: flex;
    align-items: center;
    align-content: center;
    font-size: 0.8rem;
    margin-right: 5px;
  }
`;

export const Leader = styled.span`
  font-size: 0.8rem;
`;

export const RightInformations = styled.div`
  max-width: 700px;
  height: 70%;
  margin: auto 20px;
  display: flex;
  align-items: center;
  align-content: center;
  gap: 5px;

  .icon {
    display: flex;
    align-items: center;
    align-content: center;
    color: white;
    margin-left: 0px;
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