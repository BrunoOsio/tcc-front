import { Area, Modality, Photo, User } from "..";

export type Team = {
  id: number;
  name: string;
  modality: Modality;
  number: number;
  photo: Photo;
  areas: Area[];
  leaders: User[];
  members: User[];
  joinRequests: User[];
}