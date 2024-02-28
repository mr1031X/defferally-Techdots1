import { User } from "@prisma/client";

export interface RegisterServiceResponse {
  user?: User;
  token?: string;
  message: string;
}

export interface LoginServiceResponse {
  user?: User;
  token?: string;
  message: string;
}

export interface RegisterServiceResponse {
  success: boolean;
  data: RegisterServiceResponse;
}

export interface ILoginServiceResponse {
  success: boolean;
  data: LoginServiceResponse;
}

export interface GetUsersResponse {
  success: boolean;
  data: User[];
}

export interface GetUserResponse {
  success: boolean;
  data: User;
}

export interface UpdateUserResponse {
  success: boolean;
  data: User;
}
