import { ColumnsContainer, Container, FormGroup, Input, Leader, LeaderGroup, LeftInformations, Name, NameAndLeaderGroup, NewColumnButton, NewColumnLabel, NewColumnPlaceholder, NoColumnContainer, PlaceholderBody, RightInformations, Submit, TeamInformationsGroup } from "./styles";
import { ColumnContainer } from "./components/columnContainer/ColumnContainer";
import { DragDropContext, DropResult } from "@hello-pangea/dnd";
import { useAppDispatch, useAppSelector } from "../../states/app/hooks";
import { createColumn, findColumns, patchCreateColumn, patchReorder, reorder } from "../../states/features/columnSlice";
import { ChangeEvent, useEffect, useState } from "react";
import { Loading } from "./components/loading/Loading";
import { useNavigate, useParams } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";
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

export const TeamAreaBoard = () => {
  const { areaId } = useParams();
  const { teamId } = useParams();

  const areaIdNumber = Number(areaId);
  const teamIdNumber = Number(teamId);

  const navigate = useNavigate();

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
                    />
                    {!isNewColumnInputBlank && <Submit onClick={handleSubmitNewColumn}><BsArrowRight size={30}/></Submit>}
                  </FormGroup>
                  <PlaceholderBody>
                    <NewColumnLabel>Isto é sua primeira lista, nomeie-a no cabeçalho azul.</NewColumnLabel>
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
                  />
                  {!isNewColumnInputBlank && <Submit onClick={handleSubmitNewColumn}><BsArrowRight size={30}/></Submit>}
                </FormGroup>
                <PlaceholderBody>
                  <button>dsfds</button>
                </PlaceholderBody>
              </NewColumnPlaceholder>
          )
          }

        </DragDropContext>
      </ColumnsContainer>
    </Container>
  );
};
