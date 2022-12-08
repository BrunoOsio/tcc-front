import { Logo } from "../logo/Logo";
import { Sidebar } from "../sidebar/Sidebar";
import { PositionCoordinates } from "../sidebar/types/PositionCoordinates";
import { Container, LogoContainer } from "./styles";

export const Navbar = () => {
  const sidebarPosition: PositionCoordinates = {
    top: "28px",
    left: "12px",
  }

  return (
    <Container>
      <Sidebar openButtonSize={30} position={sidebarPosition}/>
      <LogoContainer>
        <Logo theme={"white"}/>
      </LogoContainer>

    </Container>
  );
}