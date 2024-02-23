import { IRegister } from '@/src/interfaces/user';
import { registerUser } from '@/src/services/user';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  try {
    const reqBody: IRegister = await req.json();

    const response = await registerUser(reqBody);

    return NextResponse.json({
      success: true,
      response,
    });
  } catch (error) {
    return NextResponse.json({ error: error }, { status: 500 });
  }
}
