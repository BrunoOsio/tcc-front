import { ColumnsContainer, Container, FormGroup, Input, Leader, LeaderGroup, LeftInformations, Name, NameAndLeaderGroup, NewColumnBody, NewColumnButton, NewColumnLabel, NewColumnPlaceholder, NoColumnContainer, PlaceholderBody, QuestionContainer, RightInformations, Submit, TeamInformationsGroup } from "./styles";
import { ColumnContainer } from "./components/columnContainer/ColumnContainer";
import { DragDropContext, DropResult } from "@hello-pangea/dnd";
import { useAppDispatch, useAppSelector } from "../../states/app/hooks";
import { createColumn, findColumns, patchCreateColumn, patchReorder, reorder } from "../../states/features/columnSlice";
import { ChangeEvent, KeyboardEvent, useEffect, useState } from "react";
import { Loading } from "./components/loading/Loading";
import { useNavigate, useParams } from "react-router-dom";
import { BsArrowRight, BsQuestionSquare } from "react-icons/bs";
import { ColumnReferencedToAreaDTO } from "../../shared/dtos/column/ColumnReferencedToAreaDTO";
import { notifySuccess } from "../../shared/helpers/notificationHelpers";
import columnService from "../../shared/services/column/columnService";
import { RiPlayListAddLine, RiVipCrownFill } from "react-icons/ri";
import { Navbar } from "../../shared/components/navbar/Navbar";
import { findAreas } from "../../states/features/areaSlice";
import { Area } from "../../shared/types";
import areaService from "../../shared/services/area/areaService";
import { AreaIcon } from "../../shared/components/areaIcon/AreaIcon";
import routes from "../../routes/routes";
import { Label, LabelGroup } from "../teamDashboard/styles";
import { AiOutlineTeam } from "react-icons/ai";
import { GoPlus } from "react-icons/go";
import { IconBlank } from "../../shared/components/iconBlank/IconBlank";
import { QuestionButton } from "./components/questionButton/QuestionButton";
import { ColumnHelpModal } from "./components/columnHelpModal/ColumnHelpModal";

export const TeamAreaBoard = () => {
  const { areaId } = useParams();
  const { teamId } = useParams();

  const areaIdNumber = Number(areaId);
  const teamIdNumber = Number(teamId);

  const navigate = useNavigate();

  const [isModalVisible, setModalVisible] = useState(false);
  const toggleModal = () => setModalVisible(!isModalVisible);

  const {value: areas, isSuccess: isAreaSuccess} = useAppSelector((state) => state.area);
  const [mainArea, setMainArea] = useState<Area>();
  const isMainAreaSuccess = !!mainArea;

  const { value: columns, isLoading, isSuccess } = useAppSelector((state) => state.column);

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
    const newColumn: ColumnReferencedToAreaDTO = {
      areaId: areaIdNumber,
      title: newColumnInput
    }

    const createdColumn = await columnService.createColumn(newColumn);

    const newColumnRender: ColumnReferencedToAreaDTO = {
      areaId: areaIdNumber,
      temporaryReduxId: createdColumn.id,
      title: newColumnInput
    }

    resetFormData();
    notifySuccess("Lista criada");

    dispatch(createColumn(newColumnRender));
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
    const fetchMainArea = async () => {
      const mainArea = await areaService.findArea(areaIdNumber);

      setMainArea(mainArea);
    }

    fetchMainArea();

    dispatch(findColumns(areaIdNumber));
    dispatch(findAreas(teamIdNumber));
  }, [areaIdNumber]);

  const formatAreaLeader = () => {
    if (!isMainAreaSuccess) return "Carregando";

    let leader = "";

    if (!mainArea?.leader) leader = "Nenhum Líder";
    else leader = mainArea.leader.name; 
 
    return leader;
  }

  const areaName = isMainAreaSuccess ? mainArea.name : "Carregando";

  const goToTeamDashboard = () => {
    navigate(routes.teamDashboard(teamIdNumber));
  }

  const handleKeyEnterSubmit = (event: KeyboardEvent<HTMLInputElement>) => {
    const keyName = event.key;

    if (keyName === "Enter")
      handleSubmitNewColumn()
  }

  const screenWidth = window.innerWidth;
  const MAX_AREAS_ON_LIST = (screenWidth > 1500) ? 6 : 5;
  const areasLengthReached = areas ? areas.length > MAX_AREAS_ON_LIST : false;

  const isColumnListEmpty = columns.length === 0;

  return (
    <Container>
      <Navbar/>
      <TeamInformationsGroup>
        <LeftInformations>
          {!isMainAreaSuccess && <IconBlank size={70}/>}
          {isMainAreaSuccess && <AreaIcon area={mainArea} size={70}/>}

          <NameAndLeaderGroup>
            <Name>{areaName}</Name>
            <LeaderGroup>
              <span><RiVipCrownFill/></span>
              <Leader>{formatAreaLeader()}</Leader>
            </LeaderGroup>
          </NameAndLeaderGroup>
        </LeftInformations>
        <RightInformations>
          {isAreaSuccess && (

            areas.map((area, index) => { 
              if ((index < MAX_AREAS_ON_LIST) && (mainArea?.id != area.id)) {
                return <AreaIcon key={area.id} area={area} size={50} enableRoute={true}/>
              }
            })
          )}
          
          {areasLengthReached && <span className="icon"><GoPlus /></span>}

          <LabelGroup onClick={goToTeamDashboard}>
            <span><AiOutlineTeam/></span>
            <Label>Áreas</Label>
          </LabelGroup>
          
        </RightInformations>
      </TeamInformationsGroup>

      <ColumnsContainer>
        <DragDropContext onDragEnd={onDragEnd}>
          {
          isLoading ? 
            <Loading /> 
          : 
            (isSuccess && isColumnListEmpty) ?
              <NoColumnContainer>
                <NewColumnPlaceholder>
                  <FormGroup>
                    <Input 
                      placeholder="Insira o nome da lista" 
                      value={newColumnInput} 
                      onChange={handleNewColumnInputChange}
                      isBlank={isNewColumnInputBlank}
                      onKeyDown={(event) => handleKeyEnterSubmit(event)}
                    />
                    {!isNewColumnInputBlank && (
                      <Submit 
                        onClick={handleSubmitNewColumn}
                      >
                        <BsArrowRight size={30}/>
                      </Submit>)}
                  </FormGroup>
                  <PlaceholderBody>

                    <QuestionContainer onClick={toggleModal}>
                      <QuestionButton/>
                      <NewColumnLabel>Isto é sua primeira lista, nomeie-a no cabeçalho azul.</NewColumnLabel>
                      <ColumnHelpModal area={mainArea!} isModalVisible={isModalVisible} onBackDropClick={toggleModal}/>
                    </QuestionContainer>
                  </PlaceholderBody>
                </NewColumnPlaceholder>
              </NoColumnContainer>
            :
              columns.map((column, index) => <ColumnContainer key={index} column={column} index={index} />)
          }
          
          {
          (isSuccess && !isColumnListEmpty) && (
            !isNewColumnButton ? 
              <NewColumnButton id="ref" onClick={showNewColumnButton}><span><RiPlayListAddLine/></span></NewColumnButton>
            : 
              <NewColumnPlaceholder onMouseLeave={exitNewColumnButton}>
                <FormGroup>
                  <Input 
                    autoFocus
                    value={newColumnInput} 
                    onChange={handleNewColumnInputChange}
                    isBlank={isNewColumnInputBlank}
                    onFocus={(event) => event.target.select()}
                    onKeyDown={(event) => handleKeyEnterSubmit(event)}
                  />
                  {!isNewColumnInputBlank && <Submit onClick={handleSubmitNewColumn}><BsArrowRight size={30}/></Submit>}
                </FormGroup>
                <PlaceholderBody>
                  <NewColumnBody onClick={toggleModal}>
                    <QuestionButton/>
                    <NewColumnLabel>Que tipo de listas posso criar?</NewColumnLabel>
                    <ColumnHelpModal area={mainArea!} isModalVisible={isModalVisible} onBackDropClick={toggleModal}/>
                  </NewColumnBody>
                </PlaceholderBody>
              </NewColumnPlaceholder>
          )
          }

        </DragDropContext>
      </ColumnsContainer>
    </Container>
  );
};
