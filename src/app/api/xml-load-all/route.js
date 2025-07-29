import { NextResponse } from "next/server";
import path from "path"; // For path manipulation
import fs from "fs/promises"; // For file system operations

//BECKEND API ROUTA ZA DOWNLOAD ALL .XML
//AND ALL SUBFOLDERS IN xmlconfigs PARRENT FOLDER
export async function GET(req) {
  const { searchParams } = new URL(req.url);

  const limit = parseInt(searchParams.get("limit") || 20, 10);
  const offset = parseInt(searchParams.get("offset") || 0, 10);
  const folder = searchParams.get("folderName");
  const search = searchParams.get("search")?.toLowerCase() || "";

  if (!folder) {
    return NextResponse.json(
      { message: "Missing folder name." },
      { status: 400 }
    );
  }

  try {
    //GET DIRECTORY PATH
    const directoryPath = path.join(process.cwd(), folder);

    //READ ALL FILES AND FOLDERS IN xmlconfigs DIRECTORY
    const dirents = await fs.readdir(directoryPath, { withFileTypes: true });

    const seen = new Set();
    const uniqueXmlFiles = [];

    //FORMING FILES ARRAY ONLY OF .xml, .cfg
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
        { message: `Folder '${folder.split("/").pop()}' not found.` },
        { status: 404 }
      );
    }
    return NextResponse.json(
      { message: error.message ?? "Internal server error." },
      { status: 500 }
    );
  }
}
