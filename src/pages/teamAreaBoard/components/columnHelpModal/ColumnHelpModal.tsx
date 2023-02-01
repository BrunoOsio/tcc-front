import { Area } from "../../../../shared/types";
import { BaseModal } from "../newTaskModal/BaseModal";
import { CloseButton, Container, List, ListContainer, OptionalList } from "./styles";
import {Text} from "./styles"
type BaseModalWrapperProps = {
  area: Area,
  isModalVisible: boolean;
  onBackDropClick: () => void;
}

export const ColumnHelpModal: React.FC<BaseModalWrapperProps> = ({ area, isModalVisible, onBackDropClick}) => {

  if(!isModalVisible) return null;

  return (
    <BaseModal onBackDropClick={onBackDropClick}>
      <Container>
        <Text>
          O objetivo do Teamlist é proporcionar uma gestão e controle de tarefas
          para as equipes de robótica. 
          Você está em "{area.name}", 
          aqui você poderá visualizar todo o fluxo de trabalho da área.
        </Text>

        <Text>
          As tarefas estão organizadas entre listas: 
          Com o desenvolvimento dos membros para a realização
          de uma tarefa, ela será atribuída a diferentes listas.
          Essa metodologia de trabalho é chamada de Kanban.
        </Text>

        <Text>
          É recondável que a área tenha no mínino 3 listas:
        </Text>

        <ListContainer>
          <List>A fazer</List>
          <List>Fazendo</List>
          <List>Concluído</List>
        </ListContainer>

        <Text>
          Também há listas para melhorar o fluxo da área:
        </Text>

        <ListContainer>
          <OptionalList>Ideias</OptionalList>
          <OptionalList>Bloqueado</OptionalList>
          <OptionalList>Urgente</OptionalList>
        </ListContainer>

        <Text>
          O uso de listas para o controle de tarefas melhora
          a visibilidade do time no dia a dia, por isso, 
          é fundamental seu uso. Caso haja alguma dúvida sobre o uso da ferramenta,
          contate o líder da área.
        </Text>
      <CloseButton onClick={onBackDropClick}>Entendido</CloseButton>
      </Container>

    </BaseModal>
  );
}