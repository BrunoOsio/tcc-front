import axios from "axios";
import { NewTeamDTO } from "../../dtos/team/NewTeamDTO";
import { Team } from "../../types/team/Team";

const BASE_URL = "http://127.0.0.1:3000/api/teams";

const findTeams = async (userId: number): Promise<Team[]> => {
  const endpoint = `${BASE_URL}/searchUser?userId=${userId}`;
  const { data } = await axios.get(endpoint);

  return data;
}

const createTeam = async(newTeamDto: NewTeamDTO): Promise<Team> => {
  const endpoint = `${BASE_URL}`;
  const { data } = await axios.post(endpoint, newTeamDto)

  return data;
}

export default { findTeams, createTeam };