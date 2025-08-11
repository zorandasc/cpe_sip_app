export default function create_VVX350_web_cfg(selectedPhone, mac, portConfigs) {
  let config = portConfigs[0];

  //config={brojTelefona:"51330181",sifra:"123xxx"}

  let sifra = config.sifra;

  //"330181"
  let sipDisplay = `${config.brojTelefona.substring(2)}`;

  //+38751330181@mtel.ba"
  let sipAuthenicateId = `+387${config.brojTelefona}@mtel.ba`;

  //Lokal-181
  let sipLabel = `Lokal-${config.brojTelefona.substring(5)}`;

  let xmlContent = ``;

  return `${HEADER}${xmlContent}${BASE_TEMPLATE}`;
}

const HEADER=``
const BASE_TEMPLATE=``