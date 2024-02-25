import {
    User,
    UserInformationInputs,
    UserPasswordInputs
  } from '@/src/interfaces/users'
  
  export interface IUserSignInPayload {
      email: string
      password: string
  }
  export interface IUserSignInResponse {
    user: User
  }
  
  export interface IUserSignUpPayload {
    user?: Partial<UserInformationInputs> &
    Partial<UserPasswordInputs>
  }

  export interface IUserSignUpResponse extends IUserSignInResponse {
    token: string
  }
  