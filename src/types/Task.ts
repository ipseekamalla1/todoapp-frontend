import { Status, Priority } from "./enums";

export interface Task {
  id: number;
  title: string;
  description?: string;
  dueDate?: string;
  status: Status;
  priority: Priority;
  createdAt: string;
  userId: number;
}

export interface CreateTaskRequest {

  title:string;

  description?:string;

  dueDate?:string;

  status:Status;

  priority:Priority;

}