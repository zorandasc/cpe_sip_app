import { NextResponse } from "next/server";
import fs from "fs/promises"; // For file system operations
import path from "path"; // For path manipulation
import { exec } from "child_process";
import { promisify } from "util"; //FOR PROMISIFIKACIJU execa

import { phoneConfig } from "@/utils/phoneConfig";
import createXml from "@/utils/createXml";

const PASSWORD = process.env.OPEN_SSL_PASS; // 🔐 Hardcoded password

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

    //MODEL SELEKTOVANOG TELEFONA
    const model = selectedPhone?.model;

    //DOBAVI CONFIG SELEKTOVANOG TELEFONA
    const config = phoneConfig.find((c) => c.model === model);

    if (!config) {
      return NextResponse.json(
        { message: "Unsupported phone model" },
        { status: 400 }
      );
    }

    // Define the directory where files will be saved
    // IMPORTANT: This path is relative to where your Next.js app is running
    // inside the Docker container. You'll map this via Docker volumes.
    const saveDirectory = path.join(process.cwd(), config.path);

    // Ensure the directory exists
    await fs.mkdir(saveDirectory, { recursive: true });

    // Define the filename (e.g., using MAC address)
    // Sanitize MAC for filename
    const filename = `${config.prefix}${mac.replace(/[^a-zA-Z0-9]/g, "_")}${
      config.extension
    }`;

    const mac1 = mac.toUpperCase();
    const filename1 = `${config.prefix}${mac1.replace(/[^a-zA-Z0-9]/g, "_")}${
      config.extension
    }`;

    const filePath = path.join(saveDirectory, filename);
    const filePath1 = path.join(saveDirectory, filename1);

    //KREIRAJ XML FAJL
    xmlContent = createXml(selectedPhone, mac, portConfigs);

    // Write the XML content to the file
    await fs.writeFile(filePath, xmlContent);
    await fs.writeFile(filePath1, xmlContent);

    console.log(`Successfully saved XML to: ${filePath}`);
    console.log(`Successfully saved XML to: ${filePath1}`);

    //PETLJA ZA ENKRIPCIJU
    if (config.encrypt) {
      //DEFINISI SUB DIREKTORIJ ZA ENKRIPTOVANE .xml FAJLAOVE
      const encryptedDirectory = path.join(
        process.cwd(),
        `${config.path}/encrypted`
      );

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
    } //END ENCRYPT IF
  } catch (error) {
    console.error("Error saving configuration:", error);
    return NextResponse.json({ message: `${error.message}` }, { status: 500 });
  }
}
