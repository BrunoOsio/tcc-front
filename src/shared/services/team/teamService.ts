import axios from "axios";
import { RequestJoinDTO } from "../../../pages/searchTeam/components/teamCardSearch/dto/RequestJoinDTO";
import { NewTeamDTO } from "../../dtos/team/NewTeamDTO";
import { IsUserOnTeamDTO } from "../../dtos/team/IsUserOnTeamDTO";
import { Team } from "../../types/team/Team";
import { RemoveMemberDTO } from "../../../pages/teamMembers/components/dto/RemoveMemberDTO";

const BASE_URL = "http://127.0.0.1:3000/api/teams";

const findTeam = async (teamId: number): Promise<Team> => {
  const endpoint = `${BASE_URL}/${teamId}`;
  const { data } = await axios.get(endpoint);

  return data;
}

const findTeams = async (userId: number): Promise<Team[]> => {
  const endpoint = `${BASE_URL}/searchUser?userId=${userId}`;
  const { data } = await axios.get(endpoint);

  return data;
}

const createTeam = async (newTeamDto: NewTeamDTO, leaderId: number): Promise<Team> => {
  const endpoint = `${BASE_URL}?userId=${leaderId}`;
  const { data } = await axios.post(endpoint, newTeamDto)

  return data;
}

const findByKeyword = async (key: string): Promise<Team[]> => {
  if (key === "") return [];

  const endpoint = `${BASE_URL}/searchKey?key=${key}`;
  const { data } = await axios.get(endpoint);

  return data;
}

const requestJoin = async (joinRequestDto: RequestJoinDTO): Promise<void> => {
  const {userId, team} = joinRequestDto;
  const endpoint = `${BASE_URL}/${team.id}/addRequest/${userId}`;
  const { data } = await axios.put(endpoint, joinRequestDto);

  return data;
}

const removeJoin = async (joinRequestDto: RequestJoinDTO): Promise<void> => {
  const {userId, team} = joinRequestDto;
  const endpoint = `${BASE_URL}/${team.id}/removeRequest/${userId}`;
  const { data } = await axios.put(endpoint, joinRequestDto);

  return data;
}

const removeMember = async (removeMemberDto: RemoveMemberDTO): Promise<void> => {
  const {teamId, userId} = removeMemberDto;

  const endpoint = `${BASE_URL}/${teamId}/removeMember/${userId}`;
  await axios.put(endpoint);
}

const acceptRequest = async (joinRequestDto: RemoveMemberDTO): Promise<void> => {
  const {teamId, userId} = joinRequestDto;

  const endpoint = `${BASE_URL}/${teamId}/acceptRequest/${userId}`;
  await axios.put(endpoint);
}

const rejectRequest = async (joinRequestDto: RemoveMemberDTO): Promise<void> => {
  const {teamId, userId} = joinRequestDto;

  const endpoint = `${BASE_URL}/${teamId}/removeRequest/${userId}`;
  await axios.put(endpoint);
}


const isUserOnTeam = async (verifyUserOnTeamDto: IsUserOnTeamDTO): Promise<boolean> => {
  const {team, user} = verifyUserOnTeamDto;

  const endpoint = `${BASE_URL}/${team.id}/hasUser/${user.id}`;
  const { data } = await axios.get(endpoint);

  return data;
}

export default { findTeam, findTeams, createTeam, findByKeyword, requestJoin, removeJoin, removeMember, isUserOnTeam, acceptRequest, rejectRequest };