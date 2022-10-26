import moment from "moment";
import { ChangeEvent, useState } from "react";
import { TaskReferencedToColumnDTO } from "../../../../shared/dtos/task/TaskReferencedToColumnDTO";
import { notifyError, notifySuccess } from "../../../../shared/helpers/area/notifications";
import { createDateOfNow, createDefaultDateTimeLocalInput, formatDate, formatStringDate, isValidStringDate } from "../../../../shared/helpers/dateHelpers";
import taskService from "../../../../shared/services/task/taskService";
import { useAppDispatch } from "../../../../states/app/hooks";
import { createTask, patchCreateTask } from "../../../../states/features/columnSlice";
import { BaseModal } from "./BaseModal";
import { MdClose } from "react-icons/md";
import { Button, CheckboxContainer, CheckboxLabel, DateTimeFormGroup, DateTimeInput, DescriptionLabel, DesktopContainer, EnableLimitDate, ExitButton, FormGroup, Header, Input, Label, Placeholder, TextArea } from "./styles";

type BaseModalWrapperProps = {
  columnId: number;
  isModalVisible: boolean;
  onBackDropClick: () => void;
}

export const NewTaskModal: React.FC<BaseModalWrapperProps> = ({columnId, isModalVisible, onBackDropClick}) => {
  const dispatch = useAppDispatch();

  const defaultState = {
    title: "",
    description: "",
    limitDateCheckbox: false,
    limitDate: createDefaultDateTimeLocalInput(),
  };

  const [title, setTitle] = useState<string>(defaultState.title);  
  const [description, setDescription] = useState<string>(defaultState.description);
  const [isLimitDateCheckbox, setLimitDateCheckbox] = useState<boolean>(defaultState.limitDateCheckbox);
  const [limitDate, setLimitDate] = useState<string>(defaultState.limitDate);

  const handleTitle = (event: ChangeEvent<HTMLInputElement>) => {
    const newTitle = event.target.value;
    setTitle(newTitle);
  }

  const handleDescription = (event: ChangeEvent<HTMLTextAreaElement>) => {
    const newDescription = event.target.value;
    setDescription(newDescription);
  }

  const toggleLimitDateCheckbox = () => {
    setLimitDateCheckbox(!isLimitDateCheckbox);
  }

  const handleLimitDate = (event: ChangeEvent<HTMLInputElement>) => {
    const limitDate = formatDate(moment(event.target.value).toDate()); 
    console.log(limitDate);

    if(!isValidStringDate(limitDate)) {
      notifyError("Não é possível limpar a data, desmarque a caixa de seleção"); 
      return;
    }

    setLimitDate(limitDate);
  }

  const handleSubmit = async (columnId: number) => {
    
    const biggestId = await taskService.findBiggestId() + 1;
    const formattedLimitDate = formatStringDate(limitDate);

    const newTask: TaskReferencedToColumnDTO = {
      columnId: columnId,
      temporaryReduxId: biggestId,
      title: title,
      description: description,
      createdAt: createDateOfNow(),
      limitAt: isLimitDateCheckbox ? formattedLimitDate : undefined,
    }

    resetFormData();
    onBackDropClick();
    notifySuccess("Tarefa criada");

    dispatch(patchCreateTask(newTask));
    dispatch(createTask(newTask));
  }

  const resetFormData = () => {
    setTitle(defaultState.title);
    setDescription(defaultState.description);
    setLimitDateCheckbox(defaultState.limitDateCheckbox);
    setLimitDate(defaultState.limitDate);
  }

  if(!isModalVisible) return null;

  return (
    <BaseModal onBackDropClick={onBackDropClick}>
      <DesktopContainer>
        <ExitButton onClick={onBackDropClick}><MdClose color="#6a6a6a"/></ExitButton>        
        <Header>Adicionar nova tarefa</Header>

        <FormGroup>
          <Label htmlFor="title">Título da tarefa</Label>
          <Input name="title" type="text" value={title} onChange={handleTitle}/>
        </FormGroup>

        <FormGroup>
          <DescriptionLabel htmlFor="description">Descrição</DescriptionLabel>
          <TextArea name="description" value={description} onChange={handleDescription}></TextArea>
        </FormGroup>

        <DateTimeFormGroup>
          <CheckboxContainer>
            <EnableLimitDate type="checkbox" defaultChecked={isLimitDateCheckbox} name="isLimitDate" onChange={toggleLimitDateCheckbox}/>
            <CheckboxLabel htmlFor="isLimitDate">Habilitar data limite?</CheckboxLabel>
          </CheckboxContainer>

          { isLimitDateCheckbox && <DateTimeInput type="datetime-local" value={formatStringDate(limitDate)} onChange={handleLimitDate}/>}
          { !isLimitDateCheckbox && <Placeholder/>}
        </DateTimeFormGroup>

        <Button onClick={() => handleSubmit(columnId)}>Enviar</Button>

      </DesktopContainer>
    </BaseModal>
  );
}