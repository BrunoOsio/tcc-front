import { Border, Container } from "./styles";

type IconBlankProps = {
  size: number
}

export const IconBlank: React.FC<IconBlankProps> = ({size}) => {
  return (
    <Border size={size}>
      <Container>
      </Container>
    </Border>
  );
}