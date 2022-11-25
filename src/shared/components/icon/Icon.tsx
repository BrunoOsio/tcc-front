import { Border, Container, Initials } from "./styles";
import { User } from "../../types";

type IconProps = {
  user: User;
  size: number;
}

const SPACE = " ";
const FIRST_LETTER_INDEX = 0;
const NO_SPACE_BETWEEN_LETTERS = "";
const MAX_INITIALS_LENGTH = 3;
export const Icon: React.FC<IconProps> = ({user, size}) => {

  const getFullnameInitials = () => {
      const fullnameArray = user.name.split(SPACE);
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