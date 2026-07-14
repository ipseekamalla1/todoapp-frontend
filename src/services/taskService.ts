import api from "./api";
import { Task, CreateTaskRequest } from "@/types/Task";



export const getAllTasks = async (): Promise<Task[]> => {

  const response = await api.get<Task[]>(
    "/tasks"
  );

  return response.data;
};




export const getTasksByUser = async (
  userId:number
): Promise<Task[]> => {

  const response = await api.get<Task[]>(
    `/tasks/user/${userId}`
  );

  return response.data;
};




export const createTask = async (
  userId:number,
  task:CreateTaskRequest
): Promise<Task> => {

  const response = await api.post<Task>(
    `/tasks/${userId}`,
    task
  );

  return response.data;
};




export const getTaskById = async (
  id:number
): Promise<Task> => {

  const response = await api.get<Task>(
    `/tasks/${id}`
  );

  return response.data;
};