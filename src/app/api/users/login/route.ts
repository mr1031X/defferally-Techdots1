import { Login } from '@/src/interfaces/request/user';
import { UserService } from '@/src/services/user';
import { NextRequest, NextResponse } from 'next/server';

const userService = new UserService();

export async function POST(req: NextRequest) {
  try {
    const reqBody: Login = await req.json();

    const data = await userService.loginUser(reqBody);

    const response = NextResponse.json({
      success: true,
      data,
    });

    response.cookies.set('access_token', data.token as string, { httpOnly: true });

    return response;
  } catch (error) {
    return NextResponse.json({ error: error }, { status: 500 });
  }
}
