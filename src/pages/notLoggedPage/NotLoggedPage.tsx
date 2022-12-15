import { ImBlocked } from "react-icons/im"
import { useNavigate } from "react-router-dom";
import { Button, Container, Label, Main } from "./styles";

export const NotLoggedPage = () => {
  const navigate = useNavigate();

  const goToLogin = () => {
    navigate("/login");
  }

  return (
    <Container>
      <Main>
        <span><ImBlocked/></span>
        <Label>Você não está logado</Label>
        <Button onClick={goToLogin}>Ir para login</Button>
      </Main>
    </Container>
  );
}