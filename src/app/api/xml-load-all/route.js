import { NextResponse } from "next/server";
import path from "path"; // For path manipulation
import fs from "fs/promises"; // For file system operations

import { phoneConfig } from "@/utils/phoneConfig";

//BECKEND API ROUTA ZA DOWNLOAD ALL .XML
//AND ALL SUBFOLDERS IN xmlconfigs PARRENT FOLDER
export async function GET(req) {
  const { searchParams } = new URL(req.url);

  const limit = parseInt(searchParams.get("limit") || 20, 10);
  const offset = parseInt(searchParams.get("offset") || 0, 10);
  const folderPath = searchParams.get("folderPath");
  const search = searchParams.get("search")?.toLowerCase() || "";

  if (!folderPath) {
    return NextResponse.json(
      { message: "Missing folder path." },
      { status: 400 }
    );
  }

  //DOBAVI CONFIG SELEKTOVANOG TELEFONA
  const config = phoneConfig.find((phone) => phone.path == folderPath);

  if (!config) {
    return NextResponse.json(
      { message: "Unsupported phone model" },
      { status: 400 }
    );
  }

  try {
    //GET DIRECTORY PATH
    const directoryPath = path.join(process.cwd(), folderPath);

    //READ ALL FILES AND FOLDERS IN folderPath DIRECTORY
    const dirents = await fs.readdir(directoryPath, { withFileTypes: true });

    const seen = new Set();
    const uniqueXmlFiles = [];

    //FORMING FILES ARRAY ONLY OF PREFIX AND EXSTENZIONS
    for (const dirent of dirents) {
      //IF NOT FILE, EXIT AND GRAB NEXT ONE
      if (!dirent.isFile()) continue;

      const fileName = dirent.name;
      const lowerName = fileName.toLowerCase();

      // Check if file matches ANY allowed output config
      const matchesOutput = config.outputs.some(
        ({ prefix, extension }) =>
          lowerName.startsWith(prefix.toLowerCase()) &&
          lowerName.endsWith(extension.toLowerCase())
      );

      //THIS FILE DOESNOT HAVE prefix/extension COMBINATION
      //EXIT AND GRAB NEXT FILE TO CHECK
      if (!matchesOutput) continue;

      //ONLY SEND UNIQ LOWERCASE TO FRONTEND
      if (!seen.has(lowerName)) {
        seen.add(lowerName);

        //WE NEED FULL PATH TO GET FILE STATS
        //fileNam preserve original casing
        const fullPath = path.join(directoryPath, fileName);
        const stats = await fs.stat(fullPath);

        //ctimeMs	Creation or metadata change time
        //mtimeMs	Last modified time
        uniqueXmlFiles.push({
          name: fileName, // preserve original casing
          time: stats.mtimeMs,
        }); // keep original casing (first occurrence)
      }
    }

    //SEARCHING
    const filteredFiles = uniqueXmlFiles.filter((file) =>
      file.name.toLowerCase().includes(search)
    );

    const totalCount = filteredFiles.length;

    //PAGINATION
    const filesToSend = filteredFiles.slice(offset, offset + limit);

    // Check if more item exist after this page
    const hasMore = offset + filesToSend.length < totalCount;

    //SORTING Sort by time (descending — newest first)
    filesToSend.sort((a, b) => b.time - a.time);

    return NextResponse.json(
      { files: filesToSend, hasMore, totalCount },
      { status: 200 }
    );
  } catch (error) {
    console.error(error);
    //IN CASE DIRECTORY DOES NOT EXIST, SO APP DOESNOT FAIL
    if (error.code === "ENOENT") {
      // Directory does not exist
      return NextResponse.json(
        { message: `Folder '${folderPath}' not found.` },
        { status: 404 }
      );
    }
    return NextResponse.json(
      { message: error.message ?? "Internal server error." },
      { status: 500 }
    );
  }
}
