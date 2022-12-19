import { ImBlocked } from "react-icons/im"
import { useNavigate } from "react-router-dom";
import routes from "../../routes/routes";
import { Button, Container, Label, Main } from "./styles";

export const ProhibitedPage = () => {
  const navigate = useNavigate();

  const goToTeamSelector = () => {
    navigate(routes.mainMenu());
  }

  return (
    <Container>
      <Main>
        <span><ImBlocked/></span>
        <Label>Acesso Proibido</Label>
        <Button onClick={goToTeamSelector}>Voltar ao início</Button>
      </Main>
    </Container>
  );
}