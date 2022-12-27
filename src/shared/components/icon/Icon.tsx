import { Border, Container, Initials } from "./styles";
import { User } from "../../types";

type IconProps = {
  user: User;
  size: number;
  isDropdown?: boolean;
}

const SPACE = " ";
const FIRST_LETTER_INDEX = 0;
const NO_SPACE_BETWEEN_LETTERS = "";
const MAX_INITIALS_LENGTH = 2;
export const Icon: React.FC<IconProps> = ({user, size, isDropdown}) => {

  const getFullnameInitials = () => {
      const fullnameArray = user.name.split(SPACE);
      let initials = fullnameArray.map(word => word.charAt(FIRST_LETTER_INDEX));

      if (initials.length > MAX_INITIALS_LENGTH) {
        initials = [initials[0], initials[1]];
      }

      return initials.join(NO_SPACE_BETWEEN_LETTERS).toUpperCase();
  }

  return (
    <Border size={size} isDropdown={isDropdown}>
      <Container>
        <Initials size={size}>{getFullnameInitials()}</Initials>
      </Container>
    </Border>
  );
}