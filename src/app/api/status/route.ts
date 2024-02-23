import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {

  const response = NextResponse.json({ message: 'Hello from Deferally API!' }, { status: 200 });
  return response;
}
