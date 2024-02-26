import { UserRole } from "@prisma/client";
export interface IRegister {
  name?: string;
  email?: string;
  password: string;
  phone?: string | null;
  company?: string | null;
  role?: UserRole;
}
export interface User {
  id?: number
  name?: string;
  email?: string;
  password: string;
  phone?: string | null;
  company?: string | null;
  role?: UserRole;
}

export interface ILogin {
  email: string;
  password: string;
}

export interface UserInformationInputs {
  role: string
  full_name: string
  email: string
  password: string
}
export interface UserPasswordInputs {
  password: string
}
export interface UserRoleInputs {
  role: string
}