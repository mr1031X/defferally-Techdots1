import { getDataFromToken } from '@/src/helpers/decode-token';
import { UpdateUser } from '@/src/interfaces/request/user';
import { UserService } from '@/src/services/user';
import { NextRequest, NextResponse } from 'next/server';

const userService = new UserService();

export async function GET(req: NextRequest) {
  try {
    const userId = await getDataFromToken(req);
    const data = await userService.getUserById(userId);

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

    const reqPayload: UpdateUser = await req.json();
    const data = await userService.updateUserById(userId, reqPayload);

    const response = NextResponse.json({
      success: true,
      data,
    });

    return response;
  } catch (error) {
    return NextResponse.json({ error: error }, { status: 500 });
  }
}
