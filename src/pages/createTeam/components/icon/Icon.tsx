import { User } from "../../../../shared/types";
import { Border, Container, Initials } from "./styles";

type IconProps = {
  user: User;
}

const SPACE = " ";
const FIRST_LETTER_INDEX = 0;
const NO_SPACE_BETWEEN_LETTERS = "";
const MAX_INITIALS_LENGTH = 3;
export const Icon: React.FC<IconProps> = ({user}) => {

  const getFullnameInitials = () => {
      const fullnameArray = user.name.split(SPACE);
      let initials = fullnameArray.map(word => word.charAt(FIRST_LETTER_INDEX));

      if (initials.length > MAX_INITIALS_LENGTH) {
        initials = [initials[0], initials[1], initials[2]];
      }

      return initials.join(NO_SPACE_BETWEEN_LETTERS).toUpperCase();
  }

  return (
    <Border>
      <Container>
        <Initials>{getFullnameInitials()}</Initials>
      </Container>
    </Border>
  );
}