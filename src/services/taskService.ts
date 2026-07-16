import api from "./api";
import { Task, CreateTaskRequest } from "@/types/Task";


export const getTasksByUser = async (userId:number):Promise<Task[]> =>
  (await api.get<Task[]>(`/tasks/user/${userId}`)).data;



export const createTask = async (
  userId:number,
  task:CreateTaskRequest
):Promise<Task> =>
  (await api.post<Task>(`/tasks/${userId}`,task)).data;



export const updateTask = async (
  id:number,
  task:Partial<Task>
):Promise<Task> =>
  (await api.put<Task>(`/tasks/${id}`,task)).data;



export const deleteTask = async (
  id:number
):Promise<string> =>
  (await api.delete(`/tasks/${id}`)).data;



export const getTaskById = async (
  id:number
):Promise<Task> =>
  (await api.get<Task>(`/tasks/${id}`)).data;