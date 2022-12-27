import styled from "styled-components";
import { appGradient, sizes } from "../../globalStyles/globalValues";

export const Container = styled.div`
  width: 100%;
  height: ${sizes.navbar};
  background: ${appGradient};
  display: flex;
  position: relative;
  justify-content: space-between;
  align-items: center;
  align-content: center;
  padding-right: 12px;
`;

export const LogoContainer = styled.div`
  width: 120px;
  display: flex;
  align-items: center;
  align-content: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;