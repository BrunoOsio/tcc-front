import { Border, Container } from "./styles";

type TeamPhotoBlankProps = {
  size: number
}

export const TeamPhotoBlank: React.FC<TeamPhotoBlankProps> = ({size}) => {
  return (
    <Border size={size}>
      <Container>
      </Container>
    </Border>
  );
}