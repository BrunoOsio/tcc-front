import styled from "styled-components";
import { colors, sizes } from "../../../../shared/globalStyles/globalValues";

type ContainerProps = {
  isDone: boolean;
};

export const Container = styled.section<ContainerProps>`
  background-color: ${colors.lightGreyBackgroundColumn};

  max-height: calc(100vh - ${sizes.navbar} - 25px);
  display: flex;
  flex-direction: column;

  padding: 0px 0px;

  margin-right: 10px;
  &:last-child {
    margin-right: 0px;
  }

  opacity: ${({ isDone }) => isDone && "0.5"};
`;

export const Header = styled.article`
  width: 100%;
  background-color: ${colors.blue};
  text-align: center;
  font-size: 1.3rem;
  padding: 10px 0px;
  color: white;
  text-transform: capitalize;
  border-radius: 10px 10px 0px 0px;
`;

export const ColumnName = styled.span``;

export const Scrollable = styled.div`
  margin-top: 10px;

  overflow-y: scroll;

  ::-webkit-scrollbar {
    width: 5px;
    height: 30px;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    background: inherit;
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: ${colors.greyScrollbar};
    border-radius: 999px;
  }

  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: ${colors.greyScrollbarHover};
  }
`;

export const Body = styled.article`
  padding: 12px;
  padding-top: 0px;
`;

export const AddTaskButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 60px;
  font-size: 2rem;
  font-weight: 800;

  border-style: dashed;
  border-width: 2px;
  border-color: ${colors.greyBorderAddButton};
  border-radius: 10px;

  background-color: ${colors.lightGreyBackgroundAddButton};
  color: ${colors.white};

  transition: 2s all ease-in-out;

  span {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  &:hover {
    cursor: pointer;
    transition: 2s all ease-in-out;

    span {
      transform: scale(1.1);
    }
  }
`;

export const Button = styled.button`
  padding: 0px 20px;
`;

export const TasksList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  min-height: 50px;
  width: ${sizes.column};
  margin-top: 10px;
`;
