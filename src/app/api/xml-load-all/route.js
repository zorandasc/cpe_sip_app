import { NextResponse } from "next/server";
import path from "path"; // For path manipulation
import fs from "fs/promises"; // For file system operations
import { phoneConfig } from "@/utils/phoneConfig";

//BECKEND API ROUTA ZA DOWNLOAD ALL .XML
//AND ALL SUBFOLDERS IN xmlconfigs PARRENT FOLDER
export async function GET() {
  /* ---------- 2. Locate the file ---------- */
  //1. search file in folder by name of file

  try {
    //GET DIRECTORY PATH
    const directoryPath = path.join(process.cwd(), "xmlconfigs");

    //ALL FILES AND FOLDERS IN xmlconfigs DIRECTORY
    const dirents = await fs.readdir(directoryPath, { withFileTypes: true });

    const folders = Array.from(
      // new Set(phoneConfig.map((item) => item.path.split("/").pop()))
      new Set(phoneConfig.map((item) => item.path))
    );
    //["xmlconfigs/Grandstream", "xmlconfigs/", "xmlconfigs/Cisco502G", "xmlconfigs/Cisco512G"]

    console.log(folders);

    const seen = new Set();
    const uniqueXmlFiles = [];

    for (const dirent of dirents) {
      if (
        dirent.isFile() &&
        (dirent.name.endsWith(".cfg") || dirent.name.endsWith(".xml"))
      ) {
        const name = dirent.name;
        const base = name.toLowerCase();
        //ONLY SEND UNIQ LOWERCASE TO FRONTEND
        if (!seen.has(base)) {
          seen.add(base);

          //WE NEED FULL PATH TO GET FILE STATS
          const fullPath = path.join(directoryPath, name);
          const stats = await fs.stat(fullPath);

          //ctimeMs	Creation or metadata change time
          //mtimeMs	Last modified time
          uniqueXmlFiles.push({
            name,
            time: stats.mtimeMs,
          }); // keep original casing (first occurrence)
        }
      }
    }

    // Sort by time (descending — newest first)
    uniqueXmlFiles.sort((a, b) => b.time - a.time);

    return NextResponse.json({ folders, uniqueXmlFiles }, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { message: error.message ?? "Internal server error." },
      { status: 500 }
    );
  }
}
