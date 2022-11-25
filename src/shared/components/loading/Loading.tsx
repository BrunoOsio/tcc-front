import { Container, Loader } from "./styles";

type LoadingProps = {
  size: number;
}

export const Loading: React.FC<LoadingProps> = ({size}) => {
  return (
    <Container>
      <Loader src="/loading.svg" alt="Carregando..." size={size}/>
    </Container>
  );
}