import { useEffect, useState } from "react";
import { storage } from "../../shared/globalStyles/globalValues";
import { useAppDispatch, useAppSelector } from "../../states/app/hooks";
import { findTeams } from "../../states/features/teamSlice";
import { TeamCard } from "./components/teamCard/TeamCard";
import { Container, GridWrapper, Header, Name, Teams, UserCard } from "./styles";
import userService from "../../shared/services/user/userService";
import { Icon } from "./components/icon/Icon";
import { User } from "../../shared/types";
import { Loading } from "../teamAreaBoard/components/loading/Loading";
import { getStoredId } from "../../shared/helpers/localStorageHelpers";

export const TeamSelector = () => {
  const [user, setUser] = useState<User>();
  
  const { value: teams, isLoading, isSuccess } = useAppSelector((state) => state.team);
  const dispatch = useAppDispatch();

  const listSize = teams.length;
  const userId = getStoredId();

  useEffect(() => {
    const getUser = async () => {
      const user = await userService.findUser(userId);
      setUser(user);
    };
    
    getUser();

    dispatch(findTeams(userId));
  }, []);

  return (
    <Container>
      <Header>
        {
          user &&
          <UserCard>
            <Icon user={user}/>
            <Name>{user.name}</Name>
          </UserCard>
        }
      </Header>
      <GridWrapper>
        <Teams listSize={listSize}>
          {
            isLoading && (
              <Loading/>
            ) 
          }
          {
            isSuccess && (
              teams.map((team, index) => <TeamCard key={index} team={team} />)
            )
          }
        </Teams>
      </GridWrapper>
    </Container>
  );
}