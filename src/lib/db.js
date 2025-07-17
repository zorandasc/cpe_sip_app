import Database from "better-sqlite3";
import path from "path";

// Define the path to your database file
const dbPath = path.resolve(process.cwd(), "data/database.db");

// Use a singleton pattern to avoid multiple database connections
let db = null;

function openDb() {
  if (db) {
    return db;
  }
  try {
    db = new Database(dbPath, { verbose: console.log });
    // Recommended for better performance and concurrency
    db.pragma("journal_mode = WAL");

    // Create tables if they don't exist
    db.exec(`
        CREATE TABLE IF NOT EXISTS users (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            username TEXT UNIQUE NOT NULL,
            password TEXT NOT NULL,
            role TEXT DEFAULT 'user'
        );
    `);
    console.log("User table ensured.");
  } catch (error) {
    console.error("Error connecting to SQLite:", error.message);
    //process.exit(1); // Exit if database connection fails
    return null;
  }
  return db;
}

export { openDb };
