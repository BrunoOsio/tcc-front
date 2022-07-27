import { Area, Modality, User } from "..";
import { TeamPhoto } from "./teamPhoto/TeamPhoto";

export type Team = {
  id: number;
  name: string;
  modality: Modality;
  number: number;
  photo: TeamPhoto;
  areas: Area[];
  leader: User;
  joinRequests: User[];
}