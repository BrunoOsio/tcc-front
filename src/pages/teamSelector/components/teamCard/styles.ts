import styled from "styled-components";
import { colors } from "../../../../shared/globalStyles/globalValues";

type RightTopProps = {
  isMemberLeadsArea: boolean;
}

export const Container = styled.article`
  width: 100%;
  background-color: ${colors.lightBlueAlmostTransparent};
  border: 3px solid ${colors.lightBlue};
  padding: 10px;
  border-radius: 15px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  transition: all .3s ease-in-out;
  cursor: pointer;

  &:hover {
    box-shadow: 0px 3px 3px -1px ${colors.purpleBlue};
    transform: translateY(-2px);
  }
`;

export const LeftInformations = styled.div`
  display: flex;
  flex-direction: row;
  width: 50%;
`;

export const RightInformations = styled(LeftInformations)`
  display: flex;
  width: 50%;
  flex-direction: column;
  align-content: flex-end;
  align-items: flex-end;
`;

export const RightTop = styled.div<RightTopProps>`
  padding: 10px;
  height: 100%;
  height: ${({isMemberLeadsArea}) => !isMemberLeadsArea && "auto"};
  max-width: 200px;
  margin: 10px;
  border: 3px solid ${colors.lightBlue};
  display: flex;
  border-radius: 10px;
  color: ${colors.greyDarker};
  font-size: 0.8rem;
  flex-direction: column;
  justify-content: space-between;
`;

export const LeaderStats = styled.div<RightTopProps>`
  display: block;
  display: ${({isMemberLeadsArea}) => !isMemberLeadsArea && "none"};
`;

export const AreasLeaderedGroup = styled.div`
  display: flex;
  flex-direction: row;
  align-content: center;
  align-items: center;
  gap: 5px;
  
  span {
    display: flex;
    flex-direction: row;
    align-content: center;
    align-items: center;
  }
`;

export const AreasLeadered = styled.span`

`;

export const TodoTasksGroup = styled(AreasLeaderedGroup)`
`;

export const TodoTasks = styled.span`
`;

export const Photo = styled.div`
  background-color: aqua;
  width: 100%;
  height: 100%;
  clip-path: circle();
`;


export const Name = styled.span`
  font-size: 1rem;
  position: relative;
  top: -10px;
  text-align: center;
`;

export const TeamNameAndModalityGroup = styled.div`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  margin-left: 20px;
  align-items: flex-start;
  align-content: center;
  justify-content: center;
`;

export const Modality = styled.small`
  font-size: 0.8rem;
  color: ${colors.greyDarker};
`;

export const LeaderGroup = styled.div`
  display: flex;
  color: ${colors.greyDarker};
  gap: 5px;

  span {
    font-size: 0.8rem;
    margin-right: 5px;
    width: 100%;
    max-width: 100%;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }

  section {
    position: relative;
    top: 2px;
  }
`;

export const TeamName = styled.span`
  font-size: 1.2rem;
`;