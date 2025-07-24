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

//FILE KOJI PRESRECE SVE REQUESTE AKO REQUEST ODGOVARAJU matcheru
// OD FRONTENDA PREMA BECKENDU
export async function middleware(req) {
  const token = req.cookies.get("token")?.value;
  //if (!token) return NextResponse.redirect(new URL("/login", req.url));

  try {
    //AKO NEMA TOKENA OVO CE UHVATITI CATCH PA REDIRECT
    if (!token) throw new Error("No token");

    await jwtVerify(token, JWT_SECRET);
    //TOKEN DOBAR NASTAVI DALJE
    return NextResponse.next();
  } catch (error) {
    //AKO JE DOSLO DO GRESKE PRILIKOM VALIDACIJE JWT
    //(ISTEKAO ILI NEKO TEMPEROVAO) A PRI TOME:
    const accepts = req.headers.get("accept") || "";
    //1.JE BIO API call (expecting JSON), return 401 JSON response
    //OVO JE BITNO JSON RESPONSE, JER AKO SE VRATI REDIRECT
    //FRONTEN TO NE PARSIRA DOBRO
    if (
      accepts.includes("application/json") ||
      req.nextUrl.pathname.startsWith("/api")
    ) {
      return new NextResponse(
        JSON.stringify({
          message: `Token invalid or expired. Please login again.`,
        }),
        {
          status: 401,
          headers: { "Content-Type": "application/json" },
        }
      );
    }
    //2.A AKO JE BIO PAGE REQUEST THAN REDIRECT
    return NextResponse.redirect(new URL("/login", req.url));
  }
}

//ZASTICENE API ROUTE I STRANICE
export const config = {
  matcher: [
    "/", // protect root page
    "/users", // protect users page
    "/load", //protct load page
    "/api/xml-new",
    "/api/xml-edit",
    "/api/xml-load",
    "/api/users",
    "/api/users/:path*",
  ],
};
