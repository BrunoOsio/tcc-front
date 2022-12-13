import axios from "axios";
import { NewAreaDTO } from "../../dtos/area/NewAreaDTO";
import { Area } from "../../types";

const BASE_URL = "http://127.0.0.1:3000/api/areas";

const findAreas = async (teamId: number): Promise<Area[]> => {
  const endpoint = `${BASE_URL}/ofTeam/${teamId}`;
  const { data } = await axios.get(endpoint);

  return data;
}

const createArea = async(newArea: NewAreaDTO, teamId: number): Promise<Area> => {
  const endpoint = `${BASE_URL}?teamId=${teamId}`;
  const { data } = await axios.post(endpoint, newArea);

  return data;
}

export default { findAreas, createArea };