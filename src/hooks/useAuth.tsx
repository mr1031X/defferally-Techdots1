import { useMutation } from 'react-query';
import { AuthService } from '@/src/network/auth';
import { Login, Register } from '@/src/interfaces/request/user';

const authService = new AuthService();

const signInUser = (data: Login) => authService.signIn(data);
const useSignInUser = () => useMutation(signInUser);

const signUpUser = (data: Register) => authService.signUp(data);
const useSignUpUser = () => useMutation(signUpUser);


const login = async (apiResponse:any) => {
    const responseData = apiResponse.data.data
    const token = apiResponse.token
    localStorage.setItem('user', JSON.stringify(apiResponse))
    localStorage.setItem('user_id', `${responseData.user.id}`)
    localStorage.setItem('access_token', token)
  }
  const logout = () => {
    localStorage.removeItem('user')
    localStorage.removeItem('user_id')
    localStorage.removeItem('access_token')
  }
export { useSignInUser, useSignUpUser,login, logout };
