import styled from "styled-components";
import { colors } from "../../../../shared/globalStyles/globalValues";

export const Container = styled.div`
  width: 240px;
  height: 290px;
  margin: 0 auto;
  border: 3.4px solid ${colors.navyBlue};
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 10px 20px;
  cursor: pointer;
  transform: all 1s ease-in-out;

  &:hover {
    box-shadow: 0px 0px 7px 0px rgba(35,78,176,0.7);
  }
`;

export const MainInformationGroup = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-content: center;
  position: relative;
  top: -55px;
`;

export const LeaderGroup = styled.span`
  display: flex;
  align-items: center;
  align-content: center;
  flex-grow: 2;

  span {
    display: flex;
    align-items: center;
    align-content: center;
    margin-right: 10px;
  }
`;

export const ColumnWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

export const ExtraInformations = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 200px;


  span {
    position: relative;
    top: -25px;
  }
`;

export const Name = styled.span`
  font-size: 1.1rem;
  text-align: center;
  position: relative;
  top: -15px;
`;


export const Modality = styled.span`
  text-align: center;
  font-weight: bold;
  color: ${colors.greyLighter};
  font-style: italic;
`;

export const Number = styled(Modality)`

`;

export const Leader = styled.span`
  font-size: 0.7rem;
`;

export const MembersGroup = styled.div`
  display: flex;
  align-items: center;
  align-content: center;
  
  span: {
    display: flex;
    justify-content: center;
    align-items: center;
    align-content: center;
  }

  margin-top: 3px;
`;

export const MembersLength = styled.span`
  font-size: 0.7rem;
  padding-left: 10px;
`;


export const EnterButtonPlaceholder = styled.button`
  font-size: 0.8rem;
  color: ${colors.white};
  margin: 0 auto;
  height: 25px;
  outline: none;
  border: none;
  cursor: pointer;
  border-radius: 8px;
`;

export const EnterButton = styled(EnterButtonPlaceholder)`
  background-color: ${colors.darkBlue};
  padding: 3px 10px;
`;

export const WaitingLabel = styled(EnterButtonPlaceholder)`
  background-color: ${colors.grey};
  padding: 3px 10px;
`;