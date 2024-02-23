import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { User } from '@prisma/client';
import prisma from '@/prisma';
import { ILogin, IRegister } from '../interfaces/user';

export const registerUser = async (payload: IRegister) => {
  try {
    const { name, email, password, phone, company, role } = payload;

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
      data: { name, email, password: hashedPassword, phone, company, role },
    });

    const token = jwt.sign(
      { userId: createdUser.id },
      process.env.JWT_SECRET as string,
      { expiresIn: '30d' },
    );

    return {
      userId: createdUser.id,
      token,
      message: 'User registered successfully',
    };
  } catch (error) {
    throw { message: 'Internal Server Error', error };
  }
};

export const loginUser = async (payload: ILogin) => {
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
      userId: user.id,
      token,
      message: 'User is successfully loggedIn',
    };
  } catch (error) {
    throw { message: 'Internal Server Error', error };
  }
};

export const getUsers = async () => {
  try {
    const users = await prisma.user.findMany();
    return users;
  } catch (error) {
    throw { message: 'Internal Server Error', error };
  }
};

export const getUserById = async (userId: string) => {
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
};

export const updateUserById = async (payload: User) => {
  try {
    const { id: userId, name, email, phone, company, role, password } = payload;

    const hashedPassword = await bcrypt.hash(password, 10);

    const updatedUser = await prisma.user.update({
      where: { id: userId },
      data: { name, email, phone, company, role, password: hashedPassword },
    });

    return updatedUser;
  } catch (error) {
    throw { message: 'Internal Server Error', error };
  }
};
