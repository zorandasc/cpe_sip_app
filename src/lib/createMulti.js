export default function xmlGrandStream(selectedPhone, mac, portConfigs) {

  
  //KREIRAJ XML FAJL
  let xmlContent = `<?xml version=\"1.0\" encoding=\"UTF-8\" ?>\n`;
  xmlContent += `<!-- Grandstream XML Provisioning Configuration -->\n`;
  xmlContent += `<gs_provision version=\"1\">\n`;
  xmlContent += `<mac>${mac}</mac>\n`;

  xmlContent += `   <config version=\"1\">\n`;

  xmlContent += `       <!-- ########################################### -->\n`;
  xmlContent += `       <!-- ########################################### -->\n`;

  xmlContent += `       <!-- ##prvi SIP nalog## -->\n`;
  xmlContent += `       <!-- #prvi nalog je po default-u uvijek aktivan# -->\n`;

  if (selectedPhone.port > 0) {
    portConfigs.forEach((config) => {
      xmlContent += `       <!-- #SIP password npr. abc123+*# -->\n`;
      xmlContent += `       <P34>${config.sifra}</P34>\n`;

      xmlContent += `       <!-- #SIP username npr. +38751490227 # -->\n`;
      xmlContent += `       <P35>+387${config.brojTelefona}</P35>\n`;

      xmlContent += `       <!-- #SIP authenticate ID npr. +38751490227@mtel.ba # -->\n`;
      xmlContent += `       <P35>+387${config.brojTelefona}@mtel.ba</P35>\n`;

      xmlContent += `       <!-- #String koji ce biti prikazan na displeju telefona # -->\n`;
      xmlContent += `       <!-- #ovaj string moze biti duzine max 9 znakova, npr 051490227# -->\n`;
      xmlContent += `       <P270>0${config.brojTelefona}</P270>\n`;
    });
  }
  xmlContent += `<!-- ###############cfg_kon.txt################ -->
              <!-- ##drugi sip nalog## -->
              <!-- #nalog aktivan - Da: 1, Ne: 0# -->
              <P401>0</P401>
              <!-- #SIP password npr.efg123+*# -->
              <!-- #P406= -->
              <!-- #SIP username npr. +38751209930# -->
              <!-- #P404= -->
              <!-- #SIP authenticate ID npr. +38751209930@mtel.ba # -->
              <!-- #P405= -->
              <!-- #String koji 'e biti prikazan na displeju telefona # -->
              <!-- #ovaj string moze biti duzine max 9 znakova# -->
              <!-- #P417=brojtelefona -->
              <!-- ##kraj podesavanja - OSTALO NE MIJENjATI## -->
              <!-- ############################################# -->
              <!-- ############################################# -->
              <!-- #Sifra za User nalog web interfejsa telefona# -->
              <P196>user123</P196>
              <!-- #Sifra za Admin nalog web int. telefona###### -->
              <P2>acutnip*1</P2>
              <!-- ################################################### -->
              <!-- ################################################### -->
              <!-- #parametar jezika - gxp znaci lokalizovani jezik# -->
              <!-- #ukoliko korisnik zeli engleski jezik potrebno je# -->
              <!-- #umjesto gxp upisati en # -->
              <P1362>gxp</P1362>
              <!-- ################################################### -->
              <P122>1</P122>
              <P1328>30</P1328>
              <P138>60</P138>
              <P139>10</P139>
              <P1415>0</P1415>
              <P143>0</P143>
              <P144>0</P144>
              <P194>3</P194>
                <P1366>1</P1366>
              <P2301>1</P2301>
              <P2303>1</P2303>
              <P2330>60</P2330>
              <P2341>1</P2341>
              <P2397>1</P2397>
              <P2398>60</P2398>
              <P2401>1</P2401>
              <P2403>1</P2403>
              <P2498>60</P2498>
              <P2541>1</P2541>
              <P260>1800</P260>
              <P290>{ x+ | *x+ | *xx*x+ | [*#][*#0-9][0-9*]+ }</P290>
              <P30>10.252.64.109</P30>
              <P334>8</P334>
              <P335>1</P335>
              <P343>f1=425,f2=0,c=20/30-70/80;</P343>
              <P346>f1=425,f2=0,c=100/400;</P346>
              <P347>f1=425,f2=0,c=30/80;</P347>
              <P348>f1=425,f2=0,c=50/50;</P348>
              <P402>mtel.ba</P402>
              <P403>10.252.64.110</P403>
              <P414>2</P414>
              <P434>1800</P434>
              <P435>1</P435>
              <P470>10</P470>
              <P476>30</P476>
              <P47>mtel.ba</P47>
              <P48>10.252.64.110</P48>
              <P52>2</P52>
              <P64>CET-1CEST-2,M3.5.0/02:00:00,M10.5.0/03:00:00</P64>
              <P84>60</P84>
            </config>
          </gs_provision>`;

  return xmlContent;
}
