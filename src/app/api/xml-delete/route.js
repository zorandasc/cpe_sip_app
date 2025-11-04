import { NextResponse } from "next/server";
import fs from "fs/promises"; // For file system operations
import path from "path"; // For path manipulation

import { phoneConfig } from "@/utils/phoneConfig";

export async function POST(req) {
  const { fileName, folderPath } = await req.json();

  if (!fileName || !folderPath) {
    return NextResponse.json(
      { message: "Filename, Foldername is missing." },
      { status: 400 }
    );
  }
  //FOR SOME PHONE THERE ARE CORESPONDING ENCRYPTED FILES
  const config = phoneConfig.find((phone) => phone.path == folderPath);
  if (!config) {
    return NextResponse.json(
      {
        message: "Unsupported: phone, file ext. and folder name combination.",
      },
      { status: 400 }
    );
  }

  const regex = /^(.*)([0-9A-Fa-f]{12})(.*)$/;
  const match = fileName.match(regex);

  if (!match) {
    return NextResponse.json(
      { message: "Unsupported or bad file name." },
      { status: 400 }
    );
  }

  const [_, prefix, macAddress, ext] = match;
  const fileNameUpper = `${prefix}${macAddress.toUpperCase()}${ext}`;
  const fileNameLower = `${prefix}${macAddress.toLowerCase()}${ext}`;

  const baseDir = path.join(process.cwd(), folderPath);
  const encryptedDir = config.encrypt
    ? path.join(process.cwd(), folderPath, "encrypted")
    : null;

  const deletedFiles = [];
  const missingFiles = [];
  // helper to safely delete files
  //Catches and ignores missing files (ENOENT).
  //Logs others but doesn’t stop execution.
  async function safeDelete(filePath) {
    try {
      await fs.unlink(filePath);
      deletedFiles.push(filePath);
    } catch (error) {
      if (err.code !== "ENOENT") {
        missingFiles.push(filePath);
        console.warn(`⚠️ Failed to delete ${filePath}: ${err.message}`);
      }
    }
  }

  try {
    //DELETE BOTH FILE UPPER AND LOWWER CASE AND ENCRIPTED IF ANY
    //Deletes all files in parallel for speed.
    await Promise.all([
      safeDelete(path.join(baseDir, fileNameUpper)),
      safeDelete(path.join(baseDir, fileNameLower)),
      ...(encryptedDir
        ? [
            safeDelete(path.join(encryptedDir, fileNameUpper)),
            safeDelete(path.join(encryptedDir, fileNameLower)),
          ]
        : []),
    ]);

    return NextResponse.json({
      message: "🧹 Delete operation complete.",
      deleted: deletedFiles,
      notFound: missingFiles,
    });
  } catch (error) {
    console.error("Error deleting file:", error);
    return NextResponse.json(
      { message: `Internal error: ${error.message}` },
      { status: 500 }
    );
  }
}
