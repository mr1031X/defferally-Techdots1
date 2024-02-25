import { getDataFromToken } from '@/src/helpers/decode-token';
import { getUserById, updateUserById } from '@/src/services/user';
import { User } from '@prisma/client';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest) {
  try {
    const userId = await getDataFromToken(req);
    const data = await getUserById(userId);

    const response = NextResponse.json({
      success: true,
      data,
    });

    return response;
  } catch (error) {
    return NextResponse.json({ error: error }, { status: 500 });
  }
}

export async function PUT(req: NextRequest) {
  try {
    const userId = await getDataFromToken(req);

    const reqPayload: User = await req.json();
    const data = await updateUserById(userId, reqPayload);

    const response = NextResponse.json({
      success: true,
      data,
    });

    return response;
  } catch (error) {
    return NextResponse.json({ error: error }, { status: 500 });
  }
}
