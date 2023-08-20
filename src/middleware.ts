import { authMiddleware } from "@clerk/nextjs";

// This example protects all routes including api/trpc routes
// Please edit this to allow other routes to be public as needed.
// See https://clerk.com/docs/nextjs/middleware for more information about configuring your middleware
export default authMiddleware({
  publicRoutes: ['/sign-in/[[...index]]', '/sign-up/[[...index]]', '/sign-out/[[...index]]', '/forgot-password/[[...index]]', '/reset-password/[[...index]]', '/verify-email/[[...index]]', '/api/auth/[...index]'],
});

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};
