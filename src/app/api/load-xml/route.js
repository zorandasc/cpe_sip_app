import { NextResponse } from "next/server";
import path from "path"; // For path manipulation
import fs from "fs/promises"; // For file system operations

//BECKEND API ROUTA ZA CUVANJE LOADED .XML
// RETURN RAW XML (string or Blob)
export async function POST(req) {
  const { searchXmlFile } = await req.json();

  if (!searchXmlFile) {
    console.log("searchXmlFile", searchXmlFile);
    return NextResponse.json(
      { message: "Ime .xml fajla je obavezno." },
      { status: 400 }
    );
  }
  /* ---------- 2. Locate the file ---------- */
  //1. search file in folder by name of file
  const searchDir = path.join(process.cwd(), "xmlconfigs");

  try {
    //ALL FILES IN xmlconfigs DIRECTORY
    const files = await fs.readdir(searchDir);

    //STRIP .xml EXTENSION IN GIVEN SEARCHTERM
    const targetBase = searchXmlFile.toLowerCase().replace(/\.xml$/i, "");

    //We are using .find(), which:
    //✅ Returns the first match only
    //❌ Does not detect or warn about duplicates
    const match = files.find((f) => {
      //AKO FILE NE ZAVRSAVA SA .xml EKSTENZIJOM PRESKOCI
      if (!f.toLowerCase().endsWith(".xml")) return false;

      //TAKE LAST PART OF FULL PATH AND STRIP .xml
      return path.basename(f, ".xml").toLowerCase() === targetBase;
      //This requires an exact match (case-insensitive) of the
      //full filename without the .xml extension.
    });

    if (!match) {
      return NextResponse.json(
        { message: `XML file: ${searchXmlFile}, nije pronadjen.` },
        { status: 404 }
      );
    }

    /* ---------- 3. Read & return ---------- */
    //FORMIRAJ FILEPATH OD PRONADJENOG FAJLA
    const filePath = path.join(searchDir, match);

    //// returns xml as Buffer
    const xmlBuffer = await fs.readFile(filePath);

    //This is the raw constructor. You use it when you want to return:
    //anything not JSON: xml, blob, itd
    return new NextResponse(xmlBuffer, {
      status: 200,
      headers: {
        "Content-Type": "text/xml; charset=utf-8",
        // optional – lets the browser suggest a filename if user saves
        "Content-Disposition": `inline; filename:"${match}"`,
      },
    });
  } catch (error) {
    console.error("load-xml-config error:", error);
    return NextResponse.json(
      { message: error.message ?? "Internal server error." },
      { status: 500 }
    );
  }
}
