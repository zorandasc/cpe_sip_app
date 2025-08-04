export default function createFanvil_X3U_Cfg(selectedPhone, mac, portConfigs) {
  //config={brojTelefona:"51330181",sifra:"123xxx"}
  let config = portConfigs[0];

  let displayName = `+387${config.brojTelefona}`;

  //+38751330181@mtel.ba"
  let registerUser = `+387${config.brojTelefona}@mtel.ba`;

  let registerPswd = config.sifra;

  let xmlContent = `--SIP Line List--  :
SIP1 Phone Number       :${displayName}
SIP1 Display Name       :${displayName}
SIP1 Sip Name           :mtel.ba
SIP1 Register Addr      :mtel.ba
SIP1 Register Port      :5060
SIP1 Register User      :${registerUser}
SIP1 Register Pswd      :${registerPswd}
SIP1 Register TTL       :3600
SIP1 Need Reg On        :0
SIP1 Backup Addr        :
SIP1 Backup Port        :5060
SIP1 Backup Transport   :0
SIP1 Backup TTL         :3600
SIP1 Backup Need Reg On :0
SIP1 Enable Reg         :1
SIP1 Proxy Addr         :10.252.64.110
SIP1 Proxy Port         :5060
SIP1 Proxy User         :${registerUser}
SIP1 Proxy Pswd         :${registerPswd}
SIP1 Proxy Need Reg On  :0
SIP1 BakProxy Addr      :
SIP1 BakProxy Port      :5060
SIP1 BakProxy Need Reg On:0
SIP1 Enable Failback    :1
SIP1 Failback Interval  :1800
SIP1 Signal Failback    :0
SIP1 Signal Retry Counts:3
SIP1 SigCrypto Key      :
SIP1 Media Crypto       :0
SIP1 MedCrypto Key      :
SIP1 SRTP Auth-Tag      :0
SIP1 Enable RFC5939     :0
SIP1 Local Domain       :mtel.ba
SIP1 Always FWD         :0
SIP1 Busy FWD           :0
SIP1 No Answer FWD      :0
SIP1 Always FWD Num     :
SIP1 Busy FWD Num       :
SIP1 NoAnswer FWD Num   :
SIP1 FWD Timer          :5
SIP1 Hotline Num        :
SIP1 Enable Hotline     :0
SIP1 WarmLine Time      :0
SIP1 Pickup Num         :
SIP1 Join Num           :
SIP1 Intercom Num       :
SIP1 Ring Type          :Default
SIP1 NAT UDPUpdate      :2
SIP1 UDPUpdate TTL      :30
SIP1 Server Type        :0
SIP1 User Agent         :
SIP1 PRACK              :0
SIP1 Keep AUTH          :0
SIP1 Session Timer      :0
SIP1 S Timer Expires    :0
SIP1 Enable GRUU        :0
SIP1 DTMF Mode          :3
SIP1 DTMF Info Mode     :0
SIP1 NAT Type           :0
SIP1 Enable Rport       :0
SIP1 Subscribe          :0
SIP1 Sub Expire         :3600
SIP1 Single Codec       :0
SIP1 CLIR               :0
SIP1 Strict Proxy       :0
SIP1 Direct Contact     :0
SIP1 History Info       :0
SIP1 DNS SRV            :0
SIP1 DNS Mode           :0
SIP1 XFER Expire        :0
SIP1 Ban Anonymous      :0
SIP1 Dial Off Line      :0
SIP1 Quota Name         :0
SIP1 Presence Mode      :0
SIP1 RFC Ver            :1
SIP1 Phone Port         :0
SIP1 Signal Port        :5060
SIP1 Transport          :0
SIP1 Use SRV Mixer      :0
SIP1 SRV Mixer Uri      :
SIP1 Long Contact       :0
SIP1 Auto TCP           :0
SIP1 Uri Escaped        :0
SIP1 Click to Talk      :0
SIP1 MWI Num            :
SIP1 CallPark Num       :
SIP1 Retrieve Num       :
SIP1 Retrieve Type      :0
SIP1 MSRPHelp Num       :
SIP1 User Is Phone      :0
SIP1 Auto Answer        :0
SIP1 NoAnswerTime       :5
SIP1 MissedCallLog      :1
SIP1 SvcCode Mode       :0
SIP1 DNDOn SvcCode      :
SIP1 DNDOff SvcCode     :
SIP1 CFUOn SvcCode      :
SIP1 CFUOff SvcCode     :
SIP1 CFBOn SvcCode      :
SIP1 CFBOff SvcCode     :
SIP1 CFNOn SvcCode      :
SIP1 CFNOff SvcCode     :
SIP1 ANCOn SvcCode      :
SIP1 ANCOff SvcCode     :
SIP1 Send ANOn Code     :
SIP1 Send ANOffCode     :
SIP1 CW On Code         :
SIP1 CW Off Code        :
SIP1 VoiceCodecMap      :PCMA,PCMU,G722
SIP1 VideoCodecMap      :
SIP1 BLFList Uri        :
SIP1 BLF Server         :
SIP1 Respond 182        :0
SIP1 Enable BLFList     :0
SIP1 Caller Id Type     :1
SIP1 Keep Higher Caller ID:0
SIP1 Syn Clock Time     :0
SIP1 Use VPN            :1
SIP1 Enable DND         :0
SIP1 Inactive Hold      :0
SIP1 Req With Port      :1
SIP1 Update Reg Expire  :1
SIP1 Enable SCA         :0
SIP1 Sub CallPark       :0
SIP1 Sub CC Status      :0
SIP1 Feature Sync       :0
SIP1 Enable XferBack    :0
SIP1 XferBack Time      :35
SIP1 Use Tel Call       :0
SIP1 Enable Preview     :0
SIP1 Preview Mode       :1
SIP1 TLS Version        :2
SIP1 CSTA Number        :
SIP1 Enable ChgPort     :1
SIP1 VQ Name            :
SIP1 VQ Server          :
SIP1 VQ Server Port     :5060
SIP1 VQ HTTP Server     :
SIP1 Flash Mode         :0
SIP1 Content Type       :
SIP1 Content Body       :
SIP1 Unregister On Boot :0
SIP1 Enable MAC Header  :0
SIP1 Enable Register MAC:0
SIP1 Record Start       :Record:on
SIP1 Record Stop        :Record:off
SIP1 BLF Dialog Match   :1
SIP1 Ptime              :2
SIP1 Enable Deal 180    :1
SIP1 Keep Single Contact:0
SIP1 Session Timer T1   :500
SIP1 Session Timer T2   :4000
SIP1 Session Timer T4   :5000
SIP1 Unavailable Mode   :0
SIP1 TCP Use Retry Timer:0`;

  return `${HEADER}${xmlContent}${BASE_TEMPLATE}`;
}

const HEADER = `<<VOIP CONFIG FILE>>Version:2.0000000000                      

<NET CONFIG MODULE>
WAN TYPE           :0
WAN IP             :192.168.1.179
WAN Subnet Mask    :255.255.255.0
WAN Gateway        :192.168.1.1
Domain Name        :
Primary DNS        :8.8.8.8
Secondary DNS      :202.96.134.133
Enable DHCP        :1
DHCP Auto DNS      :1
DHCP Auto Time     :0
DHCP Option 100-101:1
Use Vendor Class ID:0
Vendor Class ID    :Fanvil X3U
Enable PPPoE       :0
PPPoE User         :user123
PPPoE Password     :password
ARP Cache Life     :2
MTU                :1500
WAN6 IP             :
WAN6 IP PREFIX      :
WAN6 Gateway        :
Domain6 Name        :
Primary DNS6        :
Secondary DNS6      :
Enable DHCP6        :1
DHCP6 Auto DNS      :1
DHCP6 Auto Time     :0
Use Vendor6 Class ID:0
Vendor6 Class ID    :

<MM CONFIG MODULE>
ILBC Payload Type  :97
ILBC Payload Len   :20
G726-16 Payload Type:103
G726-24 Payload Type:104
G726-32 Payload Type:102
G726-40 Payload Type:105
Dtmf Payload Type  :101
Opus Payload Type  :107
Opus Sample  Rate  :0
VAD                :0
Resv Audio Band    :0
RTP Initial Port   :10000
RTP Port Quantity  :1000
RTP Keep Alive     :0
RTP Relay          :0
RTCP CNAME User    :
RTCP CNAME Host    :
Select Your Tone   :17
Sidetone GAIN      :1
Play Egress DTMF   :0
Dial Tone          :425/200,0/300,425/700,0/800
Ringback Tone      :425/1000,0/4000
Busy Tone          :425/500,0/500
Congestion Tone    :425/250,0/250
Call waiting Tone  :425/300,0/8000
Holding Tone       :
Error Tone         :
Stutter Tone       :
Information Tone   :950/330,1400/330,1800/330,0/1000
Dial Recall Tone   :
Message Tone       :
Howler Tone        :
Number Unobtainable:
Warning Tone       :
Record Tone        :
Auto Answer Tone   :
--PHONE CONFIG--   :
Audio Codec Sets   :PCMA,PCMU,G722

<SIP CONFIG MODULE>
SIP  Port          :5060
STUN Server        :
STUN Port          :3478
STUN Refresh Time  :50
SIP Wait Stun Time :800
Extern NAT Addrs   :
Reg Fail Interval  :32
SIP Pswd Encryption:0
Strict BranchPrefix:0
Video Mute Attr    :0
Enable Group Backup:0
Enable RFC4475     :0
Strict UA Match    :0
CSTA Enable        :0
Notify Reboot      :1`;

const BASE_TEMPLATE = `SIP2 Phone Number       :
SIP2 Display Name       :
SIP2 Sip Name           :
SIP2 Register Addr      :
SIP2 Register Port      :5060
SIP2 Register User      :
SIP2 Register Pswd      :
SIP2 Register TTL       :3600
SIP2 Need Reg On        :0
SIP2 Backup Addr        :
SIP2 Backup Port        :5060
SIP2 Backup Transport   :0
SIP2 Backup TTL         :3600
SIP2 Backup Need Reg On :0
SIP2 Enable Reg         :0
SIP2 Proxy Addr         :
SIP2 Proxy Port         :5060
SIP2 Proxy User         :
SIP2 Proxy Pswd         :
SIP2 Proxy Need Reg On  :0
SIP2 BakProxy Addr      :
SIP2 BakProxy Port      :5060
SIP2 BakProxy Need Reg On:0
SIP2 Enable Failback    :1
SIP2 Failback Interval  :1800
SIP2 Signal Failback    :0
SIP2 Signal Retry Counts:3
SIP2 SigCrypto Key      :
SIP2 Media Crypto       :0
SIP2 MedCrypto Key      :
SIP2 SRTP Auth-Tag      :0
SIP2 Enable RFC5939     :0
SIP2 Local Domain       :
SIP2 Always FWD         :0
SIP2 Busy FWD           :0
SIP2 No Answer FWD      :0
SIP2 Always FWD Num     :
SIP2 Busy FWD Num       :
SIP2 NoAnswer FWD Num   :
SIP2 FWD Timer          :5
SIP2 Hotline Num        :
SIP2 Enable Hotline     :0
SIP2 WarmLine Time      :0
SIP2 Pickup Num         :
SIP2 Join Num           :
SIP2 Intercom Num       :
SIP2 Ring Type          :default
SIP2 NAT UDPUpdate      :2
SIP2 UDPUpdate TTL      :30
SIP2 Server Type        :0
SIP2 User Agent         :
SIP2 PRACK              :0
SIP2 Keep AUTH          :0
SIP2 Session Timer      :0
SIP2 S Timer Expires    :0
SIP2 Enable GRUU        :0
SIP2 DTMF Mode          :3
SIP2 DTMF Info Mode     :0
SIP2 NAT Type           :0
SIP2 Enable Rport       :1
SIP2 Subscribe          :0
SIP2 Sub Expire         :3600
SIP2 Single Codec       :0
SIP2 CLIR               :0
SIP2 Strict Proxy       :1
SIP2 Direct Contact     :0
SIP2 History Info       :0
SIP2 DNS SRV            :0
SIP2 DNS Mode           :0
SIP2 XFER Expire        :0
SIP2 Ban Anonymous      :0
SIP2 Dial Off Line      :0
SIP2 Quota Name         :0
SIP2 Presence Mode      :0
SIP2 RFC Ver            :1
SIP2 Phone Port         :0
SIP2 Signal Port        :5060
SIP2 Transport          :0
SIP2 Use SRV Mixer      :0
SIP2 SRV Mixer Uri      :
SIP2 Long Contact       :0
SIP2 Auto TCP           :0
SIP2 Uri Escaped        :1
SIP2 Click to Talk      :0
SIP2 MWI Num            :
SIP2 CallPark Num       :
SIP2 Retrieve Num       :
SIP2 Retrieve Type      :0
SIP2 MSRPHelp Num       :
SIP2 User Is Phone      :0
SIP2 Auto Answer        :0
SIP2 NoAnswerTime       :5
SIP2 MissedCallLog      :1
SIP2 SvcCode Mode       :0
SIP2 DNDOn SvcCode      :
SIP2 DNDOff SvcCode     :
SIP2 CFUOn SvcCode      :
SIP2 CFUOff SvcCode     :
SIP2 CFBOn SvcCode      :
SIP2 CFBOff SvcCode     :
SIP2 CFNOn SvcCode      :
SIP2 CFNOff SvcCode     :
SIP2 ANCOn SvcCode      :
SIP2 ANCOff SvcCode     :
SIP2 Send ANOn Code     :
SIP2 Send ANOffCode     :
SIP2 CW On Code         :
SIP2 CW Off Code        :
SIP2 VoiceCodecMap      :PCMU,PCMA,G726-32,G729,iLBC,G722
SIP2 VideoCodecMap      :
SIP2 BLFList Uri        :
SIP2 BLF Server         :
SIP2 Respond 182        :0
SIP2 Enable BLFList     :0
SIP2 Caller Id Type     :4
SIP2 Keep Higher Caller ID:0
SIP2 Syn Clock Time     :0
SIP2 Use VPN            :1
SIP2 Enable DND         :0
SIP2 Inactive Hold      :0
SIP2 Req With Port      :1
SIP2 Update Reg Expire  :1
SIP2 Enable SCA         :0
SIP2 Sub CallPark       :0
SIP2 Sub CC Status      :0
SIP2 Feature Sync       :0
SIP2 Enable XferBack    :0
SIP2 XferBack Time      :35
SIP2 Use Tel Call       :0
SIP2 Enable Preview     :0
SIP2 Preview Mode       :1
SIP2 TLS Version        :2
SIP2 CSTA Number        :
SIP2 Enable ChgPort     :1
SIP2 VQ Name            :
SIP2 VQ Server          :
SIP2 VQ Server Port     :5060
SIP2 VQ HTTP Server     :
SIP2 Flash Mode         :0
SIP2 Content Type       :
SIP2 Content Body       :
SIP2 Unregister On Boot :0
SIP2 Enable MAC Header  :0
SIP2 Enable Register MAC:0
SIP2 Record Start       :Record:on
SIP2 Record Stop        :Record:off
SIP2 BLF Dialog Match   :1
SIP2 Ptime              :0
SIP2 Enable Deal 180    :1
SIP2 Keep Single Contact:0
SIP2 Session Timer T1   :500
SIP2 Session Timer T2   :4000
SIP2 Session Timer T4   :5000
SIP2 Unavailable Mode   :0
SIP2 TCP Use Retry Timer:0
SIP3 Phone Number       :
SIP3 Display Name       :
SIP3 Sip Name           :
SIP3 Register Addr      :
SIP3 Register Port      :5060
SIP3 Register User      :
SIP3 Register Pswd      :
SIP3 Register TTL       :3600
SIP3 Need Reg On        :0
SIP3 Backup Addr        :
SIP3 Backup Port        :5060
SIP3 Backup Transport   :0
SIP3 Backup TTL         :3600
SIP3 Backup Need Reg On :0
SIP3 Enable Reg         :0
SIP3 Proxy Addr         :
SIP3 Proxy Port         :5060
SIP3 Proxy User         :
SIP3 Proxy Pswd         :
SIP3 Proxy Need Reg On  :0
SIP3 BakProxy Addr      :
SIP3 BakProxy Port      :5060
SIP3 BakProxy Need Reg On:0
SIP3 Enable Failback    :1
SIP3 Failback Interval  :1800
SIP3 Signal Failback    :0
SIP3 Signal Retry Counts:3
SIP3 SigCrypto Key      :
SIP3 Media Crypto       :0
SIP3 MedCrypto Key      :
SIP3 SRTP Auth-Tag      :0
SIP3 Enable RFC5939     :0
SIP3 Local Domain       :
SIP3 Always FWD         :0
SIP3 Busy FWD           :0
SIP3 No Answer FWD      :0
SIP3 Always FWD Num     :
SIP3 Busy FWD Num       :
SIP3 NoAnswer FWD Num   :
SIP3 FWD Timer          :5
SIP3 Hotline Num        :
SIP3 Enable Hotline     :0
SIP3 WarmLine Time      :0
SIP3 Pickup Num         :
SIP3 Join Num           :
SIP3 Intercom Num       :
SIP3 Ring Type          :default
SIP3 NAT UDPUpdate      :2
SIP3 UDPUpdate TTL      :30
SIP3 Server Type        :0
SIP3 User Agent         :
SIP3 PRACK              :0
SIP3 Keep AUTH          :0
SIP3 Session Timer      :0
SIP3 S Timer Expires    :0
SIP3 Enable GRUU        :0
SIP3 DTMF Mode          :3
SIP3 DTMF Info Mode     :0
SIP3 NAT Type           :0
SIP3 Enable Rport       :1
SIP3 Subscribe          :0
SIP3 Sub Expire         :3600
SIP3 Single Codec       :0
SIP3 CLIR               :0
SIP3 Strict Proxy       :1
SIP3 Direct Contact     :0
SIP3 History Info       :0
SIP3 DNS SRV            :0
SIP3 DNS Mode           :0
SIP3 XFER Expire        :0
SIP3 Ban Anonymous      :0
SIP3 Dial Off Line      :0
SIP3 Quota Name         :0
SIP3 Presence Mode      :0
SIP3 RFC Ver            :1
SIP3 Phone Port         :0
SIP3 Signal Port        :5060
SIP3 Transport          :0
SIP3 Use SRV Mixer      :0
SIP3 SRV Mixer Uri      :
SIP3 Long Contact       :0
SIP3 Auto TCP           :0
SIP3 Uri Escaped        :1
SIP3 Click to Talk      :0
SIP3 MWI Num            :
SIP3 CallPark Num       :
SIP3 Retrieve Num       :
SIP3 Retrieve Type      :0
SIP3 MSRPHelp Num       :
SIP3 User Is Phone      :0
SIP3 Auto Answer        :0
SIP3 NoAnswerTime       :5
SIP3 MissedCallLog      :1
SIP3 SvcCode Mode       :0
SIP3 DNDOn SvcCode      :
SIP3 DNDOff SvcCode     :
SIP3 CFUOn SvcCode      :
SIP3 CFUOff SvcCode     :
SIP3 CFBOn SvcCode      :
SIP3 CFBOff SvcCode     :
SIP3 CFNOn SvcCode      :
SIP3 CFNOff SvcCode     :
SIP3 ANCOn SvcCode      :
SIP3 ANCOff SvcCode     :
SIP3 Send ANOn Code     :
SIP3 Send ANOffCode     :
SIP3 CW On Code         :
SIP3 CW Off Code        :
SIP3 VoiceCodecMap      :PCMU,PCMA,G726-32,G729,iLBC,G722
SIP3 VideoCodecMap      :
SIP3 BLFList Uri        :
SIP3 BLF Server         :
SIP3 Respond 182        :0
SIP3 Enable BLFList     :0
SIP3 Caller Id Type     :4
SIP3 Keep Higher Caller ID:0
SIP3 Syn Clock Time     :0
SIP3 Use VPN            :1
SIP3 Enable DND         :0
SIP3 Inactive Hold      :0
SIP3 Req With Port      :1
SIP3 Update Reg Expire  :1
SIP3 Enable SCA         :0
SIP3 Sub CallPark       :0
SIP3 Sub CC Status      :0
SIP3 Feature Sync       :0
SIP3 Enable XferBack    :0
SIP3 XferBack Time      :35
SIP3 Use Tel Call       :0
SIP3 Enable Preview     :0
SIP3 Preview Mode       :1
SIP3 TLS Version        :2
SIP3 CSTA Number        :
SIP3 Enable ChgPort     :1
SIP3 VQ Name            :
SIP3 VQ Server          :
SIP3 VQ Server Port     :5060
SIP3 VQ HTTP Server     :
SIP3 Flash Mode         :0
SIP3 Content Type       :
SIP3 Content Body       :
SIP3 Unregister On Boot :0
SIP3 Enable MAC Header  :0
SIP3 Enable Register MAC:0
SIP3 Record Start       :Record:on
SIP3 Record Stop        :Record:off
SIP3 BLF Dialog Match   :1
SIP3 Ptime              :0
SIP3 Enable Deal 180    :1
SIP3 Keep Single Contact:0
SIP3 Session Timer T1   :500
SIP3 Session Timer T2   :4000
SIP3 Session Timer T4   :5000
SIP3 Unavailable Mode   :0
SIP3 TCP Use Retry Timer:0
SIP4 Phone Number       :
SIP4 Display Name       :
SIP4 Sip Name           :
SIP4 Register Addr      :
SIP4 Register Port      :5060
SIP4 Register User      :
SIP4 Register Pswd      :
SIP4 Register TTL       :3600
SIP4 Need Reg On        :0
SIP4 Backup Addr        :
SIP4 Backup Port        :5060
SIP4 Backup Transport   :0
SIP4 Backup TTL         :3600
SIP4 Backup Need Reg On :0
SIP4 Enable Reg         :0
SIP4 Proxy Addr         :
SIP4 Proxy Port         :5060
SIP4 Proxy User         :
SIP4 Proxy Pswd         :
SIP4 Proxy Need Reg On  :0
SIP4 BakProxy Addr      :
SIP4 BakProxy Port      :5060
SIP4 BakProxy Need Reg On:0
SIP4 Enable Failback    :1
SIP4 Failback Interval  :1800
SIP4 Signal Failback    :0
SIP4 Signal Retry Counts:3
SIP4 SigCrypto Key      :
SIP4 Media Crypto       :0
SIP4 MedCrypto Key      :
SIP4 SRTP Auth-Tag      :0
SIP4 Enable RFC5939     :0
SIP4 Local Domain       :
SIP4 Always FWD         :0
SIP4 Busy FWD           :0
SIP4 No Answer FWD      :0
SIP4 Always FWD Num     :
SIP4 Busy FWD Num       :
SIP4 NoAnswer FWD Num   :
SIP4 FWD Timer          :5
SIP4 Hotline Num        :
SIP4 Enable Hotline     :0
SIP4 WarmLine Time      :0
SIP4 Pickup Num         :
SIP4 Join Num           :
SIP4 Intercom Num       :
SIP4 Ring Type          :default
SIP4 NAT UDPUpdate      :2
SIP4 UDPUpdate TTL      :30
SIP4 Server Type        :0
SIP4 User Agent         :
SIP4 PRACK              :0
SIP4 Keep AUTH          :0
SIP4 Session Timer      :0
SIP4 S Timer Expires    :0
SIP4 Enable GRUU        :0
SIP4 DTMF Mode          :3
SIP4 DTMF Info Mode     :0
SIP4 NAT Type           :0
SIP4 Enable Rport       :1
SIP4 Subscribe          :0
SIP4 Sub Expire         :3600
SIP4 Single Codec       :0
SIP4 CLIR               :0
SIP4 Strict Proxy       :1
SIP4 Direct Contact     :0
SIP4 History Info       :0
SIP4 DNS SRV            :0
SIP4 DNS Mode           :0
SIP4 XFER Expire        :0
SIP4 Ban Anonymous      :0
SIP4 Dial Off Line      :0
SIP4 Quota Name         :0
SIP4 Presence Mode      :0
SIP4 RFC Ver            :1
SIP4 Phone Port         :0
SIP4 Signal Port        :5060
SIP4 Transport          :0
SIP4 Use SRV Mixer      :0
SIP4 SRV Mixer Uri      :
SIP4 Long Contact       :0
SIP4 Auto TCP           :0
SIP4 Uri Escaped        :1
SIP4 Click to Talk      :0
SIP4 MWI Num            :
SIP4 CallPark Num       :
SIP4 Retrieve Num       :
SIP4 Retrieve Type      :0
SIP4 MSRPHelp Num       :
SIP4 User Is Phone      :0
SIP4 Auto Answer        :0
SIP4 NoAnswerTime       :5
SIP4 MissedCallLog      :1
SIP4 SvcCode Mode       :0
SIP4 DNDOn SvcCode      :
SIP4 DNDOff SvcCode     :
SIP4 CFUOn SvcCode      :
SIP4 CFUOff SvcCode     :
SIP4 CFBOn SvcCode      :
SIP4 CFBOff SvcCode     :
SIP4 CFNOn SvcCode      :
SIP4 CFNOff SvcCode     :
SIP4 ANCOn SvcCode      :
SIP4 ANCOff SvcCode     :
SIP4 Send ANOn Code     :
SIP4 Send ANOffCode     :
SIP4 CW On Code         :
SIP4 CW Off Code        :
SIP4 VoiceCodecMap      :PCMU,PCMA,G726-32,G729,iLBC,G722
SIP4 VideoCodecMap      :
SIP4 BLFList Uri        :
SIP4 BLF Server         :
SIP4 Respond 182        :0
SIP4 Enable BLFList     :0
SIP4 Caller Id Type     :4
SIP4 Keep Higher Caller ID:0
SIP4 Syn Clock Time     :0
SIP4 Use VPN            :1
SIP4 Enable DND         :0
SIP4 Inactive Hold      :0
SIP4 Req With Port      :1
SIP4 Update Reg Expire  :1
SIP4 Enable SCA         :0
SIP4 Sub CallPark       :0
SIP4 Sub CC Status      :0
SIP4 Feature Sync       :0
SIP4 Enable XferBack    :0
SIP4 XferBack Time      :35
SIP4 Use Tel Call       :0
SIP4 Enable Preview     :0
SIP4 Preview Mode       :1
SIP4 TLS Version        :2
SIP4 CSTA Number        :
SIP4 Enable ChgPort     :1
SIP4 VQ Name            :
SIP4 VQ Server          :
SIP4 VQ Server Port     :5060
SIP4 VQ HTTP Server     :
SIP4 Flash Mode         :0
SIP4 Content Type       :
SIP4 Content Body       :
SIP4 Unregister On Boot :0
SIP4 Enable MAC Header  :0
SIP4 Enable Register MAC:0
SIP4 Record Start       :Record:on
SIP4 Record Stop        :Record:off
SIP4 BLF Dialog Match   :1
SIP4 Ptime              :0
SIP4 Enable Deal 180    :1
SIP4 Keep Single Contact:0
SIP4 Session Timer T1   :500
SIP4 Session Timer T2   :4000
SIP4 Session Timer T4   :5000
SIP4 Unavailable Mode   :0
SIP4 TCP Use Retry Timer:0
SIP5 Phone Number       :
SIP5 Display Name       :
SIP5 Sip Name           :
SIP5 Register Addr      :
SIP5 Register Port      :5060
SIP5 Register User      :
SIP5 Register Pswd      :
SIP5 Register TTL       :3600
SIP5 Need Reg On        :0
SIP5 Backup Addr        :
SIP5 Backup Port        :5060
SIP5 Backup Transport   :0
SIP5 Backup TTL         :3600
SIP5 Backup Need Reg On :0
SIP5 Enable Reg         :0
SIP5 Proxy Addr         :
SIP5 Proxy Port         :5060
SIP5 Proxy User         :
SIP5 Proxy Pswd         :
SIP5 Proxy Need Reg On  :0
SIP5 BakProxy Addr      :
SIP5 BakProxy Port      :5060
SIP5 BakProxy Need Reg On:0
SIP5 Enable Failback    :1
SIP5 Failback Interval  :1800
SIP5 Signal Failback    :0
SIP5 Signal Retry Counts:3
SIP5 SigCrypto Key      :
SIP5 Media Crypto       :0
SIP5 MedCrypto Key      :
SIP5 SRTP Auth-Tag      :0
SIP5 Enable RFC5939     :0
SIP5 Local Domain       :
SIP5 Always FWD         :0
SIP5 Busy FWD           :0
SIP5 No Answer FWD      :0
SIP5 Always FWD Num     :
SIP5 Busy FWD Num       :
SIP5 NoAnswer FWD Num   :
SIP5 FWD Timer          :5
SIP5 Hotline Num        :
SIP5 Enable Hotline     :0
SIP5 WarmLine Time      :0
SIP5 Pickup Num         :
SIP5 Join Num           :
SIP5 Intercom Num       :
SIP5 Ring Type          :default
SIP5 NAT UDPUpdate      :2
SIP5 UDPUpdate TTL      :30
SIP5 Server Type        :0
SIP5 User Agent         :
SIP5 PRACK              :0
SIP5 Keep AUTH          :0
SIP5 Session Timer      :0
SIP5 S Timer Expires    :0
SIP5 Enable GRUU        :0
SIP5 DTMF Mode          :3
SIP5 DTMF Info Mode     :0
SIP5 NAT Type           :0
SIP5 Enable Rport       :1
SIP5 Subscribe          :0
SIP5 Sub Expire         :3600
SIP5 Single Codec       :0
SIP5 CLIR               :0
SIP5 Strict Proxy       :1
SIP5 Direct Contact     :0
SIP5 History Info       :0
SIP5 DNS SRV            :0
SIP5 DNS Mode           :0
SIP5 XFER Expire        :0
SIP5 Ban Anonymous      :0
SIP5 Dial Off Line      :0
SIP5 Quota Name         :0
SIP5 Presence Mode      :0
SIP5 RFC Ver            :1
SIP5 Phone Port         :0
SIP5 Signal Port        :5060
SIP5 Transport          :0
SIP5 Use SRV Mixer      :0
SIP5 SRV Mixer Uri      :
SIP5 Long Contact       :0
SIP5 Auto TCP           :0
SIP5 Uri Escaped        :1
SIP5 Click to Talk      :0
SIP5 MWI Num            :
SIP5 CallPark Num       :
SIP5 Retrieve Num       :
SIP5 Retrieve Type      :0
SIP5 MSRPHelp Num       :
SIP5 User Is Phone      :0
SIP5 Auto Answer        :0
SIP5 NoAnswerTime       :5
SIP5 MissedCallLog      :1
SIP5 SvcCode Mode       :0
SIP5 DNDOn SvcCode      :
SIP5 DNDOff SvcCode     :
SIP5 CFUOn SvcCode      :
SIP5 CFUOff SvcCode     :
SIP5 CFBOn SvcCode      :
SIP5 CFBOff SvcCode     :
SIP5 CFNOn SvcCode      :
SIP5 CFNOff SvcCode     :
SIP5 ANCOn SvcCode      :
SIP5 ANCOff SvcCode     :
SIP5 Send ANOn Code     :
SIP5 Send ANOffCode     :
SIP5 CW On Code         :
SIP5 CW Off Code        :
SIP5 VoiceCodecMap      :PCMU,PCMA,G726-32,G729,iLBC,G722
SIP5 VideoCodecMap      :
SIP5 BLFList Uri        :
SIP5 BLF Server         :
SIP5 Respond 182        :0
SIP5 Enable BLFList     :0
SIP5 Caller Id Type     :4
SIP5 Keep Higher Caller ID:0
SIP5 Syn Clock Time     :0
SIP5 Use VPN            :1
SIP5 Enable DND         :0
SIP5 Inactive Hold      :0
SIP5 Req With Port      :1
SIP5 Update Reg Expire  :1
SIP5 Enable SCA         :0
SIP5 Sub CallPark       :0
SIP5 Sub CC Status      :0
SIP5 Feature Sync       :0
SIP5 Enable XferBack    :0
SIP5 XferBack Time      :35
SIP5 Use Tel Call       :0
SIP5 Enable Preview     :0
SIP5 Preview Mode       :1
SIP5 TLS Version        :2
SIP5 CSTA Number        :
SIP5 Enable ChgPort     :1
SIP5 VQ Name            :
SIP5 VQ Server          :
SIP5 VQ Server Port     :5060
SIP5 VQ HTTP Server     :
SIP5 Flash Mode         :0
SIP5 Content Type       :
SIP5 Content Body       :
SIP5 Unregister On Boot :0
SIP5 Enable MAC Header  :0
SIP5 Enable Register MAC:0
SIP5 Record Start       :Record:on
SIP5 Record Stop        :Record:off
SIP5 BLF Dialog Match   :1
SIP5 Ptime              :0
SIP5 Enable Deal 180    :1
SIP5 Keep Single Contact:0
SIP5 Session Timer T1   :500
SIP5 Session Timer T2   :4000
SIP5 Session Timer T4   :5000
SIP5 Unavailable Mode   :0
SIP5 TCP Use Retry Timer:0
SIP6 Phone Number       :
SIP6 Display Name       :
SIP6 Sip Name           :
SIP6 Register Addr      :
SIP6 Register Port      :5060
SIP6 Register User      :
SIP6 Register Pswd      :
SIP6 Register TTL       :3600
SIP6 Need Reg On        :0
SIP6 Backup Addr        :
SIP6 Backup Port        :5060
SIP6 Backup Transport   :0
SIP6 Backup TTL         :3600
SIP6 Backup Need Reg On :0
SIP6 Enable Reg         :0
SIP6 Proxy Addr         :
SIP6 Proxy Port         :5060
SIP6 Proxy User         :
SIP6 Proxy Pswd         :
SIP6 Proxy Need Reg On  :0
SIP6 BakProxy Addr      :
SIP6 BakProxy Port      :5060
SIP6 BakProxy Need Reg On:0
SIP6 Enable Failback    :1
SIP6 Failback Interval  :1800
SIP6 Signal Failback    :0
SIP6 Signal Retry Counts:3
SIP6 SigCrypto Key      :
SIP6 Media Crypto       :0
SIP6 MedCrypto Key      :
SIP6 SRTP Auth-Tag      :0
SIP6 Enable RFC5939     :0
SIP6 Local Domain       :
SIP6 Always FWD         :0
SIP6 Busy FWD           :0
SIP6 No Answer FWD      :0
SIP6 Always FWD Num     :
SIP6 Busy FWD Num       :
SIP6 NoAnswer FWD Num   :
SIP6 FWD Timer          :5
SIP6 Hotline Num        :
SIP6 Enable Hotline     :0
SIP6 WarmLine Time      :0
SIP6 Pickup Num         :
SIP6 Join Num           :
SIP6 Intercom Num       :
SIP6 Ring Type          :default
SIP6 NAT UDPUpdate      :2
SIP6 UDPUpdate TTL      :30
SIP6 Server Type        :0
SIP6 User Agent         :
SIP6 PRACK              :0
SIP6 Keep AUTH          :0
SIP6 Session Timer      :0
SIP6 S Timer Expires    :0
SIP6 Enable GRUU        :0
SIP6 DTMF Mode          :3
SIP6 DTMF Info Mode     :0
SIP6 NAT Type           :0
SIP6 Enable Rport       :1
SIP6 Subscribe          :0
SIP6 Sub Expire         :3600
SIP6 Single Codec       :0
SIP6 CLIR               :0
SIP6 Strict Proxy       :1
SIP6 Direct Contact     :0
SIP6 History Info       :0
SIP6 DNS SRV            :0
SIP6 DNS Mode           :0
SIP6 XFER Expire        :0
SIP6 Ban Anonymous      :0
SIP6 Dial Off Line      :0
SIP6 Quota Name         :0
SIP6 Presence Mode      :0
SIP6 RFC Ver            :1
SIP6 Phone Port         :0
SIP6 Signal Port        :5060
SIP6 Transport          :0
SIP6 Use SRV Mixer      :0
SIP6 SRV Mixer Uri      :
SIP6 Long Contact       :0
SIP6 Auto TCP           :0
SIP6 Uri Escaped        :1
SIP6 Click to Talk      :0
SIP6 MWI Num            :
SIP6 CallPark Num       :
SIP6 Retrieve Num       :
SIP6 Retrieve Type      :0
SIP6 MSRPHelp Num       :
SIP6 User Is Phone      :0
SIP6 Auto Answer        :0
SIP6 NoAnswerTime       :5
SIP6 MissedCallLog      :1
SIP6 SvcCode Mode       :0
SIP6 DNDOn SvcCode      :
SIP6 DNDOff SvcCode     :
SIP6 CFUOn SvcCode      :
SIP6 CFUOff SvcCode     :
SIP6 CFBOn SvcCode      :
SIP6 CFBOff SvcCode     :
SIP6 CFNOn SvcCode      :
SIP6 CFNOff SvcCode     :
SIP6 ANCOn SvcCode      :
SIP6 ANCOff SvcCode     :
SIP6 Send ANOn Code     :
SIP6 Send ANOffCode     :
SIP6 CW On Code         :
SIP6 CW Off Code        :
SIP6 VoiceCodecMap      :PCMU,PCMA,G726-32,G729,iLBC,G722
SIP6 VideoCodecMap      :
SIP6 BLFList Uri        :
SIP6 BLF Server         :
SIP6 Respond 182        :0
SIP6 Enable BLFList     :0
SIP6 Caller Id Type     :4
SIP6 Keep Higher Caller ID:0
SIP6 Syn Clock Time     :0
SIP6 Use VPN            :1
SIP6 Enable DND         :0
SIP6 Inactive Hold      :0
SIP6 Req With Port      :1
SIP6 Update Reg Expire  :1
SIP6 Enable SCA         :0
SIP6 Sub CallPark       :0
SIP6 Sub CC Status      :0
SIP6 Feature Sync       :0
SIP6 Enable XferBack    :0
SIP6 XferBack Time      :35
SIP6 Use Tel Call       :0
SIP6 Enable Preview     :0
SIP6 Preview Mode       :1
SIP6 TLS Version        :2
SIP6 CSTA Number        :
SIP6 Enable ChgPort     :1
SIP6 VQ Name            :
SIP6 VQ Server          :
SIP6 VQ Server Port     :5060
SIP6 VQ HTTP Server     :
SIP6 Flash Mode         :0
SIP6 Content Type       :
SIP6 Content Body       :
SIP6 Unregister On Boot :0
SIP6 Enable MAC Header  :0
SIP6 Enable Register MAC:0
SIP6 Record Start       :Record:on
SIP6 Record Stop        :Record:off
SIP6 BLF Dialog Match   :1
SIP6 Ptime              :0
SIP6 Enable Deal 180    :1
SIP6 Keep Single Contact:0
SIP6 Session Timer T1   :500
SIP6 Session Timer T2   :4000
SIP6 Session Timer T4   :5000
SIP6 Unavailable Mode   :0
SIP6 TCP Use Retry Timer:0
--SIP P2P Config-- :
SIP P2P Enable Auto Answer:0
SIP P2P Auto Answer Delay :30
SIP P2P Dtmf Mode         :1
SIP P2P Sip Info Dtmf Mode:0
SIP P2P Enable Preview    :0
SIP P2P Preview Mode      :0
SIP P2P Use VPN           :1

<CALL FEATURE MODULE>
--Port Config--    :
P1 Enable XferDPlan   :1
P1 Enable FwdDPlan    :1
P1 Enable Pre DPlan   :0
P1 IP Dial Prefix     :.
P1 Enable DND         :1
P1 DND Mode           :0
P1 Enable Space DND   :0
P1 DND Start Time     :1500
P1 DND End Time       :1730
P1 Enable White List  :1
P1 Enable Black List  :0
P1 Enable CallBar     :0
P1 Mute Ringing       :0
P1 Ban Dial Out       :0
P1 Ban Empty CID      :0
P1 Enable CLIP        :1
P1 CallWaiting        :1
P1 CallTransfer       :1
P1 CallSemiXfer       :1
P1 CallConference     :1
P1 Auto PickupNext    :0
P1 Busy No Line       :1
P1 Auto Onhook        :1
P1 Auto Onhook Time   :3
P1 Enable Intercom    :0
P1 Intercom Mute      :0
P1 Intercom Tone      :0
P1 Intercom Barge     :0
P1 Use Auto Redial    :0
P1 Redial EnterCallLog:0
P1 AutoRedial Delay   :30
P1 AutoRedial Times   :5
P1 Call Complete      :0
P1 CHolding Tone      :1
P1 CWaiting Tone      :1
P1 Hide DTMF Type     :0
P1 Talk DTMF Tone     :1
P1 Dial DTMF Tone     :1
P1 Psw Dial Mode      :0
P1 Psw Dial Length    :0
P1 Psw Dial Prefix    :
P1 Enable MultiLine   :1
P1 Allow IP Call      :1
P1 Caller Name Type   :0
P1 Mute For Ring      :0
P1 Auto Handle Video  :0
P1 Default Ans Mode   :1
P1 Default Dial Mode  :1
P1 Hold To Transfer   :0
P1 Enable PreDial     :1
P1 Default Ext Line   :1
P1 Enable Def Line    :1
P1 Enable SelLine     :1
P1 Ring in Headset    :0
P1 Auto Headset       :0
P1 DND Return Code    :480
P1 Busy Return Code   :486
P1 Reject Return Code :603
P1 Contact Type       :0
P1 Enable Country Code:0
P1 Country Code       :
P1 Call Area Code     :
P1 Number Privacy     :0
P1 Privacy Rule       :.
P1 Transf DTMF Code   :
P1 Hold DTMF Code     :
P1 Conf DTMF Code     :
P1 Disable Dial Search:0
P1 Call Number Filter :
P1 Auto Resume Current:0
P1 Alert Timeout      :120
P1 Ring Timeout       :120
P1 Ring Priority      :0
--Basic DialPlan-- :
Dial by Pound      :1
BTransfer by Pound :0
Onhook to BXfer    :0
Onhook to AXfer    :0
Conf Onhook to Xfer:0
Dial Fixed Length  :0
Fixed Length Nums  :11
Dial by Timeout    :1
Dial Timeout value :10
Enable E OneSixFour:0
--Alert Info Ring--:
Alert1 Text               :
Alert1 Line               :-1
Alert1 Ring Type          :1
Alert2 Text               :
Alert2 Line               :-1
Alert2 Ring Type          :1
Alert3 Text               :
Alert3 Line               :-1
Alert3 Ring Type          :1
Alert4 Text               :
Alert4 Line               :-1
Alert4 Ring Type          :1
Alert5 Text               :
Alert5 Line               :-1
Alert5 Ring Type          :1
Alert6 Text               :
Alert6 Line               :-1
Alert6 Ring Type          :1
Alert7 Text               :
Alert7 Line               :-1
Alert7 Ring Type          :1
Alert8 Text               :
Alert8 Line               :-1
Alert8 Ring Type          :1
Alert9 Text               :
Alert9 Line               :-1
Alert9 Ring Type          :1
Alert10 Text               :
Alert10 Line               :-1
Alert10 Ring Type          :1

<PHONE FEATURE MODULE>
Menu Password      :123
KeyLock Password   :123
Fast Keylock Code  :
Enable KeyLock     :0
KeyLock Timeout    :0
KeyLock Status     :0
Emergency Call     :110
Push XML IP        :
SIP Number Plan    :0
LDAP Search        :0
Search Path        :0
Caller Display T   :5
CallLog DisplayType:0
Enable Recv SMS    :1
Enable Call History:1
Line Display Format:$name@$protocol$instance
Enable MWI Tone    :0
All Pswd Encryption:0
SIP Notify XML     :1
Block XML When Call:1
XML Update Interval:30
Vqm Display Order  :
Enable Push XML Auth:0
Pickup Visual Alert:0
Pickup Audio Alert :0
Pickup Ring Type   :Type 1
--Display Input--  :
LCD Title          :VOIP PHONE
LCD Constrast      :5
Enable Energysaving:4
LCD Luminance Level:12
Backlight Off Time :60
Disable CHN IME    :0
Phone Model        :
Host Name          :dvf97
Default Language   :en
Enable Greetings   :0
--Power LED--      :
Power              :0
MWI Or SMS         :3
In Using           :0
Ring               :2
Hold               :0
Mute               :0
Missed Call        :3
Powser Saving      :1
--Line LED--       :
Line Idle Color    :0
Line Idle Ctl      :1
--BLF LED--        :
BLF Idle Color     :0
BLF Idle Ctl       :1
BLF Idle Text      :terminated
BLF Ring Color     :1
BLF Ring Ctl       :2
BLF Ring Text      :early
BLF Dialing Color  :1
BLF Dialing Ctl    :0
BLF Dialing Text   :
BLF Talking Color  :1
BLF Talking Ctl    :1
BLF Talking Text   :confirmed
BLF Hold Color     :1
BLF Hold Ctl       :0
BLF Hold Text      :
BLF Failed Color   :0
BLF Failed Ctl     :0
BLF Failed Text    :failed
BLF Parked Color   :0
BLF Parked Ctl     :3
BLF Parked Text    :parked
--Voice Volume--   :
Handset Vol        :5
Handset Mic Vol    :3
Headset Vol        :5
Headset Mic Vol    :3
Headset Ring Vol   :5
HandFree Vol       :5
HandFree Mic Vol   :3
HandFree Ring Vol  :5
Ring Type          :default.wav
--DateTime Config--:
Enable SNTP        :1
SNTP Server        :10.252.64.109
Second SNTP Server :
Time Zone          :4
Time Zone Name     :UTC+1
SNTP Timeout       :60
DST Type           :1
DST Location       :7
DST Rule Mode      :0
DST Min Offset     :60
DST Start Mon      :3
DST Start Week     :5
DST Start Wday     :0
DST Start Hour     :2
DST End Mon        :10
DST End Week       :5
DST End Wday       :0
DST End Hour       :2
--DateTime Display--:
Enable TimeDisplay :0
Time Display Style :0
Date Display Style :0
Date Separator     :0
--Softkey Config-- :
Softkey Mode       :0
SoftKey Exit Style :2
Desktop Softkey    :history;contact;dnd;menu;
Talking Softkey    :hold;xfer;conf;end;
Ringing Softkey    :accept;none;forward;reject;
Alerting Softkey   :end;none;none;none;
XAlerting Softkey  :end;none;none;xfer;
Conference Softkey :hold;none;split;end;
Waiting Softkey    :xfer;accept;reject;end;
Ending Softkey     :repeat;none;none;end;
DialerPre Softkey  :send;2aB;delete;exit;
DialerCall Softkey :send;2aB;delete;exit;
DialerXfer Softkey :delete;xfer;send;exit;
DialerCfwd Softkey :send;2aB;delete;exit;
Desktop Click      :history;status;none;none;none;
Dailer  Click      :pline;nline;none;none;none;
Ringing Click      :none;none;none;none;none;
Call    Click      :none;none;none;none;none;
Desktop Long Press :status;none;none;none;reset;
DialerConf Softkey :contact;clogs;redial;video;cancel;
-- Agent Config--  :
Agent Username     :
Agent Password     :
Agent Number       :
Agent Sipline      :0
Agent Status       :0
Agent Status Reason:
Agent Clear CallLog:0
--BW Directory--   :
BWDir1 Title              :
BWDir1 URL                :
BWDir1 Username           :
BWDir1 Password           :
BWDir1 SipLine            :0
BWDir2 Title              :
BWDir2 URL                :
BWDir2 Username           :
BWDir2 Password           :
BWDir2 SipLine            :0
BWDir3 Title              :
BWDir3 URL                :
BWDir3 Username           :
BWDir3 Password           :
BWDir3 SipLine            :0
BWDir4 Title              :
BWDir4 URL                :
BWDir4 Username           :
BWDir4 Password           :
BWDir4 SipLine            :0
BWDir5 Title              :
BWDir5 URL                :
BWDir5 Username           :
BWDir5 Password           :
BWDir5 SipLine            :0
BWDir6 Title              :
BWDir6 URL                :
BWDir6 Username           :
BWDir6 Password           :
BWDir6 SipLine            :0
--BW Calllogs--    :
BWCLog1 Title              :
BWCLog1 URL                :
BWCLog1 Username           :
BWCLog1 Password           :
BWCLog1 SipLine            :0
BWCLog2 Title              :
BWCLog2 URL                :
BWCLog2 Username           :
BWCLog2 Password           :
BWCLog2 SipLine            :0
BWCLog3 Title              :
BWCLog3 URL                :
BWCLog3 Username           :
BWCLog3 Password           :
BWCLog3 SipLine            :0
--LDAP Config--    :
LDAP1 Title              :
LDAP1 Server             :
LDAP1 port               :389
LDAP1 Base               :
LDAP1 Use SSL            :0
LDAP1 Version            :3
LDAP1 Calling Line       :-1
LDAP1 Bind Line          :-1
LDAP1 In Call Search     :0
LDAP1 Out Call Search    :0
LDAP1 Authenticate       :3
LDAP1 Username           :
LDAP1 Password           :
LDAP1 Tel Attr           :telephoneNumber
LDAP1 Mobile Attr        :mobile
LDAP1 Other Attr         :other
LDAP1 Name Attr          :cn sn ou
LDAP1 Sort Attr          :cn
LDAP1 Displayname        :cn
LDAP1 Number Filter      :(|(telephoneNumber=%)(mobile=%)(other=%))
LDAP1 Name Filter        :(|(cn=%)(sn=%))
LDAP1 Max Hits           :50
LDAP2 Title              :
LDAP2 Server             :
LDAP2 port               :389
LDAP2 Base               :
LDAP2 Use SSL            :0
LDAP2 Version            :3
LDAP2 Calling Line       :-1
LDAP2 Bind Line          :-1
LDAP2 In Call Search     :0
LDAP2 Out Call Search    :0
LDAP2 Authenticate       :3
LDAP2 Username           :
LDAP2 Password           :
LDAP2 Tel Attr           :telephoneNumber
LDAP2 Mobile Attr        :mobile
LDAP2 Other Attr         :other
LDAP2 Name Attr          :cn sn ou
LDAP2 Sort Attr          :cn
LDAP2 Displayname        :cn
LDAP2 Number Filter      :(|(telephoneNumber=%)(mobile=%)(other=%))
LDAP2 Name Filter        :(|(cn=%)(sn=%))
LDAP2 Max Hits           :50
LDAP3 Title              :
LDAP3 Server             :
LDAP3 port               :389
LDAP3 Base               :
LDAP3 Use SSL            :0
LDAP3 Version            :3
LDAP3 Calling Line       :-1
LDAP3 Bind Line          :-1
LDAP3 In Call Search     :0
LDAP3 Out Call Search    :0
LDAP3 Authenticate       :3
LDAP3 Username           :
LDAP3 Password           :
LDAP3 Tel Attr           :telephoneNumber
LDAP3 Mobile Attr        :mobile
LDAP3 Other Attr         :other
LDAP3 Name Attr          :cn sn ou
LDAP3 Sort Attr          :cn
LDAP3 Displayname        :cn
LDAP3 Number Filter      :(|(telephoneNumber=%)(mobile=%)(other=%))
LDAP3 Name Filter        :(|(cn=%)(sn=%))
LDAP3 Max Hits           :50
LDAP4 Title              :
LDAP4 Server             :
LDAP4 port               :389
LDAP4 Base               :
LDAP4 Use SSL            :0
LDAP4 Version            :3
LDAP4 Calling Line       :-1
LDAP4 Bind Line          :-1
LDAP4 In Call Search     :0
LDAP4 Out Call Search    :0
LDAP4 Authenticate       :3
LDAP4 Username           :
LDAP4 Password           :
LDAP4 Tel Attr           :telephoneNumber
LDAP4 Mobile Attr        :mobile
LDAP4 Other Attr         :other
LDAP4 Name Attr          :cn sn ou
LDAP4 Sort Attr          :cn
LDAP4 Displayname        :cn
LDAP4 Number Filter      :(|(telephoneNumber=%)(mobile=%)(other=%))
LDAP4 Name Filter        :(|(cn=%)(sn=%))
LDAP4 Max Hits           :50
LDAP5 Title              :
LDAP5 Server             :
LDAP5 port               :389
LDAP5 Base               :
LDAP5 Use SSL            :0
LDAP5 Version            :3
LDAP5 Calling Line       :-1
LDAP5 Bind Line          :-1
LDAP5 In Call Search     :0
LDAP5 Out Call Search    :0
LDAP5 Authenticate       :3
LDAP5 Username           :
LDAP5 Password           :
LDAP5 Tel Attr           :telephoneNumber
LDAP5 Mobile Attr        :mobile
LDAP5 Other Attr         :other
LDAP5 Name Attr          :cn sn ou
LDAP5 Sort Attr          :cn
LDAP5 Displayname        :cn
LDAP5 Number Filter      :(|(telephoneNumber=%)(mobile=%)(other=%))
LDAP5 Name Filter        :(|(cn=%)(sn=%))
LDAP5 Max Hits           :50
--Xml PhoneBook--  :
XML-PBook1 Name               :
XML-PBook1 Addr               :
XML-PBook1 UserName           :
XML-PBook1 PassWd             :
XML-PBook1 Sipline            :-1
XML-PBook1 BindLine           :-1
XML-PBook2 Name               :
XML-PBook2 Addr               :
XML-PBook2 UserName           :
XML-PBook2 PassWd             :
XML-PBook2 Sipline            :-1
XML-PBook2 BindLine           :-1
XML-PBook3 Name               :
XML-PBook3 Addr               :
XML-PBook3 UserName           :
XML-PBook3 PassWd             :
XML-PBook3 Sipline            :-1
XML-PBook3 BindLine           :-1
XML-PBook4 Name               :
XML-PBook4 Addr               :
XML-PBook4 UserName           :
XML-PBook4 PassWd             :
XML-PBook4 Sipline            :-1
XML-PBook4 BindLine           :-1
XML-PBook5 Name               :
XML-PBook5 Addr               :
XML-PBook5 UserName           :
XML-PBook5 PassWd             :
XML-PBook5 Sipline            :-1
XML-PBook5 BindLine           :-1
--Time Plan List--  :
TimePlan1 Type                :1
TimePlan1 Repeat              :2
TimePlan1 Repeat Date         :0
TimePlan1 Start Time          :0:0
TimePlan1 End Time            :3:0
TimePlan1 Extra               :

<DEVICE MANAGER MODULE>
Onhook Time        :120
Enable Hookflash   :0
Key Long Press Time:2
Key Long Long Press Time:6

<VQM CONFIG MODULE>
Session Report     :0
Interval Report    :0
Interval Period    :60
MOS-LQ Warning     :40
MOS-LQ Critical    :25
Delay Warning      :150
Delay Critical     :200
Phone Report       :1
WEB Report         :1

<CTI CONFIG MODULE>
Enabled Active Uri :1
Enabled Action Url :1
Action Url Type    :0
Active Uri IP      :
Start Reboot Url   :
Boot Completed Url :
IP Change Url      :
Reg On Url         :
Reg Off Url        :
Reg Failed Url     :
PhoneState Idle Url:
PhoneState Talking :
PhoneState Ringing :
Onhook Uri         :
Offhook Url        :
DND On Url         :
DND Off Url        :
Always FWD On Url  :
Always FWD Off Url :
Busy FWD On Url    :
Busy FWD Off Url   :
No Ans FWD On Url  :
No Ans FWD Off Url :
Mute On Url        :
Mute Off Url       :
Incoming Call Url  :
Outgoing Call Url  :
Call Active Url    :
Call Stop Url      :
Transfer Url       :
Hold On Url        :
Hold Off Url       :
Held On Url        :
Held Off Url       :
Mute On Call Url   :
Mute Off Call Url  :
New Missed call Url:
New MWI Url        :
New SMS Url        :
Web Auth Changed Url:

<ATE CONFIG MODULE>
ATE Id            :0000000000000000

<MCAST CFG MODULE>
Priority           :0
Enable Priority    :0
Enable Prio Chan   :0
Enable Emer Chan   :0
Multicast Tone     :1
--Mcast Addr--     :
MCAST1 Name               :
MCAST1 Host               :
MCAST1 Port               :0
MCAST1 Channel            :0
MCAST2 Name               :
MCAST2 Host               :
MCAST2 Port               :0
MCAST2 Channel            :0
MCAST3 Name               :
MCAST3 Host               :
MCAST3 Port               :0
MCAST3 Channel            :0
MCAST4 Name               :
MCAST4 Host               :
MCAST4 Port               :0
MCAST4 Channel            :0
MCAST5 Name               :
MCAST5 Host               :
MCAST5 Port               :0
MCAST5 Channel            :0
MCAST6 Name               :
MCAST6 Host               :
MCAST6 Port               :0
MCAST6 Channel            :0
MCAST7 Name               :
MCAST7 Host               :
MCAST7 Port               :0
MCAST7 Channel            :0
MCAST8 Name               :
MCAST8 Host               :
MCAST8 Port               :0
MCAST8 Channel            :0
MCAST9 Name               :
MCAST9 Host               :
MCAST9 Port               :0
MCAST9 Channel            :0
MCAST10 Name               :
MCAST10 Host               :
MCAST10 Port               :0
MCAST10 Channel            :0
--Mcast Dynamic--  :
Auto Exit Expires  :60

<DSSKEY CONFIG MODULE>
Select DsskeyAction:0
Memory Key to BXfer:3
FuncKey Page Num   :1
SideKey Page Num   :1
DSS Home Page      :0
Display Parked Info:0
DSS DIAL Switch Mode :0
First Call Wait Time :16
First Num Start Time :360
First Num End Time   :1080
DSS Long Press Action:1
Extern1 Page Belong :0
Extern2 Page Belong :0
Extern3 Page Belong :0
Extern4 Page Belong :0
Extern5 Page Belong :0
DSS Extend1 MAC     :
DSS Extend1 IP      :
DSS Extend2 MAC     :
DSS Extend2 IP      :
DSS Extend3 MAC     :
DSS Extend3 IP      :
DSS Extend4 MAC     :
DSS Extend4 IP      :
DSS Extend5 MAC     :
DSS Extend5 IP      :
--Sidekey Config1--:
Fkey1 Type               :2
Fkey1 Value              :SIP1
Fkey1 Title              :
Fkey1 ICON               :Green
Fkey2 Type               :2
Fkey2 Value              :SIP2
Fkey2 Title              :
Fkey2 ICON               :Green
Fkey3 Type               :2
Fkey3 Value              :SIP3
Fkey3 Title              :
Fkey3 ICON               :Green
--SoftDss Config-- :
Fkey1 Type               :0
Fkey1 Value              :
Fkey1 Title              :
Fkey1 ICON               :Green
Fkey2 Type               :0
Fkey2 Value              :
Fkey2 Title              :
Fkey2 ICON               :Green
Fkey3 Type               :0
Fkey3 Value              :
Fkey3 Title              :
Fkey3 ICON               :Green
Fkey4 Type               :0
Fkey4 Value              :
Fkey4 Title              :
Fkey4 ICON               :Green
Fkey5 Type               :0
Fkey5 Value              :
Fkey5 Title              :
Fkey5 ICON               :Green
Fkey6 Type               :0
Fkey6 Value              :
Fkey6 Title              :
Fkey6 ICON               :Green
Fkey7 Type               :0
Fkey7 Value              :
Fkey7 Title              :
Fkey7 ICON               :Green
Fkey8 Type               :0
Fkey8 Value              :
Fkey8 Title              :
Fkey8 ICON               :Green
Fkey9 Type               :0
Fkey9 Value              :
Fkey9 Title              :
Fkey9 ICON               :Green
Fkey10 Type               :0
Fkey10 Value              :
Fkey10 Title              :
Fkey10 ICON               :Green

<MMI CONFIG MODULE>
Web Server Type    :0
Web Port           :80
Https Web Port     :443
Remote Control     :1
Enable MMI Filter  :0
Web Authentication :0
Enable Telnet      :0
Telnet Port        :23
Telnet Prompt      :
Logon Timeout      :15
--MMI Account--    :
Account1 Name               :admin
Account1 Password           :admin
Account1 Level              :10
Account2 Name               :guest
Account2 Password           :guest
Account2 Level              :5

<LOG CONFIG MODULE>
Level              :ERROR
Style              :level,tag
Output Device      :
File Name          :platform.log
File Size          :512KB
Syslog Tag         :platform
Syslog Server      :0.0.0.0
Syslog Server Port :514

<TR069 CONFIG MODULE>
TR069 Tone         :1
CPE SerialNumber   :00100400FV02001000000c383e2599fe
ACS Server Type    :1
Enable TR069       :0
ACS URL            :0.0.0.0
ACS UserName       :admin
ACS Password       :
ACS Backup URL     :0.0.0.0
ACS BackupUserName :
ACS BackupPassword :
CPE UserName       :dps
CPE Password       :dps
Periodix Interval  :3600
TLS Version        :2
Area Code          :020
STUN Enable        :0
STUN Server Addr   :
STUN Server Port   :3478
STUN Local Port    :30000
STUN Max Period    :30
STUN Min Period    :30

<SIP Hotspot MODULE>
Enable Hotspot     :0
Mode               :1
Listen Type        :0
Listen IP          :224.0.2.0
Listen Port        :16360
Own Name           :SIP Hotspot
Ring Mode          :0
Enable Manage Mode :0
Enable Config Mode :0
--Line Conf List-- :
HS1 Enable             :1
HS1 Ext Prefix         :
HS2 Enable             :1
HS2 Ext Prefix         :
HS3 Enable             :1
HS3 Ext Prefix         :
HS4 Enable             :1
HS4 Ext Prefix         :
HS5 Enable             :1
HS5 Ext Prefix         :
HS6 Enable             :1
HS6 Ext Prefix         :

<VPN CONFIG MODULE>
VPN mode           :-1
Enable VPN         :0
Enable Nat         :0
Openvpn mode       :0
L2TP Server Address:0.0.0.0
L2TP User Name     :
L2TP Password      :
L2TP Negotiate DNS :1
PPTP Server Address:0.0.0.0
PPTP User Name     :
PPTP Password      :

<MAINTENANCE CONFIG MODULE>
Contact Update Mode:0
Auto Server Digest :0

<AUTOUPDATE CONFIG MODULE>
Default Username   :
Default Password   :
Input Cfg File Name:
Device Cfg File Key:
Common Cfg File Key:
Download CommonConf:1
Save Provision Info:0
Check FailTimes    :5
Flash Server IP    :
Flash File Name    :
Flash Protocol     :2
Flash Mode         :0
Flash Interval     :1
update PB Interval :720
AP Pswd Encryption :0
--Sip Pnp List--   :
PNP Enable         :1
PNP IP             :224.0.1.75
PNP Port           :5060
PNP Transport      :0
PNP Interval       :1
--Net Option--     :
DHCP Option        :66
DHCPv6 Option      :0
Dhcp Option 120    :0
Save DHCP Opion    :0
Dhcp Renew Upgrade :1

<FIRMWARE CHECK MODULE>
Enable Auto Upgrade:0
Upgrade Server 1   :
Upgrade Server 2   :
Auto Upgrade Interval:24

<QOS CONFIG MODULE>
Enable VLAN        :0
VLAN ID            :256
Enable PVID        :1
PVID Value         :254
Signalling Priority:0
Voice Priority     :0
Video Priority     :0
LAN Port Priority  :0
Enable diffServ    :0
Singalling DSCP    :46
Voice DSCP         :46
Video DSCP         :46
LLDP Transmit      :1
LLDP Refresh Time  :60
LLDP Learn Policy  :1
LLDP Save Learn Data:0
CDP Enable         :0
CDP Refresh Time   :60
DHCP Option Vlan   :132

<DOT1X CONFIG MODULE>
Xsup Mode          :0
Xsup User          :admin
Xsup Password      :admin
--SSL Mode--       :
Permission CTF     :0
Common Name        :0
CTF mode           :0
Device Cert Mode   :0

<APP CONFIG MODULE>
Watch Dog Enabled  :1
Enable In Access   :0
Enable Out Access   :0

<RECORD CONFIG MODULE>
Enabled            :1
Voice Codec        :PCMU
Record Type        :1
File Size Limit    :8
Server Addr        :0.0.0.0
Server Port        :10000

<UI MAINTAIN CONFIG MODULE>
Timeout To Screensaver :7200
User Change Background :0
User Change Sub Background :
EHS Headset type :0
Missed Call Popup      :1
MWI Popup              :1
Device Connect Popup   :0
SMS Popup              :1
Other Popup            :1
Enable Port Mirror     :0
Sidekey Label Length   :0
App Icon Display       :1,1,1,1
Display Provision prompt :0
Idle Time Font Color   :0x262626
Common Title Font Color:0xffffff
Softkey Font Color     :0xffffff
Menu List Font Color   :0x262626
Scroll Bar Color       :0x5a9dba
Warn Theme Color       :0xc4012f
Inform Theme Color     :0x007bb0
Funkey List Font Color :0xffffff
Talking Font Color     :0x262626
Desktop Time Display   :1
Timeout To Power Saving:
<<END OF FILE>>`;
