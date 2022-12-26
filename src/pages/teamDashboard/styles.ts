import styled from "styled-components";

type AreasProps = {
  listSize: number;
}
export const Container = styled.div`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;

export const Areas = styled.div<AreasProps>`
  display: grid;
  margin: 0 auto;
  column-gap: 10px;
  grid-template-columns: repeat(6, auto);
  justify-content: center;
  margin-bottom: 30px;
  padding: 50px;
`;

export const TeamInformationsGroup = styled.div`
  width: 100vw;
  height: 100px;
  display: flex;
  justify-content: space-between;
  margin-bottom: 40px;
  background: rgb(46,127,222);
  background: linear-gradient(90deg, rgba(46,127,222,1) 0%, rgba(53,96,210,1) 100%);
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

export const LabelGroup = styled.div`
  display: flex;
  justify-content: row;
  align-items: center;
  align-content: center;
  padding: 10px;
  cursor: pointer;
  transition: all .2s ease-in-out;
  color: white;
  background-color: rgba(255, 255, 255, 0.05);
  border-radius: 10px 10px 10px 10px;
  gap: 3px;
  margin-left: 10px;

  &:hover {
    background-color: rgba(255, 255, 255, 0.15);
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
  background: rgb(46,127,222);
  background: linear-gradient(90deg, rgba(46,127,222,1) 0%, rgba(53,96,210,1) 100%);
  width: calc(100% - 80px);
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
  background-color: rgba(255, 255, 255, 0.05);
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
    background-color: rgba(255, 255, 255, 0.15);

  }
`;

export const ButtonGroupPlaceholder = styled(ButtonGroup)`
`;