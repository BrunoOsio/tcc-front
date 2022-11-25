import { ChangeEvent, useEffect, useState } from "react";
import { getStoredId } from "../../shared/helpers/localStorageHelpers";
import userService from "../../shared/services/user/userService";
import { User } from "../../shared/types";
import { ImSearch } from "react-icons/im";
import { Body, Container, NoTeamsGroup, SearchBar, SearchBarContainer, SearchBarGroup } from "./styles";
import { useAppDispatch, useAppSelector } from "../../states/app/hooks";
import { findTeamsByKeyword } from "../../states/features/teamSlice";
import { TeamCardSearch } from "./components/teamCard/TeamCardSearch";
import { Loading } from "../../shared/components/loading/Loading";
import { HiOutlineEmojiSad } from "react-icons/hi";

export const SearchTeam = () => {
  const dispatch = useAppDispatch();

  const [user, setUser] = useState<User>();

  const { value: teams, isLoading, isSuccess } = useAppSelector((state) => state.team);
  
  const defaultSearch = "";
  const [search, setSearch] = useState<string>(defaultSearch);

  const userId = getStoredId();
  useEffect(() => {
    const getUser = async () => {
      const user = await userService.findUser(userId);
      setUser(user);
    };
    getUser();

  }, []);

  useEffect(() => {
    dispatch(findTeamsByKeyword(search));
  }, [search]);

  const handleSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  }

  const isSearchBlank = search === defaultSearch;
  const found = teams.length > 0;
  const notFound = teams.length === 0 && search !== undefined;
  
  return (
    <Container>
      <SearchBarGroup className="group">
        <SearchBarContainer>
          <span className="search"><ImSearch/></span>
          <SearchBar 
            name="search" 
            placeholder="Pesquise o nome da equipe ou seu número"
            value={search}
            autoComplete="off"
            onChange={handleSearchChange}
          />
        </SearchBarContainer>
      </SearchBarGroup>
      <Body listSize={teams.length}>
        {
          isLoading && 
          <Loading size={90}/>
        }
        { 
          isSuccess && (
            (isSearchBlank) 
            ? <div></div>
            :
            (found)
            ? teams.map((team) => <TeamCardSearch key={team.id} team={team}/>)
            :
            (notFound && !isLoading)
            ? (
              <NoTeamsGroup>
                <span className="icon"><HiOutlineEmojiSad/></span>
                <span>Não encontrado</span>
              </NoTeamsGroup>
            )
            : null
          ) 
        }
      </Body>
    </Container>
  );
}