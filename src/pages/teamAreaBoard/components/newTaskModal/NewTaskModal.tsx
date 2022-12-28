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
import { Button, CheckboxContainer, CheckboxLabel, DateTimeFormGroup, DateTimeInput, EnableLimitDate, ExitButton, Form, FormGroup, Header, Input, Label, Placeholder, Error, TextArea, ConfirmButton, ButtonGroup } from "./styles";
import { trimmed } from "../../../../shared/helpers/stringHelpers";
import { ImArrowRight } from "react-icons/im";
import { Loading } from "../../../../shared/components/loading/Loading";

type BaseModalWrapperProps = {
  columnId: number;
  isModalVisible: boolean;
  onBackDropClick: () => void;
}

export const NewTaskModal: React.FC<BaseModalWrapperProps> = ({columnId, isModalVisible, onBackDropClick}) => {
  const dispatch = useAppDispatch();

  const defaultState = {
    title: undefined,
    description: undefined,
    limitDateCheckbox: false,
    limitDate: createDefaultDateTimeLocalInput(),
  };

  const [title, setTitle] = useState<string | undefined>(defaultState.title);
  const [titleError, setTitleError] = useState<string | null>(null);
  const [description, setDescription] = useState<string | undefined>(defaultState.description);
  const [descriptionError, setDescriptionError] = useState<string | null>(null);
  const [isLimitDateCheckbox, setLimitDateCheckbox] = useState<boolean>(defaultState.limitDateCheckbox);
  const [limitDate, setLimitDate] = useState<string>(defaultState.limitDate);

  const [loading, setLoading] = useState(false);

  const handleTitle = (event: ChangeEvent<HTMLInputElement>) => {
    const newTitle = event.target.value;
    setTitle(newTitle);

    if ((trimmed(newTitle).length === 0) || newTitle === undefined) setTitleError("Requer título");
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

  const isTitleInvalid = !!titleError || title === undefined;
  const isDescriptionInvalid = !!descriptionError;

  const isEnableSend = !isTitleInvalid && !isDescriptionInvalid;

  const handleSubmit = async (columnId: number) => {
    setLoading(true);

    if(!isEnableSend) {
      notifyError("Há erros no preenchimento do formulário");
      setLoading(false);
      return;
    }

    const formattedLimitDate = formatStringDate(limitDate);

    const newTask: TaskReferencedToColumnDTO = {
      columnId: columnId,
      title: title || "Sem título",
      description: description || "Sem descrição",
      createdAt: createDateOfNow(),
      limitAt: isLimitDateCheckbox ? formattedLimitDate : null,
    };

    const createdTask = await taskService.createTask(newTask);

    console.log(createdTask);
    const newTaskRender: TaskReferencedToColumnDTO = {
      columnId: columnId,
      temporaryReduxId: createdTask.id,
      title: title || "Sem título",
      description: description || "Sem descrição",
      createdAt: createDateOfNow(),
      limitAt: isLimitDateCheckbox ? formattedLimitDate : null,
    }
    
    resetFormData();
    notifySuccess("Tarefa criada");

    dispatch(createTask(newTaskRender));
    
    setLoading(false);
    onBackDropClick();
  }
  return (
    <BaseModal onBackDropClick={onBackDropClick}>
      <Form isLoading={loading}>
        {loading && (<Loading size={100}/>)}
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

            {(isTitleInvalid && title) && <Error>{titleError}</Error>}
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

        <ButtonGroup>
          <ConfirmButton onClick={() => handleSubmit(columnId)} isEnableSend={isEnableSend}><span><ImArrowRight/></span></ConfirmButton>
        </ButtonGroup>
      </Form>
    </BaseModal>
  );
}