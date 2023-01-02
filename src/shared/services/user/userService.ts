import axios from "axios";
import { EditUserDTO } from "../../dtos/user/EditUserDTO";
import { NewUserDTO } from "../../dtos/user/NewUserDTO";
import { UserLoginDTO } from "../../dtos/user/UserLoginDTO";
import { User } from "../../types";
import { Team } from "../../types/team/Team";

const BASE_URL = "http://127.0.0.1:3000/api/users";

const isUniqueEmail = async (email: string): Promise<boolean> => {
  const endpoint = `${BASE_URL}/search?email=${email}`;
  const { data } = await axios.get(endpoint);
  const isUniqueEmail = data ? false : true; 
  return isUniqueEmail;
}

const register = async (user: NewUserDTO): Promise<boolean> => {
  const endpoint = `${BASE_URL}`;
  const { data } = await axios.post(endpoint, user);

  return data;
}

const update = async (editUserDto: EditUserDTO, userId: number): Promise<User> => {
  const endpoint = `${BASE_URL}/${userId}`;
  const { data } = await axios.patch(endpoint, editUserDto);

  return data;
}

const checkLogin = async (user: UserLoginDTO): Promise<User> => {
  const endpoint = `${BASE_URL}/checkLogin`;
  const { data } = await axios.post(endpoint, user);

  return data;
}

const findUser = async (userId: number): Promise<User> => {
  const endpoint = `${BASE_URL}/${userId}`;
  const { data } = await axios.get(endpoint);

  return data;
}

const findLeaderedTeams = async (userId: number): Promise<Team[]> => {
  const endpoint = `${BASE_URL}/${userId}/teamsLeadered`;
  const { data } = await axios.get(endpoint);

  return data;
}

export default { isUniqueEmail, register, update, checkLogin, findUser, findLeaderedTeams };