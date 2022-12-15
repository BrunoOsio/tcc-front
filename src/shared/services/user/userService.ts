import axios from "axios";
import { NewUserDTO } from "../../dtos/user/NewUserDTO";
import { UserLoginDTO } from "../../dtos/user/UserLoginDTO";
import { User } from "../../types";

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

export default { isUniqueEmail, register, checkLogin, findUser };