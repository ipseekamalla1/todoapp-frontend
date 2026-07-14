import api from "./api";
import { User, CreateUserRequest } from "@/types/User";


export const createUser = async (
  user: CreateUserRequest
): Promise<User> => {

  const response = await api.post<User>(
    "/users",
    user
  );

  return response.data;
};



export const getUserById = async (
  id: number
): Promise<User> => {

  const response = await api.get<User>(
    `/users/${id}`
  );

  return response.data;
};