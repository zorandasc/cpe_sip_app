import { NextResponse } from "next/server";
import fs from "fs/promises"; // For file system operations
import path from "path"; // For path manipulation
import { exec } from "child_process";
import { promisify } from "util"; //FOR PROMISIFIKACIJU execa
import { DOMParser } from "xmldom";

const PASSWORD = process.env.OPEN_SSL_PAS; // 🔐 Hardcoded password

//BECKEND API ROUTA ZA CUVANJE EDITOVANOG .XML KONFIG FAJLOVA
export async function POST(req) {
  const xmlText = await req.text();

  if (!xmlText) {
    return NextResponse.json({ message: "No .xml fajl." }, { status: 400 });
  }
  try {
    const xmlDoc = new DOMParser().parseFromString(xmlText, "application/xml");

    //GET AMC ADDDRESS FROM XML FOR NAMING FILE
    const macElements = xmlDoc.getElementsByTagName("mac");

    if (!macElements.length || !macElements[0].textContent) {
      return NextResponse.json(
        { message: "No <mac> tag or content found in XML." },
        { status: 400 }
      );
    }

    const mac = macElements[0].textContent.trim();

    // Define the directory where files will be saved
    // IMPORTANT: This path is relative to where your Next.js app is running
    // inside the Docker container. You'll map this via Docker volumes.
    const saveDirectory = path.join(process.cwd(), "xmlconfigs/Grandstream");

    // Ensure the directory exists
    await fs.mkdir(saveDirectory, { recursive: true });

    // Define the filename (e.g., using MAC address)
    // Sanitize MAC for filename
    const filename = `cfg${mac.replace(/[^a-zA-Z0-9]/g, "_")}.xml`;

    const mac1 = mac.toUpperCase();
    const filename1 = `cfg${mac1.replace(/[^a-zA-Z0-9]/g, "_")}.xml`;

    const filePath = path.join(saveDirectory, filename);
    const filePath1 = path.join(saveDirectory, filename1);

    // Write the XML content to the file
    await fs.writeFile(filePath, xmlText);
    await fs.writeFile(filePath1, xmlText);

    console.log(`Successfully saved XML to: ${filePath}`);
    console.log(`Successfully saved XML to: ${filePath1}`);

    //ENKTIPCIJA .xml FAJLA
    //DEFINISI DIREKTORIJ FOR STORING EBCRYPTED
    const encryptedDirectory = path.join(process.cwd(), "xmlconfigs/encrypted");

    // Ensure the directory exists
    await fs.mkdir(encryptedDirectory, { recursive: true });

    const outputPath = path.join(encryptedDirectory, filename);
    const outputPath1 = path.join(encryptedDirectory, filename1);

    //exec(cmd, callback) is asynchronous. The try/catch only wraps
    //synchronous code and awaited promises.
    //pa iz tog razloga vrsimo:
    //Wrap exec() in a Promise and await it
    const execAsync = promisify(exec);

    //CLI COMMAND FOR ENCRYPTION
    const cmd = `openssl enc -e -aes-256-cbc -salt -md md5 -in "${filePath}" -out "${outputPath}" -pass pass:"${PASSWORD}"`;
    const cmd1 = `openssl enc -e -aes-256-cbc -salt -md md5 -in "${filePath1}" -out "${outputPath1}" -pass pass:"${PASSWORD}"`;

    try {
      await execAsync(cmd);
      await execAsync(cmd1);

      console.log(`Successfully encrypted XML to: ${outputPath}`);
      console.log(`Successfully saved XML to: ${outputPath1}`);

      return NextResponse.json({
        message: "✅ File encrypted and saved",
      });
    } catch (err) {
      return NextResponse.json(
        { message: "❌ Encryption failed", error: err.message },
        { status: 500 }
      );
    }
  } catch (error) {
    console.error("Error saving configuration:", error);
    return NextResponse.json({ message: `${error.message}` }, { status: 500 });
  }
}
