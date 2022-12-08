import { ChangeEvent, useEffect, useState } from "react";
import { getStoredId } from "../../shared/helpers/localStorageHelpers";
import { ImSearch } from "react-icons/im";
import { Body, Container, NoTeamsGroup, SearchBar, SearchBarContainer, SearchBarGroup } from "./styles";
import { useAppDispatch, useAppSelector } from "../../states/app/hooks";
import { findTeamsByKeyword } from "../../states/features/teamSlice";
import { TeamCardSearch } from "./components/teamCardSearch/TeamCardSearch";
import { Loading } from "../../shared/components/loading/Loading";
import { HiOutlineEmojiSad } from "react-icons/hi";
import { findUser } from "../../states/features/userSlice";
import { Sidebar } from "../../shared/components/sidebar/Sidebar";
import { Navbar } from "../../shared/components/navbar/Navbar";

export const SearchTeam = () => {
  const dispatch = useAppDispatch();
  const { value: user, isLoading: isUserLoading, isSuccess: isUserSuccess } = useAppSelector((state) => state.user);

  const { value: teams, isLoading: isTeamLoading, isSuccess: isTeamSuccess } = useAppSelector((state) => state.team);
  
  const defaultSearch = "";
  const [search, setSearch] = useState<string>(defaultSearch);

  const userId = getStoredId();
  useEffect(() => {
    dispatch(findUser(userId));
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
      <Navbar/>
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
          isTeamLoading && 
          <Loading size={90}/>
        }
        { 
          isTeamSuccess && (
            (isSearchBlank) 
            ? null
            :
            (found)
            ? teams.map((team) => <TeamCardSearch key={team.id} team={team}/>)
            :
            (notFound && !isTeamLoading)
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