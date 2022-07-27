import { User } from "..";

export type Task = {
  id: number;
  title: string;
  description: string;
  createdAt: Date;
  limitAt: Date;
  members: User[];
}