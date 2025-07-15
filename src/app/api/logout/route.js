import { NextResponse } from "next/server";

const JWT_SECRET = process.env.JWT_SECRET;

//While deleting the cookie prevents the browser from sending the token,
//the JWT itself remains cryptographically valid until its expiresIn time.
// If a malicious actor somehow obtained the JWT before the user logged out,
// they could still use that token to access protected resources until it
// naturally expires.

export async function POST(req) {
  const response = NextResponse.json({ message: "Logout successful" });

  response.cookies.set("token", "", {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict",
    path: "/",
    expires: new Date(0), // Set expiration to a past date
    // OR use maxAge: 0, which also tells the browser to delete it immediately
    // maxAge: 0,
  });

  return response;
}
