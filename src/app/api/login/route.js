import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { openDb } from "@/utils/db";

const JWT_SECRET = process.env.JWT_SECRET;

if (!JWT_SECRET) {
  throw new Error("JWT_SECRET is not defined in environment variables");
}

//BECKEND ROUTA ZA LOGIN, VALIDACIJA USERNAM I PASS
//I VRACA VALIDAN JWT TOKEN BROWSERU
export async function POST(req) {
  const { username, password } = await req.json();

  if (!username || !password) {
    return NextResponse.json(
      { message: "Username and password su obavezni." },
      { status: 400 }
    );
  }

  const db = openDb();

  if (!db) {
    return NextResponse.json(
      { message: "Error connecting to SQLite." },
      { status: 500 }
    );
  }

  //FIND USER by username
  let user;

  try {
    user = db.prepare("SELECT * FROM users WHERE username = ?").get(username);
  } catch (error) {
    console.error("Database error finding user:", error);
    return NextResponse.json(
      { message: "Greška pri pretraživanju korisnika u bazi podataka." },
      { status: 500 }
    );
  }

  if (!user) {
    return NextResponse.json(
      { message: "Pogrešan username." },
      { status: 401 }
    );
  }

  //COMPARE PASSWORD IZ BAZE I OD KORISNIKA
  const passwordMatch = await bcrypt.compare(password, user.password);

  if (!passwordMatch) {
    return NextResponse.json(
      { message: "Pogrešan password." },
      { status: 401 }
    );
  }

  const expiresInSeconds = 60 * 60; // 60 minutes
  const expiresAt = Date.now() + expiresInSeconds * 1000;

  //USERNAM I PASSWORD SU UREDNI SADA FORMIRAJ TOKEN
  const token = jwt.sign(
    { id: user.id, username: user.username, role: user.role },
    JWT_SECRET,
    {
      expiresIn: expiresInSeconds,
    }
  );

  //POSALJI FRONTENDU VALIDAN TOKEN UNUTAR HEADERA
  const response = NextResponse.json({
    message: `Dobro došli ${user.username}`,
    user: { id: user.id, username: user.username, role: user.role },
    expiresAt, // 🕒 Send expiration timestamp
  });
  response.cookies.set("token", token, {
    httpOnly: true, // Prevents client-side JavaScript from accessing the cookie
    //secure: process.env.NODE_ENV === "production", THIS IS FOR HTTPS
    secure: false, //BUT WE IN KORP NETWORK ARE USING HTTP
    sameSite: "lax", // Protects against CSRF attacks
    path: "/", // Cookie is valid for all paths
  });
  return response;
}
