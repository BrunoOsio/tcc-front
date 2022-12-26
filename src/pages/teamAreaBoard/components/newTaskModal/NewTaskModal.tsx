import moment from "moment";
import { ChangeEvent, useEffect, useState } from "react";
import { TaskReferencedToColumnDTO } from "../../../../shared/dtos/task/TaskReferencedToColumnDTO";
import { notifyError, notifySuccess } from "../../../../shared/helpers/notificationHelpers";
import { createDateOfNow, createDefaultDateTimeLocalInput, formatDate, formatStringDate, isValidStringDate } from "../../../../shared/helpers/dateHelpers";
import taskService from "../../../../shared/services/task/taskService";
import { useAppDispatch } from "../../../../states/app/hooks";
import { createTask, patchCreateTask } from "../../../../states/features/columnSlice";
import { BaseModal } from "./BaseModal";
import { MdClose } from "react-icons/md";
import { Button, CheckboxContainer, CheckboxLabel, DateTimeFormGroup, DateTimeInput, EnableLimitDate, ExitButton, Form, FormGroup, Header, Input, Label, Placeholder, Error, TextArea } from "./styles";
import { trimmed } from "../../../../shared/helpers/stringHelpers";
import { ImArrowRight } from "react-icons/im";

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
  const [titleError, setTitleError] = useState<string | null>(null);
  const [description, setDescription] = useState<string>(defaultState.description);
  const [descriptionError, setDescriptionError] = useState<string | null>(null);
  const [isLimitDateCheckbox, setLimitDateCheckbox] = useState<boolean>(defaultState.limitDateCheckbox);
  const [limitDate, setLimitDate] = useState<string>(defaultState.limitDate);

  const handleTitle = (event: ChangeEvent<HTMLInputElement>) => {
    const newTitle = event.target.value;
    setTitle(newTitle);

    if ((trimmed(newTitle).length === 0) || newTitle === null) setTitleError("Requer título");
    else if (newTitle.length > 40) setTitleError("Máximo de 40 caracteres");
    else setTitleError(null);
  }

  const handleDescription = (event: ChangeEvent<HTMLTextAreaElement>) => {
    const newDescription = event.target.value;
    setDescription(newDescription);

    if (newDescription.length > 60) setDescriptionError("Máximo de 60 caracteres");
    else setDescriptionError(null);
  }

  const toggleLimitDateCheckbox = () => {
    setLimitDateCheckbox(!isLimitDateCheckbox);
  }

  const handleLimitDate = (event: ChangeEvent<HTMLInputElement>) => {
    const limitDate = formatDate(moment(event.target.value).toDate()); 

    if(!isValidStringDate(limitDate)) {
      notifyError("Não é possível limpar a data, desmarque a caixa de seleção"); 
      return;
    }

    setLimitDate(limitDate);
  }

  const resetFormData = () => {
    setTitle(defaultState.title);
    setDescription(defaultState.description);
    setLimitDateCheckbox(defaultState.limitDateCheckbox);
    setLimitDate(defaultState.limitDate);
  }

  if(!isModalVisible) return null;

  const isTitleInvalid = !!titleError;
  const isDescriptionInvalid = !!descriptionError;

  const isEnableSend = !isTitleInvalid && !isDescriptionInvalid;

  const handleSubmit = async (columnId: number) => {
    if(!isEnableSend) {
      notifyError("Há erros no preenchimento do formulário")
      return;
    }

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
  return (
    <BaseModal onBackDropClick={onBackDropClick}>
      <Form>
        <ExitButton onClick={onBackDropClick}><MdClose color="#6a6a6a"/></ExitButton>        
        <Header>Adicionar nova tarefa</Header>

        <FormGroup>
            <Label htmlFor="title">Título</Label>
            <Input 
              name="title"
              isError={isTitleInvalid}
              value={title} 
              onChange={handleTitle}
            />

            {(isTitleInvalid) && <Error>{titleError}</Error>}
          </FormGroup>

        <FormGroup>
          <Label htmlFor="description">Descrição</Label>
          <TextArea 
            name="description" 
            value={description} 
            onChange={handleDescription}
            isError={isDescriptionInvalid}
          ></TextArea>
          {(isDescriptionInvalid) && <Error>{descriptionError}</Error>}
        </FormGroup>

        <DateTimeFormGroup>
          <CheckboxContainer>
            <EnableLimitDate type="checkbox" defaultChecked={isLimitDateCheckbox} name="isLimitDate" onChange={toggleLimitDateCheckbox}/>
            <CheckboxLabel htmlFor="isLimitDate">Habilitar data limite?</CheckboxLabel>
          </CheckboxContainer>

          { isLimitDateCheckbox && <DateTimeInput type="datetime-local" value={formatStringDate(limitDate)} onChange={handleLimitDate}/>}
          { !isLimitDateCheckbox && <Placeholder/>}
        </DateTimeFormGroup>

        <Button onClick={() => handleSubmit(columnId)} isEnableSend={isEnableSend}><span><ImArrowRight/></span></Button>
      </Form>
    </BaseModal>
  );
}