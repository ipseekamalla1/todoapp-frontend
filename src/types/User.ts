import { Gender } from "./enums";

export interface User {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  gender: Gender;
  createdAt: string;
}

export interface CreateUserRequest {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  gender: Gender;
}