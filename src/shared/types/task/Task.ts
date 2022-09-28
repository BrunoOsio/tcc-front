import { User } from "..";

export type Task = {
  id: number;
  title: string;
  description?: string;
  createdAt: string;
  limitAt?: string;
  isFinished: boolean;
  owner?: User;
  members: User[];
}