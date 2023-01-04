import styled from "styled-components";
type ContainerProps = {
  pointerEvents?: boolean;
}

export const Container = styled.img<ContainerProps>`
  width: 100%;
  height: 100%;
  object-fit: contain;
  cursor: pointer;
  transition: all .3s ease-in-out;
  pointer-events: ${({pointerEvents}) => !pointerEvents && "none"};
  user-select: ${({pointerEvents}) => !pointerEvents && "none"};
  -webkit-user-drag: ${({pointerEvents}) => !pointerEvents && "none"};
  
  &:hover{
    transform: scale(1.02);
    opacity: 0.8;
  }
`;