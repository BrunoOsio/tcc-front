import styled from "styled-components";

export const Container = styled.div`
  background-color: black;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
`;

export const DesktopContainer = styled(Container)`
  border-radius: 7px;
  box-shadow: 0 0 32px rgb(0, 0, 0, 0.5);
  padding: 40px;
  width: 450px;
  font-size: 26px;
`;

export const Header = styled.h1`
  color: white;
  font-size: 35px;
  margin: 5px 0 10px;
  text-align: center;
`;