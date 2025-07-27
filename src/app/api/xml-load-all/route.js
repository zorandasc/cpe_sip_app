import { NextResponse } from "next/server";
import path from "path"; // For path manipulation
import fs from "fs/promises"; // For file system operations

//BECKEND API ROUTA ZA DOWNLOAD .XML
// RETURN RAW XML (string or Blob)
export async function GET() {
  /* ---------- 2. Locate the file ---------- */
  //1. search file in folder by name of file

  try {
    //GET DIRECTORY PATH
    const directoryPath = path.join(process.cwd(), "xmlconfigs/Grandstream");

    //ALL FILES IN xmlconfigs DIRECTORY
    const dirents = await fs.readdir(directoryPath, { withFileTypes: true });

    //TAKE ONLY FILES, AND .XML FILES
    const xmlFiles = dirents.filter(
      (dirent) => dirent.isFile() && dirent.name.toLowerCase().endsWith(".xml")
    );

    const seen = new Set();
    const uniqueFiles = [];

    //ONLY SEND UNIQ LOWERCASE TO FRONTEND
    for (const dirent of xmlFiles) {
      const name = dirent.name;
      const base = name.slice(0, -4).toLowerCase(); //slice .xml from name

      if (!seen.has(base)) {
        seen.add(base);

        //WE NEED FULL PATH TO GET FILE STATS
        const fullPath = path.join(directoryPath, name);
        const stats = await fs.stat(fullPath);

        //ctimeMs	Creation or metadata change time
        //mtimeMs	Last modified time
        uniqueFiles.push({
          name,
          time: stats.mtimeMs,
        }); // keep original casing (first occurrence)
      }
    }

    // Sort by time (descending — newest first)
    uniqueFiles.sort((a, b) => b.time - a.time);

    return NextResponse.json(uniqueFiles, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { message: error.message ?? "Internal server error." },
      { status: 500 }
    );
  }
}
