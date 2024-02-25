import { useGetQuery, useMutate } from '@/network/requestProcessor'
import apiClient from '@/network/client'
import { AxiosResponse } from 'axios'
import {
  IUserSignInPayload,
  IUserSignInResponse,
  IUserSignUpPayload,
  IUserSignUpResponse
} from '@/src/interfaces/requests/user/index'

const endpoints = {
  signUp: '/register',
  signIn: '/login',
  getUser: '/user'
}

// Queries

export const useGetUser = () =>
  useGetQuery({
    queryKey: 'current_user_data',
    queryFn: (): Promise<AxiosResponse<IUserSignInResponse, undefined>> =>
      apiClient.get(endpoints.getUser)
  })

export const useSignIn = () =>
  useMutate({
    mutationFn: (
      data: IUserSignInPayload
    ): Promise<AxiosResponse<IUserSignInResponse, IUserSignInPayload>> =>
      apiClient.post(endpoints.signIn, data)
  })

export const useSignUp = () =>
  useMutate({
    mutationFn: (
      data: IUserSignUpPayload
    ): Promise<AxiosResponse<IUserSignUpResponse, IUserSignUpPayload>> =>
      apiClient.post(endpoints.signUp, data)
  })
