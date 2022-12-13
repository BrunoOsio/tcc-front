import { Team } from "../../types/team/Team";
import { Border, Container, Initials } from "./styles";

type TeamPhotoProps = {
  team: Team;
  size: number;
}

const SPACE = " ";
const FIRST_LETTER_INDEX = 0;
const NO_SPACE_BETWEEN_LETTERS = "";
const MAX_INITIALS_LENGTH = 3;

export const TeamPhoto: React.FC<TeamPhotoProps> = ({team, size}) => {
  const getFullnameInitials = () => {
    const fullnameArray = team.name.split(SPACE);
    let initials = fullnameArray.map(word => word.charAt(FIRST_LETTER_INDEX));

    if (initials.length > MAX_INITIALS_LENGTH) {
      initials = [initials[0], initials[1], initials[2]];
    }

    return initials.join(NO_SPACE_BETWEEN_LETTERS).toUpperCase();
  }

  return (
    <Border size={size}>
      <Container>
        <Initials>{getFullnameInitials()}</Initials>
      </Container>
    </Border>
  );
}