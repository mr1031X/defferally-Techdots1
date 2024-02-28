import { Register } from '@/src/interfaces/request/user';
import { NextRequest, NextResponse } from 'next/server';
import { UserService } from '@/src/services/user';

const userService = new UserService();

export async function POST(req: NextRequest) {
  try {
    const reqBody: Register = await req.json();

    const data = await userService.registerUser(reqBody);

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
