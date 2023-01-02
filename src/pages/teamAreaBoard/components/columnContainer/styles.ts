import styled from "styled-components";
import { colors, columnGradient, responsivity, sizes } from "../../../../shared/globalStyles/globalValues";

type ContainerProps = {
  isDone: boolean;
};

type HeaderProps = {
  isHovering: boolean;
}

type TasksListProps = {
  isSmallScreenHeight: boolean;
};

export const Container = styled.section<ContainerProps>`
  background: ${columnGradient};
  width: 100% ;
  max-width: 480px;
  max-height: calc(100vh - ${sizes.navbar} - 20px);
  display: flex;
  flex-direction: column;
  border: 3px solid ${colors.lightBlue};
  border-radius: 13px 13px 0px 0px;


  padding: 0px 0px;
  margin-right: 10px;

  &:last-child {
    margin-right: 0px;
  }

  opacity: ${({ isDone }) => isDone && "0.5"};

  @media (max-width: ${responsivity.mobile}) {
    max-height: calc(100vh - ${sizes.navbarMobile});
  }
`;

export const Header = styled.article<HeaderProps>`
  width: 100%;
  background-color: ${colors.blue};
  border-radius: 10px 10px 0px 0px;
  display: flex;
  flex-direction: row;
  align-items: center;
  align-content: center;

  span {
    display: flex;
    align-items: center;
    align-content: center;
    margin-right: 10px;
    padding: 5px;
    border-radius: 5px;
    color: transparent;
    color: ${({isHovering}) => isHovering && `${colors.white}`};
    transition: all .3s ease-in-out;
    cursor: pointer;
    user-select: none;
    z-index: 0;

    &:hover {
      background-color: rgba(255, 255, 255, 0.15);
    }
  }
`;

export const Divider = styled.div`
  margin: 10px 10px;
  height: 4px;
  background-color: ${colors.lightBlueAlmostTransparent};
  border: none;
  outline: none;
`;

export const FormGroup = styled.div`
  display: flex;
  flex-direction: row;
`;

export const ColumnTitle = styled.h2`
  user-select: none;
  width: 100%;
  height: 100%;
  text-align: center;
  font-size: 1.3rem;
  padding: 10px 10px;
  background-color: transparent;
  color: ${colors.white};
  outline: none;
  border: none;

  position: relative;
  left: 15px;
`;

export const Scrollable = styled.div`
  margin-top: 10px;

  overflow: auto;

  ::-webkit-scrollbar {
    width: 5px;
    height: 30px;
  }

  ::-webkit-scrollbar-track {
    background: inherit;
  }

  ::-webkit-scrollbar-thumb {
    background: ${colors.purpleBlue};
    border-radius: 999px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: ${colors.lightBlueDarker};
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
  border-color: ${colors.white};
  border-radius: 10px;

  background-color: ${colors.lightBlue};
  color: ${colors.white};

  transition: .3s all ease-in-out;

  span {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: .3s all ease-in-out;
  }

  &:hover {
    cursor: pointer;
    transition: .3s all ease-in-out;
    border-color: ${colors.lightBlueDarker};
    span {
      transition: .3s all ease-in-out;
      color: ${colors.lightBlueDarker};
    }
  }
`;

export const Button = styled.button`
  padding: 0px 20px;
`;

export const TasksList = styled.div<TasksListProps>`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-width: ${sizes.column};
  margin: 0 auto;
  margin-top: 10px;
  min-height: 550px;
  min-height: ${({isSmallScreenHeight}) => isSmallScreenHeight && "340px"};
`;
