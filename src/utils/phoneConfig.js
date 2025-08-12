import createGrandstreamXml from "./generators/createGrandstreamXml";
import createPolycomXml from "./generators/createPolycomXml";
import createCiscoXml from "./generators/createCiscoXml";
import createFanvil_V62G_Xml from "./generators/createFanvil_V62G_Xml";
import createFanvil_X3U_Cfg from "./generators/createFanvil_X3U_Cfg";
import createFanvil_X7C_Cfg from "./generators/createFanvil_X7C_Cfg";
import createTeYalink_DECT_Cfg from "./generators/createTeYalink_DECT_Cfg";
import createTeYalink_T31G_Cfg from "./generators/createTeYalink_T31G_Cfg";
import createTeYalink_T43U_Cfg from "./generators/createTeYalink_T43U_Cfg";
import create_panasonic_KX_TGP600_cfg from "./generators/create_panasonic_KX_TGP600_cfg";
import create_VVX350_cfg from "./generators/create_VVX350_cfg";
import create_VVX350_phone_cfg from "./generators/create_VVX350_phone_cfg";
import create_VVX350_web_cfg from "./generators/create_VVX350_web_cfg";

export const phoneConfig = [
  {
    type: "Grandstream",
    model: "GXP_1625",
    path: "xmlconfigs/Grandstream",
    folderName: "Grandstream",
    encrypt: true,
    outputs: [
      { prefix: "cfg", extension: ".xml", generator: createGrandstreamXml },
    ],
  },
  {
    type: "Grandstream",
    model: "HT814",
    path: "xmlconfigs/Grandstream",
    folderName: "Grandstream",
    encrypt: true,
    outputs: [
      { prefix: "cfg", extension: ".xml", generator: createGrandstreamXml },
    ],
  },
  {
    type: "Grandstream",
    model: "HT818",
    path: "xmlconfigs/Grandstream",
    folderName: "Grandstream",
    encrypt: true,
    outputs: [
      { prefix: "cfg", extension: ".xml", generator: createGrandstreamXml },
    ],
  },
  {
    type: "Grandstream",
    model: "GXW4216",
    path: "xmlconfigs/Grandstream",
    folderName: "Grandstream",
    encrypt: true,
    outputs: [
      { prefix: "cfg", extension: ".xml", generator: createGrandstreamXml },
    ],
  },
  {
    type: "Grandstream",
    model: "GXW4224",
    path: "xmlconfigs/Grandstream",
    folderName: "Grandstream",
    encrypt: true,
    outputs: [
      { prefix: "phone1", extension: ".cfg", generator: createPolycomXml },
    ],
  },
  {
    type: "Polycom",
    model: "IP331",
    path: "xmlconfigs/",
    folderName: "Polycom",
    encrypt: false,
    outputs: [
      { prefix: "phone1", extension: ".cfg", generator: createPolycomXml },
    ],
  },
  {
    type: "Polycom",
    model: "IP650",
    path: "xmlconfigs/",
    folderName: "Polycom",
    encrypt: false,
    outputs: [
      { prefix: "phone1", extension: ".cfg", generator: createPolycomXml },
    ],
  },
  {
    type: "Polycom",
    model: "VVX350",
    path: "PlcmSpIp/",
    folderName: "Polycom-VVX350",
    encrypt: false,
    outputs: [
      { prefix: "", extension: ".cfg", generator: create_VVX350_cfg },
      {
        prefix: "",
        extension: "-phone.cfg",
        generator: create_VVX350_phone_cfg,
      },
      { prefix: "", extension: "-web.cfg", generator: create_VVX350_web_cfg },
    ],
  },
  {
    type: "Cisco",
    model: "502G",
    path: "xmlconfigs/Cisco502G",
    folderName: "Cisco-502G",
    encrypt: false,
    outputs: [
      { prefix: "spa502g_", extension: ".xml", generator: createCiscoXml },
    ],
  },
  {
    type: "Cisco",
    model: "512G",
    path: "xmlconfigs/Cisco512G",
    folderName: "Cisco-512G",
    encrypt: false,
    outputs: [
      { prefix: "spa512g_", extension: ".xml", generator: createCiscoXml },
    ],
  },
  {
    type: "Fanvil",
    model: "V62G",
    path: "tftpboot/",
    folderName: "Fanvil",
    encrypt: false,
    outputs: [
      { prefix: "", extension: ".cfg", generator: createFanvil_V62G_Xml },
    ],
  },
  {
    type: "Fanvil",
    model: "X3U",
    path: "tftpboot/",
    folderName: "Fanvil",
    encrypt: false,
    outputs: [
      { prefix: "", extension: ".cfg", generator: createFanvil_X3U_Cfg },
    ],
  },
  {
    type: "Fanvil",
    model: "X7C",
    path: "tftpboot/",
    folderName: "Fanvil",
    encrypt: false,
    outputs: [
      { prefix: "", extension: ".cfg", generator: createFanvil_X7C_Cfg },
    ],
  },
  {
    type: "Yealink",
    model: "DECT",
    path: "xmlconfigs/Yealink",
    folderName: "Yealink",
    encrypt: false,
    outputs: [
      { prefix: "", extension: ".cfg", generator: createTeYalink_DECT_Cfg },
    ],
  },
  {
    type: "Yealink",
    model: "T31G",
    path: "xmlconfigs/Yealink",
    folderName: "Yealink",
    encrypt: false,
    outputs: [
      { prefix: "", extension: ".cfg", generator: createTeYalink_T31G_Cfg },
    ],
  },
  {
    type: "Yealink",
    model: "T43U",
    path: "xmlconfigs/Yealink",
    folderName: "Yealink",
    encrypt: false,
    outputs: [
      { prefix: "", extension: ".cfg", generator: createTeYalink_T43U_Cfg },
    ],
  },
  {
    type: "Panasonic",
    model: "KX-TGP600",
    path: "xmlconfigs/PanasonicDECT",
    folderName: "Panasonic",
    encrypt: false,
    outputs: [
      {
        prefix: "Config",
        extension: ".cfg",
        generator: create_panasonic_KX_TGP600_cfg,
      },
    ],
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
