import { NextResponse } from "next/server";
import { openDb } from "@/lib/db.js"; // Ensure correct path including .js extension
import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET;

export async function DELETE(req, { params }) {
  const { id } = await params;

  // 1. Authentication: Verify the JWT from the httpOnly cookie
  const token = req.cookies.get("token")?.value;

  if (!token) {
    return NextResponse.json(
      { message: "Autentifikacija potrebna." },
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

  // 2. Authorization: Check if the authenticated user has permission to delete
  //    - Only an 'admin' role can delete any user, but not admin
  const authenticatedUserRole = decodedToken.role;

  try {
    if (authenticatedUserRole !== "admin" && parseInt(id, 10) !== 1) {
      // If not admin AND not trying to delete admin user
      return NextResponse.json(
        { message: "Neautorizovani za brisanje korisnika." },
        { status: 403 }
      );
    }

    const db = openDb(); // Get the database instance

    //DELETE FROM DATABASE
    const stmt = db.prepare("DELETE FROM users WHERE id = ?");
    const info = stmt.run(id);

    //AKO NIJE BILO PROMJENA U TABELI
    if (info.changes === 0) {
      return NextResponse.json(
        { message: "Korisnik sa tim id ne postoji" },
        { status: 404 }
      );
    }

    return NextResponse.json(
      { message: "Korisnik uspiješno obrisan." },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error creating user:", error);

    return NextResponse.json(
      { message: "Greska prilikom brisanja korisnika.", error: error.message },
      { status: 500 }
    );
  }
}
