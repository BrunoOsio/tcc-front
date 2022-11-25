import styled from "styled-components";

type LoaderProps = {
  size: number;
}

export const Container = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  user-select: none;
`;

export const Loader = styled.img<LoaderProps>`
  width: ${({size}) => `${size}px`};
  pointer-events: none;
`;