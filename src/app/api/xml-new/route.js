import { NextResponse } from "next/server";
import fs from "fs/promises"; // For file system operations
import path from "path"; // For path manipulation
import { exec } from "child_process";
import { promisify } from "util"; //FOR PROMISIFIKACIJU execa

import { phoneConfig } from "@/utils/phoneConfig";

const PASSWORD = process.env.OPEN_SSL_PASS; // 🔐 Hardcoded password

//BECKEND API ROUTA ZA CUVANJE NOVOG VOIP KONFIG FAJLA
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

    //DOBAVI CONFIG SELEKTOVANOG TELEFONA
    const config = phoneConfig.find(
      (phone) =>
        phone.model === selectedPhone.model && phone.type === selectedPhone.type
    );

    if (!config || !config.outputs?.length) {
      return NextResponse.json(
        { message: "Unsupported phone model." },
        { status: 400 }
      );
    }

    //const fullPhone = { ...selectedPhone, ...config };

    //exec(cmd, callback) is asynchronous. The try/catch only wraps
    //synchronous code and awaited promises.
    //pa iz tog razloga vrsimo:
    //Wrap exec() in a Promise and await it
    const execAsync = promisify(exec);

    //KREIRAJ XML FAJL
    for (const output of config.outputs) {
      const xmlContent = output.generator(selectedPhone, mac, portConfigs);

      //LOWER MAC ADDRESS
      let filename = `${output.prefix}${mac.replace(/[^a-zA-Z0-9]/g, "_")}${
        output.extension
      }`;

      //UPPER MAC ADDRESS
      let filenameUpper = `${output.prefix}${mac
        .toUpperCase()
        .replace(/[^a-zA-Z0-9]/g, "_")}${output.extension}`;

      // Define the directory where files will be saved
      // IMPORTANT: This path is relative to where your Next.js app is running
      // inside the Docker container. You'll map this via Docker volumes.
      const saveDirectory = path.join(process.cwd(), config.path);
      // Ensure the directory exists, CREATE DIRECTORY
      await fs.mkdir(saveDirectory, { recursive: true });

      const filePath = path.join(saveDirectory, filename);
      const filePathUpper = path.join(saveDirectory, filenameUpper);

      // Write the XML content to the file
      await fs.writeFile(filePath, xmlContent);
      await fs.writeFile(filePathUpper, xmlContent);

      console.log(`Saved: ${filePath}`);
      console.log(`Saved: ${filePathUpper}`);

      //PETLJA ZA ENKRIPCIJU
      if (config.encrypt) {
        //DEFINISI SUB DIREKTORIJ ZA ENKRIPTOVANE .xml FAJLAOVE
        const encryptedDirectory = path.join(
          process.cwd(),
          `${config.path}/encrypted`
        );
        // Ensure the directory exists
        await fs.mkdir(encryptedDirectory, { recursive: true });

        const encryptedPath = path.join(encryptedDirectory, filename);
        const encryptedPathUpper = path.join(encryptedDirectory, filenameUpper);

        //CLI COMMAND FOR ENCRYPTION
        const cmd = `openssl enc -e -aes-256-cbc -salt -md md5 -in "${filePath}" -out "${encryptedPath}" -pass pass:"${PASSWORD}"`;
        const cmdUpper = `openssl enc -e -aes-256-cbc -salt -md md5 -in "${filePathUpper}" -out "${encryptedPathUpper}" -pass pass:"${PASSWORD}"`;

        await execAsync(cmd);
        await execAsync(cmdUpper);

        console.log(`Encrypted: ${encryptedPath}`);
        console.log(`Encrypted: ${encryptedPathUpper}`);
      }
    }
    return NextResponse.json({ message: "✅ All files created and saved." });
  } catch (error) {
    console.error("Error saving configuration:", error);
    return NextResponse.json({ message: `${error.message}` }, { status: 500 });
  }
}
