import { Container, FormGroup, Input, NewColumnButton, NewColumnLabel, NewColumnPlaceholder, NoColumnContainer, PlaceholderBody, Submit } from "./styles";
import { ColumnContainer } from "./components/columnContainer/ColumnContainer";
import { DragDropContext, DropResult } from "@hello-pangea/dnd";
import { useAppDispatch, useAppSelector } from "../../states/app/hooks";
import { createColumn, findColumns, patchCreateColumn, patchReorder, reorder } from "../../states/features/columnSlice";
import { ChangeEvent, useEffect, useState } from "react";
import { Loading } from "./components/loading/Loading";
import { useParams } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";
import { ColumnReferencedToAreaDTO } from "../../shared/dtos/column/ColumnReferencedToAreaDTO";
import { notifySuccess } from "../../shared/helpers/area/notifications";
import columnService from "../../shared/services/column/columnService";
import { RiPlayListAddLine } from "react-icons/ri";

export const TeamAreaBoard = () => {
  const { areaId } = useParams();
  const areaIdNumber = Number(areaId);

  const { value: columns, isLoading } = useAppSelector((state) => state.column);

  const dispatch = useAppDispatch();

  const defaultNewColumnInput = "Insira um nome";
  const [newColumnInput, setNewColumnInput] = useState(defaultNewColumnInput);

  const defaultToggleNewColumn = false;
  const [isNewColumnButton, setNewColumnButton] = useState(defaultToggleNewColumn);
  
  const handleNewColumnInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setNewColumnInput(event.target.value);
  } 

  const showNewColumnButton = () => {
    setNewColumnButton(true);
  }

  const exitNewColumnButton = () => {
    setNewColumnButton(false);
  }

  const isNewColumnInputBlank = newColumnInput.length === 0;

  const handleSubmitNewColumn = async () => {
    const biggestId = await columnService.findBiggestId() + 1;

    const newColumn: ColumnReferencedToAreaDTO = {
      areaId: areaIdNumber,
      temporaryReduxId: biggestId,
      title: newColumnInput
    }

    resetFormData();
    notifySuccess("Lista criada");

    dispatch(patchCreateColumn(newColumn));
    dispatch(createColumn(newColumn));
  }

  const resetFormData = () => {
    setNewColumnInput(defaultNewColumnInput);
    exitNewColumnButton();
  }

  const onDragEnd = (result: DropResult) => {
    const { source, destination } = result;

    if (!destination) return;

    const isDragSameThanBefore = destination.droppableId === source.droppableId && destination.index === source.index
    if (isDragSameThanBefore) return;

    dispatch(reorder(result));

    dispatch(patchReorder(result));
  };

  useEffect(() => {
    dispatch(findColumns(areaIdNumber));
  }, []);

  return (
    <Container>
      <DragDropContext onDragEnd={onDragEnd}>
        {
        isLoading ? 
          <Loading /> 
        : 
          columns.length === 0 ?
            <NoColumnContainer>
              <NewColumnPlaceholder>
                <FormGroup>
                  <Input 
                    placeholder="Insira o nome da lista" 
                    value={newColumnInput} 
                    onChange={handleNewColumnInputChange}
                    isBlank={isNewColumnInputBlank}
                  />
                  {!isNewColumnInputBlank && <Submit onClick={handleSubmitNewColumn}><BsArrowRight size={30}/></Submit>}
                </FormGroup>
                <PlaceholderBody>
                  <NewColumnLabel>Isto é sua primeira lista, nomeie-a na caixa de texto azul.</NewColumnLabel>
                </PlaceholderBody>
              </NewColumnPlaceholder>
            </NoColumnContainer>
          :
            columns.map((column, index) => <ColumnContainer key={index} column={column} index={index} />)
        }
        
        { 
        !isNewColumnButton ? 
          <NewColumnButton id="ref" onClick={showNewColumnButton}><span><RiPlayListAddLine/></span></NewColumnButton>
        : 
          <NewColumnPlaceholder>
            <FormGroup>
              <Input 
                autoFocus
                value={newColumnInput} 
                onChange={handleNewColumnInputChange}
                isBlank={isNewColumnInputBlank}
                onFocus={(event) => event.target.select()}
              />
              {!isNewColumnInputBlank && <Submit onClick={handleSubmitNewColumn}><BsArrowRight size={30}/></Submit>}
            </FormGroup>
            <PlaceholderBody>
              <button>dsfds</button>
            </PlaceholderBody>
          </NewColumnPlaceholder>
        }
      </DragDropContext>
    </Container>
  );
};
