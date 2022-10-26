import axios from "axios";
import { ColumnsOrderResult } from "../../../states/features/types/column/ColumnsOrderResult";
import { Column } from "../../types";

const BASE_URL = "http://127.0.0.1:3000/api/columns/";

const findColumns = async (areaId: number): Promise<Column[]> =>{
  const endpoint = `${BASE_URL}ofArea/${areaId}`;
  const { data } = await axios.get(endpoint);

  return data;
}

const findColumnById = async (id: number): Promise<Column> => {
  const endpoint = `${BASE_URL + id}`;

  const { data } = await axios.get(endpoint);

  return data;
}

const patchReorder = async (columnsOrderResult: ColumnsOrderResult) => {
  const endpoint = `${BASE_URL}reorder`;

  await axios.patch(endpoint, columnsOrderResult);
}

export default { findColumns, findColumnById, patchReorder };