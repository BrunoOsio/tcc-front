import styled from "styled-components";
import { colors } from "../../shared/globalStyles/globalValues";

type AreasProps = {
  listSize: number;
}
export const Container = styled.div`
  width: 100vw;
  margin: 0 auto;
  height: 100vh;
  max-height: 1200px;
  display: flex;
  flex-direction: column;
`;

export const Areas = styled.div<AreasProps>`
  display: grid;
  gap: ${({listSize}) => listSize >= 2 ? "30px" : "0px"};
  grid-template-columns: repeat(4, auto);
  justify-content: center;
`;

export const TeamInformationsGroup = styled.div`
  width: 100vw;
  height: 130px;
  display: flex;
  justify-content: space-between;
  margin-bottom: 40px;
  background: rgb(27,101,246);
  background: linear-gradient(180deg, rgba(27,101,246,1) 16%, rgba(51,120,255,1) 39%, rgba(93,151,255,1) 85%);
  padding: 30px;
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
  font-size: 1.4rem;
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

export const LabelGroup = styled.div`
  display: flex;
  justify-content: row;
  align-items: center;
  align-content: center;
  padding: 10px;
  cursor: pointer;
  transition: all .2s ease-in-out;
  color: white;
  border-radius: 10px 10px 10px 10px;
  gap: 3px;
  margin-left: 10px;

  &:hover {
    background-color: ${colors.navyBlue};
  }

  span {
    display: flex;
    align-items: center;
    align-content: center;
  }
`;

export const Label = styled.span`

`;

export const Header = styled.div`
  background: rgb(95,153,255);
  background: linear-gradient(180deg, rgba(95,153,255,1) 27%, rgba(140,181,255,1) 76%);
  width: 50%;
  margin: 0 auto;
  padding: 30px 30px 30px 30px;
  border-radius: 13px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  align-content: center;
`;

export const Title = styled.span`
  font-size: 1.4rem;
  color: white;
  font-weight: bold;
`;

export const ButtonGroup = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  align-content: center;
  color: white;
  padding: 10px;
  transition: all .3s ease-in-out;
  cursor: pointer;
  border-radius: 12px;

  span {
    display: flex;
    flex-direction: row;
    align-items: center;
    align-content: center;
    margin: 0px 3px;
  }

  &:hover {
    background-color: ${colors.navyBlue};
  }
`;