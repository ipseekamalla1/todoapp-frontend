import api from "@/lib/axios";
import { setToken, removeToken } from "@/lib/auth";

import { LoginRequest, RegisterRequest } from "@/types/auth";

export async function login(data: LoginRequest): Promise<string> {
  const response = await api.post<string>("/auth/login", data);

  const token = response.data;

  setToken(token);

  return token;
}

export async function register(data: RegisterRequest) {
  const response = await api.post("/users", data);

  return response.data;
}

export function logout(): void {
  removeToken();
}
