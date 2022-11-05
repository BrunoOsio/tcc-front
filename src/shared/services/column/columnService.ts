import axios from "axios";
import { ColumnsOrderResult } from "../../../states/features/types/column/ColumnsOrderResult";
import { ColumnReferencedToAreaDTO } from "../../dtos/column/ColumnReferencedToAreaDTO";
import { NewColumnDTO } from "../../dtos/column/NewColumnDTO";
import { Column } from "../../types";

const BASE_URL = "http://127.0.0.1:3000/api/columns";

const findColumns = async (areaId: number): Promise<Column[]> => {
  const endpoint = `${BASE_URL}/ofArea/${areaId}`;

  const { data } = await axios.get(endpoint);

  return data;
}

const findColumnById = async (id: number): Promise<Column> => {
  const endpoint = `${BASE_URL}/${id}`;

  const { data } = await axios.get(endpoint);

  return data;
}

const createColumn = async (columnReferencedToAreaDTO: ColumnReferencedToAreaDTO) => {
  const { areaId, title } = columnReferencedToAreaDTO;

  const endpoint = `${BASE_URL}?areaId=${areaId}`;

  const newColumnDTO: NewColumnDTO = {
    title: title,
    isForDoneTasks: false
  }

  const { data } = await axios.post(endpoint, newColumnDTO);

  return data;
}

const patchReorder = async (columnsOrderResult: ColumnsOrderResult) => {
  const endpoint = `${BASE_URL}/reorder`;

  await axios.patch(endpoint, columnsOrderResult);
}

const findBiggestId = async () => {
  const endpoint = `${BASE_URL}/biggestId`;

  const { data } = await axios.get(endpoint);

  return data;
}

export default { findColumns, findColumnById, createColumn, patchReorder, findBiggestId };