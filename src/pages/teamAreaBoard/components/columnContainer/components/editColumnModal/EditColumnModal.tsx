import { ChangeEvent, useState } from "react";
import { ImArrowRight } from "react-icons/im";
import { MdClose } from "react-icons/md";
import { BaseModal } from "../../../../../../shared/components/baseModal/BaseModal";
import { UpdateColumnDTO } from "../../../../../../shared/dtos/column/UpdateColumnDTO";
import { notifySuccess } from "../../../../../../shared/helpers/notificationHelpers";
import { trimmed } from "../../../../../../shared/helpers/stringHelpers";
import { Column } from "../../../../../../shared/types";
import { useAppDispatch } from "../../../../../../states/app/hooks";
import { ButtonGroup, CheckboxLabel, ConfirmButton, Error, EnableLimitDate, ExitButton, Form, FormGroup, Header, Input, Label, RemoveButton } from "../../../newTaskModal/styles";
import { CheckboxContainer } from "./styles";
import { patchRemoveColumn, patchUpdateColumn, removeColumn, updateColumn } from "../../../../../../states/features/columnSlice";
import { IoMdTrash } from "react-icons/io";

type BaseModalWrapperProps = {
  column: Column;
  toggleEditColumnButton: (isVisible: boolean) => void;
  isModalVisible: boolean;
  onBackDropClick: () => void;
}

export const EditColumnModal: React.FC<BaseModalWrapperProps> = ({column, toggleEditColumnButton, isModalVisible, onBackDropClick}) => {
  const dispatch = useAppDispatch();

  const defaultState = {
    title: column.title,
    isForDoneTasks: column.isForDoneTasks,
  };
  
  const [title, setTitle] = useState<string | undefined>(defaultState.title);
  const [titleError, setTitleError] = useState<string | null>(null);

  const [isForDoneTasks, setForDoneTasks] = useState<boolean>(defaultState.isForDoneTasks);

  const handleTitle = (event: ChangeEvent<HTMLInputElement>) => {
    const newTitle = event.target.value;
    setTitle(newTitle);

    if ((trimmed(newTitle).length === 0) || newTitle === undefined) setTitleError("Requer título");
    else if (newTitle.length > 20) setTitleError("Máximo de 20 caracteres");
    else setTitleError(null);
  }
  
  const resetFormData = () => {
    setTitle(undefined);
    setForDoneTasks(false);
  }

  if(!isModalVisible) return null;

  const isTitleInvalid = !!titleError || title === undefined;
  const isEnableSend = !isTitleInvalid;

  const closeModal = () => {
    onBackDropClick();
    toggleEditColumnButton(false);
    resetFormData();
  }

  const handleRemove = async () => {
    dispatch(removeColumn(column));
    dispatch(patchRemoveColumn(column.id));
    
    closeModal();

    notifySuccess("Lista removida");
  }

  const handleSubmit = () => {
    const newColumn: UpdateColumnDTO = {
      id: column.id,
      title: title || "Sem título", 
      isForDoneTasks
    }

    dispatch(updateColumn(newColumn));
    dispatch(patchUpdateColumn(newColumn));

    closeModal();
    resetFormData();

    notifySuccess("Lista editada");
  }
  return (
    <BaseModal onBackDropClick={onBackDropClick}>
      <Form>
        <ExitButton onClick={onBackDropClick}><MdClose color="#6a6a6a"/></ExitButton>        
        <Header>Editar lista "{column.title}"</Header>

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

        <CheckboxContainer>
          <EnableLimitDate type="checkbox" defaultChecked={isForDoneTasks} name="isLimitDate" onChange={() => setForDoneTasks(!isForDoneTasks)}/>
          <CheckboxLabel htmlFor="isLimitDate">Lista para tarefas concluídas</CheckboxLabel>
        </CheckboxContainer>

        <ButtonGroup>
          <RemoveButton onClick={() => handleRemove()}><span><IoMdTrash/></span></RemoveButton>
          <ConfirmButton onClick={() => handleSubmit()} isEnableSend={isEnableSend}><span><ImArrowRight/></span></ConfirmButton>
        </ButtonGroup>
      </Form>
    </BaseModal>
  );
}