import { NextResponse } from "next/server";
import fs from "fs/promises"; // For file system operations
import path from "path"; // For path manipulation
import { exec } from "child_process";
import { promisify } from "util"; //FOR PROMISIFIKACIJU execa
import { phoneConfig } from "@/utils/phoneConfig";

const PASSWORD = process.env.OPEN_SSL_PAS; // 🔐 Hardcoded password

//BECKEND API ROUTA ZA CUVANJE EDITOVANOG VOIP KONFIG FAJLA
export async function POST(req) {
  const { fileName, folderPath, xml } = await req.json();

  //npr. fileName=cfgADC356BF67FD.xml, folderPath: xmlconfigs/Grandstream

  if (!fileName || !xml) {
    return NextResponse.json(
      { message: "Filename, Foldername or xml is missing." },
      { status: 400 }
    );
  }

  //NA OSNOVU FOLDERA PRONACI PRVI phonConfig
  //ZA BUDUCNOST, STA AKO IMAS FAJLS SA ISTIM FOLDERPATH
  //ALI JEDNA TREBA ENCRIPT DRUGI NE?
  const config = phoneConfig.find((phone) => phone.path == folderPath);

  if (!config) {
    return NextResponse.json(
      {
        message: "Unsupported: phone, file ext. and folder name combination.",
      },
      { status: 400 }
    );
  }

  try {
    // Define the directory where files will be saved
    // IMPORTANT: This path is relative to where your Next.js app is running
    // inside the Docker container. You'll map this via Docker volumes.
    const saveDirectory = path.join(process.cwd(), folderPath);

    // Ensure the directory exists
    await fs.mkdir(saveDirectory, { recursive: true });

    //SEPARATE: PREFIX+BASENAME+EXTENZION
    //CONVERT BASENAME TO LOWER/UPPER CASE
    //Match prefix + MAC (12 hex chars) + extension
    const regex = /^(.*)([0-9A-Fa-f]{12})(.*)$/;
    const match = fileName.match(regex);

    if (!match) {
      return NextResponse.json(
        { message: "Unsupported or bad file name." },
        { status: 400 }
      );
    }

    const prefix = match[1]; // before MAC
    const macAddress = match[2]; // MAC itself
    const ext = match[3]; // after MAC

    const fileNameUpper = `${prefix}${macAddress.toUpperCase()}${ext}`;
    const fileNameLower = `${prefix}${macAddress.toLowerCase()}${ext}`;

    const filePathUpper = path.join(saveDirectory, fileNameUpper);
    const filePathLower = path.join(saveDirectory, fileNameLower);

    // Write the XML content to the file
    await fs.writeFile(filePathUpper, xml);
    await fs.copyFile(filePathUpper, filePathLower);

    console.log(`Successfully saved XML to: ${filePathUpper}`);
    console.log(`Successfully saved XML to: ${filePathLower}`);

    //ENKTIPCIJA .xml FAJLA
    if (config.encrypt) {
      //DEFINE DIRECORY FOR ENCRYPTED FILES
      const encryptedDirectory = path.join(
        process.cwd(),
        `${config.path}/encrypted`
      );

      // Ensure the directory exists
      await fs.mkdir(encryptedDirectory, { recursive: true });

      const encryptedPathUpper = path.join(encryptedDirectory, fileNameUpper);
      const encryptedPathLower = path.join(encryptedDirectory, fileNameLower);

      //exec(cmd, callback) is asynchronous. The try/catch only wraps
      //synchronous code and awaited promises.
      //pa iz tog razloga vrsimo:
      //Wrap exec() in a Promise and await it
      const execAsync = promisify(exec);

      //CLI COMMAND FOR ENCRYPTION
      const cmdUpper = `openssl enc -e -aes-256-cbc -salt -md md5 -in "${filePathUpper}" -out "${encryptedPathUpper}" -pass pass:"${PASSWORD}"`;
      const cmdLower = `openssl enc -e -aes-256-cbc -salt -md md5 -in "${filePathLower}" -out "${encryptedPathLower}" -pass pass:"${PASSWORD}"`;

      await execAsync(cmdUpper);
      await execAsync(cmdLower);

      console.log(`Successfully encrypted XML to: ${encryptedPathUpper}`);
      console.log(`Successfully encrypted XML to: ${encryptedPathLower}`);
      //END OF ENCRYPTION LOGIC
    }
    return NextResponse.json({ message: "✅ All files created and saved." });
  } catch (error) {
    console.error("Error saving configuration:", error);
    return NextResponse.json({ message: `${error.message}` }, { status: 500 });
  }
}
