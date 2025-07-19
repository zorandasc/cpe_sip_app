import { NextResponse } from "next/server";
import { jwtVerify } from "jose";

const JWT_SECRET = new TextEncoder().encode(process.env.JWT_SECRET);

//Your middleware.js is designed to handle authentication (verifying the JWT) 
// for protected routes.
// By including /api/users/[id] in the matcher:

//Centralized Authentication: It centralizes the initial check for a valid token for all
// your API endpoints that require authentication. This means your /api/users/[id] route
//handler won't even execute if the user isn't authenticated or has an invalid token,
// making your route handler cleaner.

//While the middleware handles authentication, the specific authorization logic
// (e.g., "only admins can delete any user, regular users can only delete their own account")
// should remain within your /api/users/[id]/route.js file. The middleware's job is to ensure
// a valid user is logged in; the route handler's job is to determine if that specific logged-in
// user has permission for that specific action on that specific resource.

//FILE KOJI PRESRECE SVE REQUESTE
// OD FRONTENDA PREMA BECKENDU
// AKO REQUEST ODGOVARAJU matcheru
export async function middleware(req) {
  const token = req.cookies.get("token")?.value;
  if (!token) return NextResponse.redirect(new URL("/login", req.url));

  try {
    await jwtVerify(token, JWT_SECRET);
    return NextResponse.next();
  } catch (error) {
    console.log(error);
    return NextResponse.redirect(new URL("/login", req.url));
  }
}

export const config = {
  matcher: [
    "/", // protect root page
    "/users", // protect users page
    "/api/save-config",
    "/api/users",
    "/api/users/:path*",
  ],
};
