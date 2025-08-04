import createGrandstreamXml from "./generators/createGrandstreamXml";
import createPolycomXml from "./generators/createPolycomXml";
import createCiscoXml from "./generators/createCiscoXml";
import createFanvil_V62G_Xml from "./generators/createFanvil_V62G_Xml";
import createFanvil_X3U_Cfg from "./generators/createFanvil_X3U_Cfg";
import createFanvil_X7C_Cfg from "./generators/createFanvil_X7C_Cfg";

export const phoneConfig = [
  {
    type: "Grandstream",
    model: "GXP_1625",
    path: "xmlconfigs/Grandstream",
    folderName: "Grandstream",
    encrypt: true,
    prefix: "cfg",
    extension: ".xml",
    generator: createGrandstreamXml,
  },
  {
    type: "Grandstream",
    model: "HT814",
    path: "xmlconfigs/Grandstream",
    folderName: "Grandstream",
    encrypt: true,
    prefix: "cfg",
    extension: ".xml",
    generator: createGrandstreamXml,
  },
  {
    type: "Grandstream",
    model: "HT818",
    path: "xmlconfigs/Grandstream",
    folderName: "Grandstream",
    encrypt: true,
    prefix: "cfg",
    extension: ".xml",
    generator: createGrandstreamXml,
  },
  {
    type: "Grandstream",
    model: "GXW4216",
    path: "xmlconfigs/Grandstream",
    folderName: "Grandstream",
    encrypt: true,
    prefix: "cfg",
    extension: ".xml",
    generator: createGrandstreamXml,
  },
  {
    type: "Grandstream",
    model: "GXW4224",
    path: "xmlconfigs/Grandstream",
    folderName: "Grandstream",
    encrypt: true,
    prefix: "cfg",
    extension: ".xml",
    generator: createGrandstreamXml,
  },
  {
    type: "Polycom",
    model: "IP331",
    path: "xmlconfigs/",
    folderName: "Polycom",
    encrypt: false,
    prefix: "phone1",
    extension: ".cfg",
    generator: createPolycomXml,
  },
  {
    type: "Polycom",
    model: "IP650",
    path: "xmlconfigs/",
    folderName: "Polycom",
    encrypt: false,
    prefix: "phone1",
    extension: ".cfg",
    generator: createPolycomXml,
  },
  {
    type: "Cisco",
    model: "502G",
    path: "xmlconfigs/Cisco502G",
    folderName: "Cisco502G",
    encrypt: false,
    prefix: "spa502g_",
    extension: ".xml",
    generator: createCiscoXml,
  },
  {
    type: "Cisco",
    model: "512G",
    path: "xmlconfigs/Cisco512G",
    folderName: "Cisco512G",
    encrypt: false,
    prefix: "spa512g_",
    extension: ".xml",
    generator: createCiscoXml,
  },
  {
    type: "Fanvil",
    model: "V62G",
    path: "tftpboot/",
    folderName: "Fanvil",
    encrypt: false,
    prefix: "",
    extension: ".cfg",
    generator: createFanvil_V62G_Xml,
  },
  {
    type: "Fanvil",
    model: "X3U",
    path: "tftpboot/",
    folderName: "Fanvil",
    encrypt: false,
    prefix: "",
    extension: ".cfg",
    generator: createFanvil_X3U_Cfg,
  },
  {
    type: "Fanvil",
    model: "X7C",
    path: "tftpboot/",
    folderName: "Fanvil",
    encrypt: false,
    prefix: "",
    extension: ".cfg",
    generator: createFanvil_X7C_Cfg,
  },
];

//GET ALL POSIBLE FOLDERS FROM phoneConfig array
//["xmlconfigs/Grandstream", "xmlconfigs/", "xmlconfigs/Cisco502G", "xmlconfigs/Cisco512G"]
export const phoneFolders = Array.from(
  new Set(
    phoneConfig.map((item) =>
      JSON.stringify({ path: item.path, folderName: item.folderName })
    )
  )
).map((item) => JSON.parse(item));

/*
map() converts each object into a string.
new Set() removes duplicates based on string value.
Array.from() converts the Set back to an array.
Final map() parses the strings back into objects.
*/
