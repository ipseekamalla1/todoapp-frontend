import api from "./api";
import { LoginRequest, AuthResponse } from "@/types/auth";


export const loginUser = async(
    data:LoginRequest
):Promise<AuthResponse>=>{


    const response = await api.post(
        "/auth/login",
        data
    );


    return response.data;

};