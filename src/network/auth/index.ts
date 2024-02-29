import { Login, Register,UpdateUser } from '@/src/interfaces/request/user';
import { HttpService } from '../http';

export class AuthService extends HttpService {

  signIn = async (data: Login): Promise<any> => {
    try {
      const apiResponse = await this.post(`api/users/login`, data);

      return apiResponse;
    } catch (error) {
      throw error;
    }
  };

  signUp = async (data: UpdateUser): Promise<any> => {
    try {
      const apiResponse = await this.post(`api/users/register`, data);

      return apiResponse;
    } catch (error) {
      throw error;
    }
  };
  getUserById = async (userId: number): Promise<any> => {
    try {
      const apiResponse = await this.get(`api/users/${userId}`);

      return apiResponse;
    } catch (error) {
      throw error;
    }
  };
  updateUserById = async (userId: number, data: UpdateUser): Promise<any> => {
    try {
      const apiResponse = await this.put(`api/users/${userId}`, data);

      return apiResponse;
    } catch (error) {
      throw error;
    }
  };
}
