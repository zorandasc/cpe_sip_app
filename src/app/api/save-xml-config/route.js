import { NextResponse } from "next/server";
import fs from "fs/promises"; // For file system operations
import path from "path"; // For path manipulation
import { exec } from "child_process";
import createGrandStreamXml from "@/lib/createGrandStreamXml";

const PASSWORD = "1234567890123456"; // 🔐 Hardcoded password

//BECKEND API ROUTA ZA CUVANJE .XML KONFIG FAJLOVA
export async function POST(request) {
  try {
    const { selectedPhone, mac, portConfigs } = await request.json();

    //ISPITAJ DA LI POSTOJE ZAHTIJEVANI PARAMETRI
    if (!selectedPhone || !mac || !portConfigs) {
      return NextResponse.json(
        { message: "Missing required data" },
        { status: 400 }
      );
    }

    //KREIRAJ XML FAJL
    let xmlContent = createGrandStreamXml(selectedPhone, mac, portConfigs);

    // Define the directory where files will be saved
    // IMPORTANT: This path is relative to where your Next.js app is running
    // inside the Docker container. You'll map this via Docker volumes.
    const saveDirectory = path.join(process.cwd(), "xmlconfigs");

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
    await fs.writeFile(filePath, xmlContent);
    await fs.writeFile(filePath1, xmlContent);

    console.log(`Successfully saved XML to: ${filePath}`);
    console.log(`Successfully saved XML to: ${filePath1}`);

    NextResponse.json({
      message: `✅ Successfully saved XML to: ${filePath}`,
      filePath,
    });

    //ENKTIPCIJA .xml FAJLA
    //DEFINISI DIREKTORIJ
    const encryptedDirectory = path.join(process.cwd(), "xmlconfigs/encrypted");

    // Ensure the directory exists
    await fs.mkdir(encryptedDirectory, { recursive: true });

    //
    const outputPath = path.join(encryptedDirectory, filename);
    const outputPath1 = path.join(saveDirectory, filename1);

    const cmd1 = `openssl enc -e -aes-256-cbc -salt -md md5 -in "${filePath1}" -out "${outputPath1}" -pass pass:"${PASSWORD}"`;
    exec(cmd1, (error) => {
      if (error) {
        console.error("Encryption error:", error);

        return NextResponse.json(
          { message: "❌ Encryption failed", error: error.message },
          { status: 500 }
        );
      }

      console.log(`Encrypted file saved at: ${outputPath1}`);
      //THIS IS THE HOST FILE SYSTEM /var/www/html/Grandstream/encrypted`
    });

    const cmd = `openssl enc -e -aes-256-cbc -salt -md md5 -in "${filePath}" -out "${outputPath}" -pass pass:"${PASSWORD}"`;
    exec(cmd, (error) => {
      if (error) {
        console.error("Encryption error:", error);

        return NextResponse.json(
          { message: "❌ Encryption failed", error: error.message },
          { status: 500 }
        );
      }

      console.log(`Encrypted file saved at: ${outputPath}`);
    });

    return NextResponse.json({
      message: `✅ File ${filename} encrypted and saved.`,
      outputPath,
    });
  } catch (error) {
    console.error("Error saving configuration:", error);
    return NextResponse.json({ message: `${error.message}` }, { status: 500 });
  }
}
