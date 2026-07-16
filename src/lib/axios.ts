import axios from "axios";
import { getToken, removeToken } from "./auth";


const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});


api.interceptors.request.use(
  (config) => {

    const token = getToken();

    if (token) {

  console.log("JWT TOKEN SENT:", token);

  config.headers.Authorization =
      `Bearer ${token}`;

}
else {

  console.log("NO TOKEN FOUND");

}

    return config;
  },

  (error) => {
    return Promise.reject(error);
  }
);



api.interceptors.response.use(

  (response) => response,

  (error) => {

    if (error.response?.status === 401) {
      removeToken();
      window.location.href = "/login";
    }


    return Promise.reject(error);
  }

);


export default api;