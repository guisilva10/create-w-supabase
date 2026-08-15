import { NextRequest, NextResponse } from "next/server";
import { getSessionCookie } from "better-auth/cookies";
import { getUrl } from "./app/_lib/get-url";

export default function proxy(request: NextRequest) {
  const sessionCookie = getSessionCookie(request);
  const pathname = request.nextUrl.pathname;

  if (pathname === "/auth/sign-in" && sessionCookie) {
    return NextResponse.redirect(new URL(getUrl("/app")));
  }

  if (pathname.includes("/app") && !sessionCookie) {
    return NextResponse.redirect(new URL(getUrl("/auth/sign-in")));
  }
}

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
    // Always run for API routes
    "/(api|trpc)(.*)",
  ],
};
