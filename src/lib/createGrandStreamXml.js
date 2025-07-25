export default function xmlGrandStream(selectedPhone, mac, portConfigs) {
  let xmlContent = "";
  if (selectedPhone.port === 1) {
    //SINGLE PORT GRANDSTREAM
    let config = portConfigs[0];

    let sifra = config.sifra ? config.sifra : " ";
    let sipUsername = config.brojTelefona ? `+${config.brojTelefona}` : " ";
    let sipAuthenicateId = config.brojTelefona
      ? `+${config.brojTelefona}@mtel.ba`
      : " ";
    let sipDisplay = config.brojTelefona
      ? `0${config.brojTelefona.substring(3)}`
      : " ";

    //KREIRAJ XML FAJL
    xmlContent = `<?xml version=\"1.0\" encoding=\"UTF-8\" ?>\n`;
    xmlContent += `<!-- Grandstream XML Provisioning Configuration -->\n`;
    xmlContent += `<gs_provision version=\"1\">\n`;
    xmlContent += `<mac>${mac}</mac>\n`;

    xmlContent += `   <config version=\"1\">\n`;

    xmlContent += `       <!-- ########################################### -->\n`;
    xmlContent += `       <!-- ########################################### -->\n`;

    xmlContent += `       <!-- ##prvi SIP nalog## -->\n`;
    xmlContent += `       <!-- #prvi nalog je po default-u uvijek aktivan# -->\n`;

    xmlContent += `       <!-- #SIP password npr. abc123+*# -->\n`;
    xmlContent += `       <P34>${sifra}</P34>\n`;

    xmlContent += `       <!-- #SIP username npr. +38751490227 # -->\n`;
    xmlContent += `       <P35>${sipUsername}</P35>\n`;

    xmlContent += `       <!-- #SIP authenticate ID npr. +38751490227@mtel.ba # -->\n`;
    xmlContent += `       <P35>${sipAuthenicateId}</P35>\n`;

    xmlContent += `       <!-- #String koji ce biti prikazan na displeju telefona # -->\n`;
    xmlContent += `       <!-- #ovaj string moze biti duzine max 9 znakova, npr 051490227# -->\n`;
    xmlContent += `       <P270>${sipDisplay}</P270>\n`;

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
  } else {
    //MULTI PORT GRANDSTREAM, RGW
    xmlContent += `<gs_provision version=\"1\">\n`;
    xmlContent += ` <mac>${mac}</mac>\n`;
    xmlContent += ` <config version=\"1\">\n`;

    let userIdTag = 4060;
    let authIdTag = userIdTag + 30;
    let passTag = userIdTag + 60;
    let nameTag = userIdTag + 120;

    //LOOP OWER PHONE PORTS
    portConfigs.forEach((config, index) => {
      let sifra = config.sifra ? config.sifra : " ";
      let sipUserId = config.brojTelefona ? `+${config.brojTelefona}` : " ";
      let sipAuthenicateId = config.brojTelefona
        ? `+${config.brojTelefona}@mtel.ba`
        : " ";
      let sipDisplay = config.brojTelefona
        ? `0${config.brojTelefona.substring(3)}`
        : " ";

      xmlContent += `<!--  ################ FXS ${index} ######################  -->\n`;
      xmlContent += `<!--  #SIP USER ID; npr. +38751490227  -->\n`;
      xmlContent += `<P${userIdTag}>${sipUserId}</P${userIdTag}>\n`;
      xmlContent += `<!--  #Authenticate ID; npr. +38751490227@mtel.ba  -->\n`;
      xmlContent += `<P${authIdTag}>${sipAuthenicateId}</P${authIdTag}>\n`;
      xmlContent += `<!--  #Password; npr. abc.123*  -->\n`;
      xmlContent += `<P${passTag}>${sifra}</P${passTag}>\n`;
      xmlContent += `<!--  #Name; npr. 051490227  -->\n`;
      xmlContent += `<P${nameTag}>${sipDisplay}</P${nameTag}>\n`;

      userIdTag = userIdTag + 1;
      authIdTag = authIdTag + 1;
      passTag = passTag + 1;
      nameTag = nameTag + 1;
    });
    xmlContent += `<!--  # #### KRAJ PODESAVANJA #######  -->
        <!--  #### syslog enable #############  -->
        <!--  #### otkomentarisati po potrebi ###  -->
        <!--  #P207=10.252.64.109  -->
        <!--  #P208=5  -->
        <!--  #P1387=1  -->
        <!--  #### kraj syslog-a #############  -->
        <P2>acutnip*1</P2>
        <P29073>1</P29073>
        <P84>60</P84>
        <P740>5060</P740>
        <P40>5060</P40>
        <P194>1</P194>
        <P285>1</P285>
        <P8459>5</P8459>
        <P193>3000</P193>
        <P1409>0</P1409>
        <P5001>0</P5001>
        <P8463>0</P8463>
        <P4000>f1=425@-17,f2=0@-17,c=200/300-700/800;</P4000>
        <P4001>f1=425@-19,f2=0@-19,c=1000/4000;</P4001>
        <P4002>f1=425@-24,f2=0@-24,c=500/500;</P4002>
        <P4003>f1=480@-24,f2=620@-24,c=250/250;</P4003>
        <P4004>f1=350@-11,f2=440@-11,c=100/100-100/100-100/100;</P4004>
        <P4005>f1=425@-13,f2=0,c=300/800;</P4005>
        <P4041>f1=350@-13,f2=440@-13,c=0/0;</P4041>
        <P30>10.252.64.109</P30>
        <P21929>1</P21929>
        <P21930>3</P21930>
        <P271>1</P271>
        <P47>mtel.ba</P47>
        <P967>mtel.ba</P967>
        <P48>10.252.64.110</P48>
        <P2333>10.252.64.110</P2333>
        <P1411>0</P1411>
        <P130>0</P130>
        <P2329>1</P2329>
        <P2331>0</P2331>
        <P52>2</P52>
        <P103>0</P103>
        <P28092>0</P28092>
        <P46>18</P46>
        <P62>0</P62>
        <P31>1</P31>
        <P81>0</P81>
        <P109>0</P109>
        <P32>60</P32>
        <P2330>300</P2330>
        <P138>60</P138>
        <P26002>1200</P26002>
        <P2397>1</P2397>
        <P2398>60</P2398>
        <P20501>0</P20501>
        <P20505>0</P20505>
        <P2392>0</P2392>
        <P26003>1</P26003>
        <P135>0</P135>
        <P4560>0</P4560>
        <P4830>0</P4830>
        <P4562>0</P4562>
        <P288>1</P288>
        <P4340>0</P4340>
        <P258>0</P258>
        <P2346>0</P2346>
        <P2311>0</P2311>
        <P2367>0</P2367>
        <P243>0</P243>
        <P4437>1</P4437>
        <P79>101</P79>
        <P850>101</P850>
        <P851>100</P851>
        <P852>102</P852>
        <P4825>0</P4825>
        <P4433>0</P4433>
        <P74>0</P74>
        <P28080>0</P28080>
        <P191>0</P191>
        <P29>0</P29>
        <P72>1</P72>
        <P4200>{ x+ | *x+ | *xx*x+ }</P4200>
        <P99>0</P99>
        <P65>0</P65>
        <P129>0</P129>
        <P198>100</P198>
        <P2395>1</P2395>
        <P260>1800</P260>
        <P262>0</P262>
        <P263>0</P263>
        <P264>0</P264>
        <P266>0</P266>
        <P267>1</P267>
        <P265>1</P265>
        <P272>1</P272>
        <P2359>0</P2359>
        <P4363>1</P4363>
        <P57>8</P57>
        <P58>0</P58>
        <P59>18</P59>
        <P60>9</P60>
        <P61>8</P61>
        <P37>2</P37>
        <P49>0</P49>
        <P50>0</P50>
        <P291>0</P291>
        <P228>0</P228>
        <P4416>0</P4416>
        <P133>1</P133>
        <P132>1</P132>
        <P183>0</P183>
        <P2363>0</P2363>
        <P854>0</P854>
        <P205>0</P205>
        <P892>0</P892>
        <P251>200</P251>
        <P252>700</P252>
        <P833>100</P833>
        <P247>0</P247>
        <P249>0</P249>
        <P401>0</P401>
        <P196>user123</P196>
        <P28113>viewer123</P28113>
        <P1650>1</P1650>
        <P276>0</P276>
        <P20701>10.252.64.109</P20701>
        <P8>0</P8>
        <P64>CET-1CEST-2,M3.5.0/02:00:00,M10.5.0/03:00:00</P64>
        <P143>0</P143>
        <P342>0</P342>
        <P231>1</P231>
        <P189>1</P189>
      </config>
    </gs_provision>`;
  }

  return xmlContent;
}
