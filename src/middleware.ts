import createMiddleware from "next-intl/middleware";
import { auth } from "@/lib/auth";
import { NextResponse } from "next/server";
import type { NextRequest } from 'next/server';

const I18nMiddleware = createMiddleware({
  locales: ["en", "fa"],
  defaultLocale: "en",
});

export default auth((req) => {
  const path = req.nextUrl.pathname;
  const isAuthPage = path.startsWith("/login") || path.startsWith("/register");
  const isDashboardPage = path.startsWith("/dashboard");
  const isUsernamePage = /^\/([^\/]+)$/.test(path); // Matches '/username' but not '/username/something'
  const isHomePage = path === "/" || /^\/[a-z]{2}(?:\/)?$/.test(path); // Matches '/', '/en', '/fa', '/en/', '/fa/'
  const isMarketingPage = ["/features", "/pricing", "/about"].includes(path);

  // Allow access to marketing pages without authentication
  if (isMarketingPage) {
    return NextResponse.next();
  }

  // Allow access to username pages without authentication or localization
  if (isUsernamePage && !isHomePage) {
    return NextResponse.next();
  }

  // Allow access to non-dashboard pages without authentication
  if (!isDashboardPage) {
    return I18nMiddleware(req);
  }

  // Handle authentication for dashboard pages
  if (isDashboardPage) {
    const token = req.auth?.user;
    if (!token) {
      const loginUrl = new URL("/login", req.url);
      loginUrl.searchParams.set("from", req.nextUrl.pathname + req.nextUrl.search);
      return NextResponse.redirect(loginUrl);
    }
  }

  return I18nMiddleware(req);
}) as any; // Type assertion to avoid TypeScript errors

export const config = {
  matcher: [
    "/((?!api|_next/static|_next/image|favicon.ico).*)",
  ],
};