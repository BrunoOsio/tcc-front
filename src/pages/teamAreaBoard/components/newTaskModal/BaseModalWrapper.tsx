import { NewTaskModal } from "./NewTaskModal";
import { DesktopContainer, Header } from "./styles";

type BaseModalWrapperProps = {
  isModalVisible: boolean;
  onBackDropClick: () => void;
}

export const BaseModalWrapper: React.FC<BaseModalWrapperProps> = ({isModalVisible, onBackDropClick}) => {
  if(!isModalVisible) return null;

  return (
    <NewTaskModal onBackDropClick={onBackDropClick}>
      <DesktopContainer>
        <Header>Modal info</Header>
      </DesktopContainer>
    </NewTaskModal>
  );
}