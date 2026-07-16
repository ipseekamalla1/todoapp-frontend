import api from "@/lib/axios";

import { setToken, removeToken } from "@/lib/auth";

import { LoginRequest, RegisterRequest, AuthResponse } from "@/types/auth";

export async function login(data: LoginRequest): Promise<AuthResponse> {
  const response = await api.post<AuthResponse>("/auth/login", data);

  const userData = response.data;

  // save JWT
  setToken(userData.token);

  // save user information
  localStorage.setItem(
    "user",
    JSON.stringify({
      id: userData.id,

      firstName: userData.firstName,

      lastName: userData.lastName,

      email: userData.email,
    }),
  );

  return userData;
}

export async function register(data: RegisterRequest) {
  const response = await api.post("/users", data);

  return response.data;
}

export function logout(): void {
  removeToken();

  localStorage.removeItem("user");
}
