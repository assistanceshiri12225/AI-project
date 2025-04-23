import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

// Define protected routes
const isProtectedRoute = createRouteMatcher([
  "/dashboard(.*)",
  "/resume(.*)",
  "/interview(.*)",
  "/ai-cover-letter(.*)",
  "/onboarding(.*)",
]);

export default clerkMiddleware(async (auth, req) => {
  const { userId, redirectToSignIn } = await auth();

  // Redirect to sign-in if route is protected & user not logged in
  if (!userId && isProtectedRoute(req)) {
    return redirectToSignIn();
  }

  // Allow request to proceed
  return NextResponse.next();
});

// Match all pages + API routes, skip static files
export const config = {
  matcher: [
    "/((?!_next|.*\\..*|favicon.ico).*)", // Simplified static exclusion
    "/(api|trpc)(.*)",
  ],
};
