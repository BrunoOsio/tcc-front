import { User } from "../user/User";

export type UserLogin = {
  id: number;
  user: User;
  email: string;
  password: string;
}