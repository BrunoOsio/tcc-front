import styled from "styled-components";

export const Container = styled.div`
  width: 240px;
  margin: 0 auto;
  border: 3px solid black;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 20px;
`;

export const MainInformationGroup = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-content: center;
`;

export const Name = styled.span`
  margin-top: 10px;
  margin-bottom: 10px;
  font-size: 1.1rem;
`;

export const LeaderGroup = styled.span`
  display: flex;
  align-items: center;
  align-content: center;

  span {
    display: flex;
    align-items: center;
    align-content: center;
    margin-right: 10px;
  }
`;

export const Leader = styled.span`
  font-size: 0.7rem;
`;

export const Modality = styled.span`
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