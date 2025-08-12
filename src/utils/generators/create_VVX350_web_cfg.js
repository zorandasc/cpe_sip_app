export default function create_VVX350_web_cfg(selectedPhone, mac, portConfigs) {
  let config = portConfigs[0];

  //config={brojTelefona:"51330181",sifra:"123xxx"}

  let password = config.sifra;

  //"330181"
  let sipAddress = `${config.brojTelefona.substring(2)}`;

  //+38751330181@mtel.ba"
  let sipUserId = `+387${config.brojTelefona}@mtel.ba`;

  let xmlContent = `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<!-- Application SIP Helford6 5.9.6.2996 30-Jan-21 15:34 -->
<!-- Created 11-08-2022 12:43 -->
<!-- Base profile Generic -->
<WEB_CONFIG>
	<OVERRIDES
		dialplan.digitmap="0[2-5]xxxxxxx|0[7-9]xxxxxxx|06[12356]xxxxxx|06[047]xxxxxxx|00x.T|2x|10x.T|12[1-5]|112|118x.T|120[0-9]|12[69][0-9]|12[78]x.T|1[345689]xx|17xxx|116xxx|x.T|xx.#|#xx|*6[179]|*2[16]|*94|*43|*51|[*#][*#x][*#x].#|[*#][*#x][*#x].T"
		lcl.datetime.time.24HourClock="1"
		tcpIpApp.sntp.address.overrideDHCP="1"
		tcpIpApp.sntp.gmtOffset="3600"
		tcpIpApp.sntp.gmtOffset.overrideDHCP="1"
		tcpIpApp.sntp.gmtOffsetcityID="49"
		upgrade.custom.server.url="ftp://PlcmSpIp:PlcmSpIp@10.252.64.109/pokusajPolycom.xml"
		voice.codecPref.G711_A="1"
		voice.codecPref.G711_Mu="2"
		voice.codecPref.G7221.32kbps="0"
		voice.codecPref.G7221_C.48kbps="0"
		voice.codecPref.G729_AB="3"
		voice.codecPref.Siren14.48kbps="0"
		voice.codecPref.Siren22.64kbps="0"
		voIpProt.SIP.local.port="5060"
		voIpProt.SIP.outboundProxy.address="10.252.64.110"
		voIpProt.SIP.outboundProxy.port="5060"
		voIpProt.SIP.outboundProxy.transport="UDPOnly"
		reg.1.address="${sipAddress}"
		reg.1.auth.domain="mtel.ba"
		reg.1.auth.password="${password}"
		reg.1.auth.userId="${sipUserId}"
		reg.1.ringType="ringer1"
		reg.1.ringType.privateLine="ringer1"
		reg.2.serverFeatureControl.cf="1"
		reg.1.serverFeatureControl.signalingMethod="serviceMsForwardContact"
		voIpProt.server.1.address="mtel.ba"
		voIpProt.server.1.port="5060"
		voIpProt.server.1.transport="UDPOnly"
		np.normal.ringing.calls.tonePattern="ringer2"
	/>
</WEB_CONFIG>

`;

  return xmlContent;
}
