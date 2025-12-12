import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  
  const locales = ['en', 'es'];
  
  // Si ya tiene un locale, continuar
  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  if (pathnameHasLocale) return NextResponse.next();

  // Redirigir a /en por defecto
  request.nextUrl.pathname = `/en${pathname}`;
  return NextResponse.redirect(request.nextUrl);
}

export const config = {
  // Excluir archivos estáticos, api, _next, y archivos con extensión
  matcher: ['/((?!_next|api|favicon.ico|.*\\..*).*)'],
};