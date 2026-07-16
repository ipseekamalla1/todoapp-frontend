export interface LoginRequest {
  email: string;
  password: string;
}


export interface RegisterRequest {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  gender: "MALE" | "FEMALE";
}


export interface AuthResponse {
  token: string;

}