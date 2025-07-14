import { openDb } from "@/app/lib/db";
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";

export async function GET() {
  const db = openDb();
  try {
    const users = db.prepare("SELECT is,username,role FROM users").all();
    return NextResponse.json(users);
  } catch (error) {
    console.error("Error fetching users:", error);
    return NextResponse.json(
      { message: "Error fetching users", error: error.message },
      { status: 500 }
    );
  }
}

export async function POST(req) {
  const db = openDb();

  try {
    const { username, password, role } = await req.json();
    if (!username || !password) {
      return NextResponse.json(
        { message: "Username and password su obavezni." },
        { status: 400 }
      );
    }
    const hashedPassword = await bcrypt.hash(password, 10);

    const stmt = db.prepare(
      "INSERT INTO users (username, password, role) VALUES (?, ?, ?)"
    );
    const info = stmt.run(username, hashedPassword, role || "user");

    return NextResponse.json(
      { id: info.lastInsertRowid, username, role: role || "user" },
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
