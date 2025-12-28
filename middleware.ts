import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname;

  if (path.startsWith('/admin')) {
    const adminToken = request.cookies.get('admin_session')?.value;
    
    // Simple check against an Env variable
    if (adminToken !== process.env.ADMIN_SECRET) {
      return NextResponse.redirect(new URL('/login', request.url));
    }
  }
  return NextResponse.next();
}