import { Photo } from "../../types";

export type NewTeamDTO = {
  name: string;
  modality: string;
  number: number | undefined;
  photo: Photo | undefined;
}