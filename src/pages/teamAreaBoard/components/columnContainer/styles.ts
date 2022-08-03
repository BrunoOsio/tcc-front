import styled from "styled-components";

const NAVBAR_HEIGHT = "80px";

type ContainerProps = {
  isDone: boolean;
}

export const Container = styled.section<ContainerProps>`
  background-color: greenyellow;
  
  display: flex;
  flex-direction: column;
  
  padding: 30px 10px;
  height: calc(100% - ${NAVBAR_HEIGHT});

  margin-right: 10px;
  &:last-child {
    margin-right: 0px;
  }

  border: 1px solid black;

  opacity: ${({isDone}) => isDone && "0.5"};
`;

export const Header = styled.article`
  display: flex;
  justify-content: space-between;
  margin-bottom: 30px;
`;

export const ColumnName = styled.span`
  
`;

export const Button = styled.button`
  padding: 0px 20px;
`;

export const TasksContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;