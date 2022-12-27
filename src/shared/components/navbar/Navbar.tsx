import { useAppSelector } from "../../../states/app/hooks";
import { Logo } from "../logo/Logo";
import { Sidebar } from "../sidebar/Sidebar";
import { PositionCoordinates } from "../sidebar/types/PositionCoordinates";
import { UserDropdown } from "../userDropdown/UserDropdown";
import { AccountDropdown } from "./components/accountDropdown/AccountDropdown";
import { Container, LogoContainer } from "./styles";

export const Navbar = () => {
  const { value: user, isLoading: isUserLoading, isSuccess: isUserSuccess } = useAppSelector((state) => state.user);
  
  const sidebarPosition: PositionCoordinates = {
    top: "3px",
    left: "12px",
  }

  return (
    <Container>
      <Sidebar openButtonSize={30} position={sidebarPosition}/>
      <LogoContainer>
        <Logo theme={"white"}/>
      </LogoContainer>

      <AccountDropdown />

    </Container>
  );
}