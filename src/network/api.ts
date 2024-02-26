import apiClient from '@/src/network/client'
import { AxiosHeaders, AxiosResponse } from 'axios'

const API_BASE_URL = process.env.REACT_APP_API_URL

export const fetchData = async (url: string, queryData = {}, headers = {}) => {
  return await apiClient.get(`${API_BASE_URL}${url}`, {
    params: queryData,
    headers
  })
}

export const mutateData = async <ResponseType>({
  url,
  data,
  headers = {} as any | undefined
}: {
  url: string
  data: FormData
  headers?: AxiosHeaders | object
}): Promise<AxiosResponse<ResponseType>> => {
  return await apiClient.post(`${API_BASE_URL}${url}`, data, {
    headers
  })
}

export const mutatePutData = async ({
  url,
  data,
  headers = {} as any | undefined
}: {
  url: string
  data: FormData
  headers?: any
}) => {
  return await apiClient.put(`${API_BASE_URL}${url}`, data, {
    headers
  })
}

export const mutateDelete = async ({
  url,
  headers = {} as any | undefined
}: {
  url: string
  headers?: any
}) => {
  return await apiClient.delete(`${API_BASE_URL}${url}`, {
    headers
  })
}
