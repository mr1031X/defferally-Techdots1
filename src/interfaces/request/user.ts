import { UserRole } from "@prisma/client";
export interface Register {
  name: string;
  email: string;
  password: string;
  phone?: string | null;
  company?: string | null;
  role: UserRole;
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
