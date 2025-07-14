import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { openDb } from "@/lib/db";

const JWT_SECRET = process.env.JWT_SECRET;

export async function POST(req) {
  const { username, password } = await req.json();

  if (!username || !password) {
    return NextResponse.json(
      { message: "Username and password su obavezni." },
      { status: 400 }
    );
  }

  const db = openDb();

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
    return NextResponse.json({ error: "Pogrešan username." }, { status: 401 });
  }

  //COMPARE PASSWORD IZ BAZE I OD KORISNIKA
  const passwordMatch = await bcrypt.compare(password, user.password);

  if (!passwordMatch) {
    return NextResponse.json({ error: "Pogrešan password." }, { status: 401 });
  }

  //USERNAM I PASSWORD SU UREDNI SADA FORMIRAJ TOKEN
  const token = jwt.sign(
    { id: user.id, username: user.username, role: user.role },
    JWT_SECRET,
    {
      expiresIn: "1h",
    }
  );

  //POSALJI FRONTENDU VALIDAN TOKEN UNUTAR HEADERA
  const response = NextResponse.json({
    message: "Login successful",
    user: { id: user.id, username: user.username, role: user.role },
  });
  response.cookies.set("token", token, {
    httpOnly: true, // Prevents client-side JavaScript from accessing the cookie
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict", // Protects against CSRF attacks
    path: "/", // Cookie is valid for all paths
  });
  return response;
}
