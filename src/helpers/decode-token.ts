import { NextRequest } from 'next/server';
import jwt from 'jsonwebtoken';

export const getDataFromToken = async (request: NextRequest) => {
  try {
    const token = request.cookies.get('access_token')?.value || '';

    const decodedToken = jwt.verify(
      token as string,
      process.env.JWT_SECRET as string,
    ) as { userId: number };

    const userId = decodedToken.userId;

    return userId;
  } catch (error: any) {
    throw { message: 'Unauthorized', error };
  }
};
