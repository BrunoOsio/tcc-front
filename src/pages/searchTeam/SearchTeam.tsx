import { ChangeEvent, useEffect, useState } from "react";
import { getStoredId } from "../../shared/helpers/localStorageHelpers";
import userService from "../../shared/services/user/userService";
import { User } from "../../shared/types";
import { ImSearch } from "react-icons/im";
import { Body, Container, SearchBar, SearchBarContainer, SearchBarGroup } from "./styles";
import { useAppDispatch, useAppSelector } from "../../states/app/hooks";
import { findTeamsByKeyword } from "../../states/features/teamSlice";
import { TeamCard } from "./components/teamCard/TeamCard";

export const SearchTeam = () => {
  const dispatch = useAppDispatch();

  const [user, setUser] = useState<User>();

  const { value: teams, isLoading, isSuccess } = useAppSelector((state) => state.team);
  
  const defaultSearch = "abc";
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

  console.log(teams);

  const handleSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  }

  return (
    <Container>
      <SearchBarGroup className="group">
        <SearchBarContainer>
          <span className="search"><ImSearch/></span>
          <SearchBar 
            name="search" 
            placeholder="Pesquise o nome da equipe ou seu número"
            value={search}
            onChange={handleSearchChange}
          />
        </SearchBarContainer>
      </SearchBarGroup>
      <Body listSize={teams.length}>
      {/* //TODO:  loading */}
        {
          teams.map((team) => <TeamCard key={team.id} team={team}/>)
        }
      </Body>
    </Container>
  );
}