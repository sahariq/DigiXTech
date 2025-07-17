import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Allow only landing page and dashboard root
  if (pathname === '/' || pathname === '/dashboard') {
    return NextResponse.next();
  }

  // Allow static files, API routes, and Next.js internals
  if (
    pathname.startsWith('/_next') ||
    pathname.startsWith('/api') ||
    pathname.startsWith('/public') ||
    pathname === '/favicon.ico' ||
    pathname.match(/\.(ico|png|jpg|jpeg|svg|webp|css|js|json)$/)
  ) {
    return NextResponse.next();
  }

  // Optionally, block known bots by User-Agent (basic example)
  const userAgent = request.headers.get('user-agent') || '';
  if (/bot|crawl|spider|slurp|bing|duckduck|baidu|yandex/i.test(userAgent)) {
    return NextResponse.redirect(new URL('/', request.url));
  }

  // Redirect all other routes to landing page
  return NextResponse.redirect(new URL('/', request.url));
}

export const config = {
  matcher: '/:path*',
}; 