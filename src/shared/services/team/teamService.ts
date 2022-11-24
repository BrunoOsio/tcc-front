import axios from "axios";
import { NewTeamDTO } from "../../dtos/team/NewTeamDTO";
import { Team } from "../../types/team/Team";

const BASE_URL = "http://127.0.0.1:3000/api/teams";

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

export default { findTeams, createTeam, findByKeyword };