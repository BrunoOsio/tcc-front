import moment from "moment";
import { ChangeEvent, useState } from "react";
import { ImArrowRight } from "react-icons/im";
import { MdClose } from "react-icons/md";
import { TbArrowsJoin } from "react-icons/tb";
import { BaseModal } from "../../../../../../shared/components/baseModal/BaseModal";
import { TaskReferencedToColumnDTO } from "../../../../../../shared/dtos/task/TaskReferencedToColumnDTO";
import { UpdatedTaskReferencedToColumnDTO } from "../../../../../../shared/dtos/task/UpdatedTaskReferencedToColumnDTO";
import { createDateOfNow, createDefaultDateTimeLocalInput, formatDate, formatStringDate, isValidStringDate } from "../../../../../../shared/helpers/dateHelpers";
import { notifyError, notifySuccess, notifyWarning } from "../../../../../../shared/helpers/notificationHelpers";
import { trimmed } from "../../../../../../shared/helpers/stringHelpers";
import taskService from "../../../../../../shared/services/task/taskService";
import { Task } from "../../../../../../shared/types";
import { useAppDispatch } from "../../../../../../states/app/hooks";
import { patchUpdateTask, updateTask } from "../../../../../../states/features/columnSlice";
import { Form, ExitButton, FormGroup, Header, Input, Label, Error, TextArea, DateTimeFormGroup, CheckboxContainer, EnableLimitDate, CheckboxLabel, DateTimeInput, Placeholder, Button, ButtonGroup, RemoveButton, ConfirmButton } from "../../../newTaskModal/styles";
import { IoMdTrash } from "react-icons/io";

type BaseModalWrapperProps = {
  task: Task;
  columnId: number;
  isModalVisible: boolean;
  onBackDropClick: () => void;
  setShowEditButton: (isShow: boolean) => void;
}

export const TaskDetailsModal: React.FC<BaseModalWrapperProps> = ({
  task,
  columnId,
  isModalVisible, 
  onBackDropClick, 
  setShowEditButton,
}) => {

  const dispatch = useAppDispatch();

  const defaultState = {
    title: task.title,
    description: task.description,
    limitDateCheckbox: !!task.limitAt,
    limitDate: task.limitAt || createDefaultDateTimeLocalInput(),
  };

  const [title, setTitle] = useState<string | undefined>(defaultState.title);
  const [titleError, setTitleError] = useState<string | null>(null);
  const [description, setDescription] = useState<string | undefined>(defaultState.description);
  const [descriptionError, setDescriptionError] = useState<string | null>(null);
  const [isLimitDateCheckbox, setLimitDateCheckbox] = useState<boolean>(defaultState.limitDateCheckbox);
  const [limitDate, setLimitDate] = useState<string | null>(defaultState.limitDate);

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

  const isTitleInvalid = !!titleError && title === undefined;
  const isDescriptionInvalid = !!descriptionError;

  const isValuesToSave = (task.title !== title) || (task.description !== description) || (task.limitAt !== limitDate);
  const isFieldError = isTitleInvalid || isDescriptionInvalid;
  const isEnableSend = !isFieldError && isValuesToSave;
  console.log(isValuesToSave);
  const closeModal = () => {
    setShowEditButton(false);
    onBackDropClick();
  }

  const handleSubmit = async () => {
    if (!isValuesToSave) {
      notifyWarning("Não há alterações para serem salvas");
      return;
    }

    if (isFieldError) {
      notifyError("Há erros no preenchimento do formulário");
      return;
    }

    const formattedLimitDate = limitDate ? formatStringDate(limitDate) : null;

    const updatedTask: UpdatedTaskReferencedToColumnDTO = {
      columnId: columnId,
      id: task.id,
      title: title || "Sem título",
      description: description || "Sem descrição",
      createdAt: createDateOfNow(),
      isFinished: false,
      limitAt: isLimitDateCheckbox ? formattedLimitDate : null,
      // members: task.members
    }

    resetFormData();

    closeModal();

    notifySuccess("Tarefa atualizada");

    dispatch(patchUpdateTask(updatedTask));
    dispatch(updateTask(updatedTask));
  }
  
  return (
    <BaseModal onBackDropClick={closeModal}>
      <Form>
        <ExitButton onClick={onBackDropClick}><MdClose color="#6a6a6a"/></ExitButton>        
        <Header>{task.title}</Header>

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

          { isLimitDateCheckbox && <DateTimeInput type="datetime-local" value={limitDate ? formatStringDate(limitDate) : undefined} onChange={handleLimitDate}/>}
          { !isLimitDateCheckbox && <Placeholder/>}
        </DateTimeFormGroup>

        <ButtonGroup>
          <RemoveButton><span><IoMdTrash/></span></RemoveButton>
          <ConfirmButton onClick={() => handleSubmit()} isEnableSend={isEnableSend}><span><ImArrowRight/></span></ConfirmButton>

        </ButtonGroup>
      </Form>
    </BaseModal>
  );
}