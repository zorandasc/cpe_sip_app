import { NextResponse } from "next/server";
import fs from "fs/promises";
import path from "path";

//API ROUTA FOR LOADING ALL FILES INSIDE SUBFOLDERS
export async function GET(req) {
  const { searchParams } = new URL(req.url);

  const folder = searchParams.get("name");

  if (!folder) {
    return NextResponse.json(
      { message: "Missing folder name." },
      { status: 400 }
    );
  }

  try {
    const folderPath = path.join(process.cwd(), folder);

    const dirents = await fs.readdir(folderPath, { withFileTypes: true });

    const xmlFiles = [];
    const seen = new Set();

    for (const dirent of dirents) {
      if (
        dirent.isFile() &&
        (dirent.name.endsWith(".cfg") || dirent.name.endsWith(".xml"))
      ) {
        const name = dirent.name;
        const base = name.toLowerCase();
        if (!seen.has(base)) {
          seen.add(base);

          const fullPath = path.join(folderPath, name);
          const stats = await fs.stat(fullPath);

          xmlFiles.push({
            name,
            time: stats.mtimeMs,
          });
        }
      }
    }

    return NextResponse.json(xmlFiles);
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { message: error.message ?? "Failed to read subfolder." },
      { status: 500 }
    );
  }
}
