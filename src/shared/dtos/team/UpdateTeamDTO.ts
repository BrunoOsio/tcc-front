import { Photo } from "../../types";

export type UpdateTeamDTO = {
  name: string;
  modality: string;
  number: number | undefined;
  photo?: Photo;
  isChangedPhoto: boolean;
}