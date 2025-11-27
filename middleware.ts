import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

const allowedExact = new Set(['/', '/favicon.ico', '/robots.txt', '/sitemap.xml'])
const allowedPrefixes = ['/_next', '/_vercel', '/images', '/api']

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  if (allowedExact.has(pathname) || allowedPrefixes.some((prefix) => pathname.startsWith(prefix))) {
    return NextResponse.next()
  }

  return NextResponse.redirect(new URL('/', request.url))
}

export const config = {
  matcher: '/((?!_next/static|_next/image|favicon.ico|robots.txt|sitemap.xml|images|api).*)',
}

