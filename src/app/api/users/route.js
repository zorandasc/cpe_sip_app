import { openDb } from "@/utils/db";
import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";

const JWT_SECRET = process.env.JWT_SECRET;

//BECKEND API RUTE ZA DOBVLJANJE SVIH KORISNIKA,
export async function GET() {
  const db = openDb();
  try {
    const users = db.prepare("SELECT id, username, role FROM users").all();
    return NextResponse.json(users);
  } catch (error) {
    console.error("Error fetching users:", error);
    return NextResponse.json(
      { message: "Error fetching users", error: error.message },
      { status: 500 }
    );
  }
}

//BECKEND API RUTE ZA KREIRANJE NOVOG KORISNIKA
export async function POST(req) {
  // 1. Authentication: Verify the JWT from the httpOnly cookie
  const token = req.cookies.get("token")?.value;

  if (!token) {
    return NextResponse.json(
      { message: "Autentifikcaija potrebna." },
      { status: 401 }
    );
  }

  let decodedToken;
  try {
    decodedToken = jwt.verify(token, JWT_SECRET);
  } catch (error) {
    console.error("Token verification failed:", error.message);
    return NextResponse.json(
      { message: "Ne validan token ili istekao." },
      { status: 401 }
    );
  }

  //AUTHORIZACIJA
  const authenticatedUserRole = decodedToken.role;

  try {
    if (authenticatedUserRole !== "admin") {
      // If not admin
      return NextResponse.json(
        { message: "Ne autorizovani za dodavanje novog korisnika." },
        { status: 403 }
      );
    }
    //VALIDACIJA USERNAME PASSWORD
    const { username, password } = await req.json();

    if (!username || !password) {
      return NextResponse.json(
        { message: "Username and password su obavezni." },
        { status: 400 }
      );
    }
    //KREIRANJE NOVOG KORISNIKA U BAZI
    const db = openDb();

    const hashedPassword = await bcrypt.hash(password, 10);

    const stmt = db.prepare(
      "INSERT INTO users (username, password, role) VALUES (?, ?, ?)"
    );
    const info = stmt.run(username, hashedPassword, "user");

    return NextResponse.json(
      { id: info.lastInsertRowid, username, role: "user" },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error creating user:", error);
    if (error.message.includes("UNIQUE constraint failed")) {
      return NextResponse.json(
        { message: "Korisnicko ime vec postoji." },
        { status: 409 }
      );
    }
    return NextResponse.json(
      { message: "Greska prilikom kreiranja korisnika.", error: error.message },
      { status: 500 }
    );
  }
}
