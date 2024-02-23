import { UserRole } from "@prisma/client";
export interface IRegister {
  name: string;
  email: string;
  password: string;
  phone?: string | null;
  company?: string | null;
  role: UserRole;
}

export interface ILogin {
  email: string;
  password: string;
}
