import { Container, Loader } from "./styles";

export const Loading = () => {
  return (
    <Container>
      <Loader src="/loading.svg" alt="Carregando..." />
    </Container>
  );
}