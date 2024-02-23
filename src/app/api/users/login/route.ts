import { ILogin } from '@/src/interfaces/user';
import { loginUser } from '@/src/services/user';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  try {
    const reqBody: ILogin = await req.json();

    const response = await loginUser(reqBody);

    return NextResponse.json({
      success: true,
      response,
    });
  } catch (error) {
    return NextResponse.json({ error: error }, { status: 500 });
  }
}
