import { NextResponse } from "next/server";
import fs from "fs/promises"; // For file system operations
import path from "path"; // For path manipulation
import { exec } from "child_process";
import { promisify } from "util"; //FOR PROMISIFIKACIJU execa
import { phoneConfig } from "@/utils/phoneConfig";

const PASSWORD = process.env.OPEN_SSL_PAS; // 🔐 Hardcoded password

//BECKEND API ROUTA ZA CUVANJE EDITOVANOG VOIP KONFIG FAJLA
export async function POST(req) {
  const { fileName, folderName, xml } = await req.json();

  //npr. fileName=cfgADC356BF67FD.xml, folderName: xmlconfigs/Grandstream

  if (!fileName || !xml) {
    return NextResponse.json(
      { message: "Filename, Foldername or xml is missing." },
      { status: 400 }
    );
  }
  try {
    // Define the directory where files will be saved
    // IMPORTANT: This path is relative to where your Next.js app is running
    // inside the Docker container. You'll map this via Docker volumes.
    const saveDirectory = path.join(process.cwd(), folderName);

    // Ensure the directory exists
    await fs.mkdir(saveDirectory, { recursive: true });

    //CONVERT TO UPPERCASE MAC
    //EXTRACT EXTENZIJU (.xml, .cfg)
    const ext = path.extname(fileName);

    //ODUZMI OD CIJELOG IMENA EKSTENZIJU
    //npr. cfgADC356BF67FD
    const nameOnly = path.basename(fileName, ext);

    //PREFIX:,NPR cfg
    const prefix = nameOnly.slice(0, -12);

    //SLICE 12 MIJESTA UNAZAD DA EKSTRAKTUJES MAC
    //npr. ADC356BF67FD
    const upperCaseMac = nameOnly.slice(-12).toUpperCase();
    const lowerCaseMac = nameOnly.slice(-12).toLowerCase();

    const upperCasefileName = `${prefix}${upperCaseMac}${ext}`;
    const lowerCasefileName = `${prefix}${lowerCaseMac}${ext}`;

    const upperCaseFilePath = path.join(saveDirectory, upperCasefileName);
    const lowerCaseFilePath = path.join(saveDirectory, lowerCasefileName);

    // Write the XML content to the file
    await fs.writeFile(upperCaseFilePath, xml);
    await fs.writeFile(lowerCaseFilePath, xml);

    console.log(`Successfully saved XML to: ${lowerCaseFilePath}`);
    console.log(`Successfully saved XML to: ${upperCasefileName}`);

    //NA OSNOVU PREFIKSA I EKSTENZIJE PRONACI PRVI phonConfig
    const config = phoneConfig.find(
      (phone) => phone.extension == ext && phone.prefix === prefix
    );

    //ENKTIPCIJA .xml FAJLA
    //DEFINISI DIREKTORIJ FOR STORING ENCRYPTED
    if (config.encrypt) {
      const encryptedDirectory = path.join(
        process.cwd(),
        `${config.path}/encrypted`
      );

      // Ensure the directory exists
      await fs.mkdir(encryptedDirectory, { recursive: true });

      const outputPath = path.join(encryptedDirectory, lowerCasefileName);
      const outputPath1 = path.join(encryptedDirectory, upperCasefileName);

      //exec(cmd, callback) is asynchronous. The try/catch only wraps
      //synchronous code and awaited promises.
      //pa iz tog razloga vrsimo:
      //Wrap exec() in a Promise and await it
      const execAsync = promisify(exec);

      //CLI COMMAND FOR ENCRYPTION
      const cmd = `openssl enc -e -aes-256-cbc -salt -md md5 -in "${lowerCaseFilePath}" -out "${outputPath}" -pass pass:"${PASSWORD}"`;
      const cmd1 = `openssl enc -e -aes-256-cbc -salt -md md5 -in "${upperCaseFilePath}" -out "${outputPath1}" -pass pass:"${PASSWORD}"`;

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
    } //END OF ENCRYPTION LOGIC
    return NextResponse.json({ message: "✅ File saved." });
  } catch (error) {
    console.error("Error saving configuration:", error);
    return NextResponse.json({ message: `${error.message}` }, { status: 500 });
  }
}
