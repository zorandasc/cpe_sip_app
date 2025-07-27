import createCiscoXml from "./createCiscoXml";
import createGrandstreamXml from "./createGrandstreamXml";
import createPolycomXml from "./createPolycomXml";

export default function createXml(selectedPhone, mac, portConfigs) {
  switch (selectedPhone.type) {
    case "Grandstream":
      return createGrandstreamXml(selectedPhone, mac, portConfigs);
    case "Polycom":
      return createPolycomXml(portConfigs);
    case "Cisco":
      return createCiscoXml(portConfigs);
    default:
      throw new Error("Unsupported phone type");
  }
}
