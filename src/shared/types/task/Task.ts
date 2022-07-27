import { Moment } from "moment";
import { User } from "..";

export type Task = {
  id: number;
  title: string;
  description: string;
  createdAt: Moment;
  limitAt: Moment;
  members: User[];
}