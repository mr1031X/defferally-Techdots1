import { UserRole } from "@prisma/client";
export interface Register {
  name: string;
  email: string;
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

export interface Login {
  email: string;
  password: string;
}

export interface UpdateUser {
  name?: string;
  email?: string;
  password?: string;
  phone?: string ;
  company?: string;
  role?: UserRole;
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
