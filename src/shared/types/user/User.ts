import { UserPhoto } from "./userPhoto/UserPhoto";

export type User = {
  id: number;
  name: string;
  //photo?: UserPhoto; //TODO: how to do that
  email: string;
  password: string;
}