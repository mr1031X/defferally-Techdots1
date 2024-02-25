import { ILogin } from '@/src/interfaces/user';
import { loginUser } from '@/src/services/user';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  try {
    const reqBody: ILogin = await req.json();

    const data = await loginUser(reqBody);

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
