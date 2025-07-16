import { NextResponse } from "next/server";
import fs from "fs/promises"; // For file system operations
import path from "path"; // For path manipulation

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
    let xmlContent = `<?xml version="1.0" encoding="UTF-8"?>\n`;
    xmlContent += `<SIPPhoneConfig>\n`;
    xmlContent += `  <PhoneModel>${selectedPhone.name}</PhoneModel>\n`;
    xmlContent += `  <MACAddress>${mac}</MACAddress>\n`;

    if (selectedPhone.port > 0) {
      xmlContent += `  <Ports>\n`;
      portConfigs.forEach((config, index) => {
        xmlContent += `    <Port id="${index + 1}">\n`;
        xmlContent += `      <Sifra>${config.sifra}</Sifra>\n`;
        xmlContent += `      <BrojTelefona>${config.brojTelefona}</BrojTelefona>\n`;
        xmlContent += `    </Port>\n`;
      });
      xmlContent += `  </Ports>\n`;
    }
    xmlContent += `</SIPPhoneConfig>\n`;

    // Define the directory where files will be saved
    // IMPORTANT: This path is relative to where your Next.js app is running
    // inside the Docker container. You'll map this via Docker volumes.
    const saveDirectory = path.join(process.cwd(), "xmlconfigs");

    // Ensure the directory exists
    await fs.mkdir(saveDirectory, { recursive: true });

    // Define the filename (e.g., using MAC address)
    // Sanitize MAC for filename
    const filename = `cfg${mac.replace(/[^a-zA-Z0-9]/g, "_")}.xml`;

    const filePath = path.join(saveDirectory, filename);

    // Write the XML content to the file
    await fs.writeFile(filePath, xmlContent);

    console.log(`Successfully saved XML to: ${filePath}`);

    return NextResponse.json({
      message: `Konfiguracija uspešno sačuvana za: ${filename}!`,
      filePath,
    });
  } catch (error) {
    console.error("Error saving configuration:", error);
    return NextResponse.json(
      { message: "Greška pri čuvanju konfiguracije.", error: error.message },
      { status: 500 }
    );
  }
}
