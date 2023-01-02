import { HiOutlineEmojiSad } from "react-icons/hi";
import { Container } from "./styles";

type NoItemsFoundProps = {
  message: string;
}

export const NoItemsFound: React.FC<NoItemsFoundProps> = ({message}) => {
  return (
    <Container>
      <span className="icon"><HiOutlineEmojiSad/></span>
      <span>{message}</span>
    </Container>
  );
}