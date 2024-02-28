import { UserRole } from '@prisma/client';

export interface User {
  id?: number;
  name?: string;
  email?: string;
  password: string;
  phone?: string | null;
  company?: string | null;
  role?: UserRole;
}

export interface UserInformationInputs {
  role: string;
  full_name: string;
  email: string;
  password: string;
}
export interface UserPasswordInputs {
  password: string;
}
export interface UserRoleInputs {
  role: string;
}

export interface IUserSignInPayload {
  email: string;
  password: string;
}
export interface IUserSignInResponse {
  user: User;
}

export interface IUserSignUpPayload {
  user?: Partial<UserInformationInputs> & Partial<UserPasswordInputs>;
}

export interface IUserSignUpResponse extends IUserSignInResponse {
  token: string;
}
