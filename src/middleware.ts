import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname;

  const isPublicPath =
    path === '/login' || path === '/signup' || path === '/';

  const token = request.cookies.get('access_token')?.value || undefined;

  if (isPublicPath && token) {    
    return NextResponse.redirect(new URL('/exchanges', request.nextUrl));
  }

  if (!isPublicPath && !token) {
    return NextResponse.redirect(new URL('/login', request.nextUrl));
  }
}

export const config = {
  matcher: ['/', '/login', '/signup', '/exchanges', '/profile'],
};
