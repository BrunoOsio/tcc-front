import axios from "axios";
import { AreasInformationsDTO } from "../../dtos/area/AreasInformationsDTO";
import { NewAreaDTO } from "../../dtos/area/NewAreaDTO";
import { UpdateLeaderDTO } from "../../dtos/area/UpdateLeaderDTO";
import { Area } from "../../types";

const BASE_URL = "http://127.0.0.1:3000/api/areas";

const findAreas = async (teamId: number): Promise<Area[]> => {
  const endpoint = `${BASE_URL}/ofTeam/${teamId}`;
  const { data } = await axios.get(endpoint);

  return data;
}

const findArea = async (areaId: number): Promise<Area> => {
  const endpoint = `${BASE_URL}/${areaId}`;
  const { data } = await axios.get(endpoint);

  return data;
}

const createArea = async (newArea: NewAreaDTO, teamId: number): Promise<Area> => {
  const endpoint = `${BASE_URL}?teamId=${teamId}`;
  const { data } = await axios.post(endpoint, newArea);

  return data;
}

const removeArea = async (areaId: number): Promise<void> => {
  const endpoint = `${BASE_URL}/${areaId}`;
  const { data } = await axios.delete(endpoint);

  return data;
}

const updateLeader = async(updateLeaderDTO: UpdateLeaderDTO): Promise<Area> => {
  const endpoint = `${BASE_URL}/updateLeader`;
  const { data } = await axios.put(endpoint, updateLeaderDTO);

  return data;
}

export default { findAreas, findArea, createArea, updateLeader, removeArea };