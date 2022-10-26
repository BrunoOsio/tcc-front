import { Link } from "react-router-dom";
import { Area } from "../../../../shared/types";
import { Container, LinkArea, Specialization, Title } from "./styles";

type AreaCardProps = {
  area: Area;
}
export const AreaCard: React.FC<AreaCardProps> = ({area}) => {
  return (
    <LinkArea to={`area/${area.id}`}>
      <Container>
        <Title>{area.title}</Title>

        <Specialization>X</Specialization>
      </Container>
    </LinkArea>
  );
}