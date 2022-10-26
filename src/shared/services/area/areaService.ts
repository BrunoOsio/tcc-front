import axios from "axios";
import { Area, Column } from "../../types";

const BASE_URL = "http://127.0.0.1:3000/api/areas/";

const findAreas = async (teamId?: number): Promise<Area[]> => {
  const endpoint = `${BASE_URL}`;
  const { data } = await axios.get(endpoint);

  return data;
}

export default { findAreas };