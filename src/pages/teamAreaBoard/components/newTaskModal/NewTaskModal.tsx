import axios from "axios";
import { ChangeEvent, useState } from "react";
import { useAppDispatch } from "../../../../states/app/hooks";
import { addTask } from "../../../../states/features/columnSlice";
import { BaseModal } from "./BaseModal";
import { DesktopContainer, Header } from "./styles";

type BaseModalWrapperProps = {
  columnId: number;
  isModalVisible: boolean;
  onBackDropClick: () => void;
}

export const NewTaskModal: React.FC<BaseModalWrapperProps> = ({columnId, isModalVisible, onBackDropClick}) => {
  const dispatch = useAppDispatch();

  const [title, setTitle] = useState<string>("");

  const handleTitle = (event: ChangeEvent<HTMLInputElement>) => {
    const newTitle = event.target.value;
    setTitle(newTitle);
  }

  const handleSubmit = (columnId: number) => {
    const newTask = {
      columnId: columnId,
      title: title,
      description: "test",
      createdAt: "1-1-1",
      limitAt: "1-1-1"
    }

    dispatch(addTask(newTask));
  }

  if(!isModalVisible) return null;

  return (
    <BaseModal onBackDropClick={onBackDropClick}>
      <DesktopContainer>
        <Header>Adicionar nova tarefa</Header>
        <label htmlFor="title">Título</label><input name="title" type="text" value={title} onChange={handleTitle}/>
        <button onClick={() => handleSubmit(columnId)}>Enviar</button>
      </DesktopContainer>
    </BaseModal>
  );
}