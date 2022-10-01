import { ChangeEvent, useState } from "react";
import { TaskReferencedToColumnDTO } from "../../../../shared/dtos/task/TaskReferencedToColumnDTO";
import { notifySuccess } from "../../../../shared/helpers/area/notifications";
import taskService from "../../../../shared/services/task/taskService";
import { useAppDispatch } from "../../../../states/app/hooks";
import { createTask, patchCreateTask } from "../../../../states/features/columnSlice";
import { BaseModal } from "./BaseModal";
import { Button, DesktopContainer, FormGroup, Header, Input, Label } from "./styles";

type BaseModalWrapperProps = {
  columnId: number;
  isModalVisible: boolean;
  onBackDropClick: () => void;
}

export const NewTaskModal: React.FC<BaseModalWrapperProps> = ({columnId, isModalVisible, onBackDropClick}) => {
  const dispatch = useAppDispatch();

  const INITIAL_TITLE = "";
  const [title, setTitle] = useState<string>(INITIAL_TITLE);

  const handleTitle = (event: ChangeEvent<HTMLInputElement>) => {
    const newTitle = event.target.value;
    setTitle(newTitle);
  }

  const handleSubmit = async (columnId: number) => {
    
    const biggestId = await taskService.findBiggestId() + 1;
    const newTask: TaskReferencedToColumnDTO = {
      columnId: columnId,
      temporaryReduxId: biggestId,
      title: title,
      description: "test",
      createdAt: "1-1-1",
      limitAt: "1-1-1"
    }
    
    setTitle(INITIAL_TITLE);
    onBackDropClick();
    notifySuccess("Tarefa criada");

    dispatch(createTask(newTask));
    dispatch(patchCreateTask(newTask));
  }

  if(!isModalVisible) return null;

  return (
    <BaseModal onBackDropClick={onBackDropClick}>
      <DesktopContainer>
        <Header>Adicionar nova tarefa</Header>
        <FormGroup>
          <Label htmlFor="title">Título da tarefa</Label>
          <Input name="title" type="text" value={title} onChange={handleTitle}/>
        </FormGroup>
        <Button onClick={() => handleSubmit(columnId)}>Enviar</Button>
      </DesktopContainer>
    </BaseModal>
  );
}