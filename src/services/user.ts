import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { User } from '@prisma/client';
import prisma from '@/prisma';
import { ILogin, IRegister } from '../interfaces/user';

export class UserService {
  async registerUser(payload: IRegister) {
    try {
      const { email, password } = payload;

      const existingUser = await prisma.user.findUnique({
        where: {
          email,
        },
      });

      if (existingUser) {
        return { message: 'User already exists' };
      }

      const hashedPassword = await bcrypt.hash(password, 10);

      const createdUser = await prisma.user.create({
        data: {
          ...payload,
          password: hashedPassword,
        },
      });

      const token = jwt.sign(
        { userId: createdUser.id },
        process.env.JWT_SECRET as string,
        { expiresIn: '30d' },
      );

      return {
        user: createdUser,
        token,
        message: 'User registered successfully',
      };
    } catch (error) {
      throw { message: 'Internal Server Error', error };
    }
  }

  async loginUser(payload: ILogin) {
    try {
      const { email, password } = payload;

      const user = await prisma.user.findUnique({
        where: { email },
      });

      if (!user) {
        return { message: 'Invalid credentials' };
      }

      const passwordMatch = await bcrypt.compare(password, user.password);

      if (!passwordMatch) {
        return { message: 'Invalid credentials' };
      }

      const token = jwt.sign(
        { userId: user.id },
        process.env.JWT_SECRET as string,
        { expiresIn: '30d' },
      );

      return {
        user: user,
        token,
        message: 'User is successfully loggedIn',
      };
    } catch (error) {
      throw { message: 'Internal Server Error', error };
    }
  }

  async getUsers() {
    try {
      const users = await prisma.user.findMany();
      return users;
    } catch (error) {
      throw { message: 'Internal Server Error', error };
    }
  }

  async getUserById(userId: string) {
    try {
      const user = await prisma.user.findUnique({
        where: { id: userId },
      });

      if (!user) {
        throw new Error('User not found');
      }

      return user;
    } catch (error) {
      throw { message: 'Internal Server Error', error };
    }
  }

  async updateUserById(userId: string, payload: User) {
    try {
      const { password } = payload;

      const hashedPassword = await bcrypt.hash(password, 10);

      const updatedUser = await prisma.user.update({
        where: { id: userId },
        data: {
          ...payload,
          password: hashedPassword,
        },
      });

      return updatedUser;
    } catch (error) {
      throw { message: 'Internal Server Error', error };
    }
  }
}
