import {
  useMutation,
  UseMutationOptions,
  UseMutationResult,
  useQuery,
  UseQueryOptions,
  UseQueryResult
} from 'react-query'

export const useGetQuery = <paramsDataType, errorType>(
  options: UseQueryOptions<paramsDataType, errorType>
): UseQueryResult<paramsDataType, errorType> => {
  return useQuery<paramsDataType, errorType>(options)
}

export const useMutate = <
  responseType,
  errorType,
  paramsDataType,
  requestContext
>(
  options: UseMutationOptions<
    responseType,
    errorType,
    paramsDataType,
    requestContext
  >
): UseMutationResult<
  responseType,
  errorType,
  paramsDataType,
  requestContext
> => {
  return useMutation<responseType, errorType, paramsDataType, requestContext>({
    // onSettled: () => queryClient.invalidateQueries({ queryKey: options.mutationKey }),
    ...options
  })
}
