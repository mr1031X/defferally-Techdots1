import { useMutation } from 'react-query';
import { AuthService } from '@/src/network/auth';
import { Login, Register } from '@/src/interfaces/request/user';

const authService = new AuthService();

const signInUser = (data: Login) => authService.signIn(data);
const useSignInUser = () => useMutation(signInUser);

const signUpUser = (data: Register) => authService.signUp(data);
const useSignUpUser = () => useMutation(signUpUser);

export { useSignInUser, useSignUpUser };
