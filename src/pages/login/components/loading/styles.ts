import styled from "styled-components";

export const Container = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  user-select: none;
`;

export const Loader = styled.img`
  width: 40px;
  pointer-events: none;
`;