export const phoneConfig = [
  {
    type: "Grandstream",
    model: "GXP_1625",
    path: "xmlconfigs/Grandstream",
    encrypt: true,
    prefix: "cfg",
    extension: ".xml",
  },
  {
    type: "Grandstream",
    model: "HT814",
    path: "xmlconfigs/Grandstream",
    encrypt: true,
    prefix: "cfg",
    extension: ".xml",
  },
  {
    type: "Grandstream",
    model: "HT818",
    path: "xmlconfigs/Grandstream",
    encrypt: true,
    prefix: "cfg",
    extension: ".xml",
  },
  {
    type: "Grandstream",
    model: "GXW4216",
    path: "xmlconfigs/Grandstream",
    encrypt: true,
    prefix: "cfg",
    extension: ".xml",
  },
  {
    type: "Grandstream",
    model: "GXW4224",
    path: "xmlconfigs/Grandstream",
    encrypt: true,
    prefix: "cfg",
    extension: ".xml",
  },
  {
    type: "Polycom",
    model: "IP331",
    path: "xmlconfigs/",
    encrypt: false,
    prefix: "phone1",
    extension: ".cfg",
  },
  {
    type: "Polycom",
    model: "IP650",
    path: "xmlconfigs/",
    encrypt: false,
    prefix: "phone1",
    extension: ".cfg",
  },
  {
    type: "Cisco",
    model: "502G",
    path: "xmlconfigs/Cisco502G",
    encrypt: false,
    prefix: "spa502g_",
    extension: ".xml",
  },
  {
    type: "Cisco",
    model: "512G",
    path: "xmlconfigs/Cisco512G",
    encrypt: false,
    prefix: "spa512g_",
    extension: ".xml",
  },
];

//GET ALL POSIBLE FOLDERS FROM phoneConfig array
//["xmlconfigs/Grandstream", "xmlconfigs/", "xmlconfigs/Cisco502G", "xmlconfigs/Cisco512G"]
export const phoneFolders = Array.from(
  new Set(phoneConfig.map((item) => item.path))
);
