import { NextResponse } from "next/server";
import path from "path"; // For path manipulation
import fs from "fs/promises"; // For file system operations

//BECKEND API ROUTA ZA DOWNLOAD .XML
// RETURN RAW XML (string or Blob)
export async function GET() {
  /* ---------- 2. Locate the file ---------- */
  //1. search file in folder by name of file

  try {
    const directoryPath = path.join(process.cwd(), "xmlconfigs");
    //ALL FILES IN xmlconfigs DIRECTORY

    const dirents = await fs.readdir(directoryPath, { withFileTypes: true });

    const xmlFiles = dirents.filter(
      (dirent) => dirent.isFile() && dirent.name.toLowerCase().endsWith(".xml")
    );

    const seen = new Set();
    const uniqueFiles = [];

    for (const dirent of xmlFiles) {
      const name = dirent.name;
      const base = name.slice(0, -4).toLowerCase(); //slice .xml from name

      if (!seen.has(base)) {
        seen.add(base);
        uniqueFiles.push(name); // keep original casing (first occurrence)
      }
    }

    return NextResponse.json(uniqueFiles, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { message: error.message ?? "Internal server error." },
      { status: 500 }
    );
  }
}
