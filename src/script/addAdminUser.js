//SCRIPT KOJI SE IZVRIS SAMO JEDNOM DA SE POPUNI
//SQLITE BAZA SA JEDNIM ADMIN USEROM
//RUN IN CLI WITH:
//AKO JE OBRISANA datatabase.db PRILIKOM LOKAL DEVELOPMENTA
//ONDA RUCNO POKRENUTI SCRIPTU
//node src/script/addAdminUser.js
import bcrypt from "bcryptjs";
import { openDb } from "../utils/db.js";

async function addAdminUser(username, plainPassword) {
  const db = openDb();

  try {
    const hashedPassword = await bcrypt.hash(plainPassword, 10);

    // Prepare and run the insert statement
    const stmt = db.prepare(
      "INSERT INTO users (username, password, role) VALUES (?, ?, ?)"
    );
    const info = stmt.run(username, hashedPassword, "admin");

    console.log(
      `Admin user '${username}' added with ID: ${info.lastInsertRowid}`
    );
  } catch (error) {
    if (error.message.includes("UNIQUE constraint failed")) {
      console.error(`Error: User '${username}' already exists.`);
    } else {
      console.error("Error adding admin user:", error.message);
    }
  } finally {
    db.close(); // Always close the database connection
  }
}

const adminUsername = "admin";
const adminPassword = "admin123";

addAdminUser(adminUsername, adminPassword);
