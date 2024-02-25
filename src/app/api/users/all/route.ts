import { getDataFromToken } from '@/src/helpers/decode-token';
import { getUsers } from '@/src/services/user';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest) {
  try {
    const userId = await getDataFromToken(req);
    const data = await getUsers();

    const response = NextResponse.json({
      success: true,
      data,
    });

    return response;
  } catch (error) {
    return NextResponse.json({ error: error }, { status: 500 });
  }
}
