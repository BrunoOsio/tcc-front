import axios from "axios";
import { Team } from "../../types/team/Team";

const BASE_URL = "http://127.0.0.1:3000/api/teams";

const findTeams = async (userId?: number): Promise<Team[]> => {
  const endpoint = `${BASE_URL}`;
  const { data } = await axios.get(endpoint);

  return data;
}

export default { findTeams };