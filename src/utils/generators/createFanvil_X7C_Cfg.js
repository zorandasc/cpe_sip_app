export default function createFanvil_X7C_Cfg(selectedPhone, mac, portConfigs) {
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
SIP1 Backup Mode        :0
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
SIP1 Enable OSRTP       :0
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
SIP1 UDPUpdate Try Times:3
SIP1 Server Type        :0
SIP1 User Agent         :
SIP1 PRACK              :0
SIP1 Keep AUTH          :0
SIP1 Session Timer      :0
SIP1 S Timer Expires    :1800
SIP1 Enable GRUU        :0
SIP1 DTMF Mode          :3
SIP1 DTMF Info Mode     :0
SIP1 NAT Type           :0
SIP1 Enable Rport       :1
SIP1 Subscribe          :0
SIP1 Sub Expire         :3600
SIP1 Single Codec       :0
SIP1 CLIR               :0
SIP1 Strict Proxy       :1
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
SIP1 Uri Escaped        :1
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
SIP1 VoiceCodecMap      :PCMA,PCMU,G729,G722
SIP1 VideoCodecMap      :
SIP1 BLFList Uri        :
SIP1 BLF Server         :
SIP1 Respond 182        :0
SIP1 Enable BLFList     :0
SIP1 Caller Id Type     :4
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
SIP1 Enable ChgPort     :0
SIP1 VQ Name            :
SIP1 VQ Server          :
SIP1 VQ Server Port     :5060
SIP1 VQ HTTP Server     :
SIP1 Flash Mode         :0
SIP1 Content Type       :
SIP1 Content Body       :
SIP1 Unregister On Boot :1
SIP1 Enable MAC Header  :1
SIP1 Enable Register MAC:1
SIP1 Record Start       :Record:on
SIP1 Record Stop        :Record:off
SIP1 BLF Dialog Match   :1
SIP1 Ptime              :0
SIP1 Enable Deal 180    :1
SIP1 Keep Single Contact:0
SIP1 Session Timer T1   :500
SIP1 Session Timer T2   :4000
SIP1 Session Timer T4   :5000
SIP1 Unavailable Mode   :0
SIP1 TCP Use Retry Timer:0
SIP1 Call-ID Format     :$id@$ip
SIP1 GB28181 Mode       :0
SIP1 Proxy Require      :
SIP1 Block RTP When Alerting:0
SIP1 Group Callpark Number:`;

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
Vendor Class ID    :Fanvil X7C-V2
Enable PPPoE       :0
PPPoE User         :user123
PPPoE Password     :
ARP Cache Life     :2
MTU                :1500
DHCP Hostname      :X7C-V2
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
DHCP6 Hostname      :
--Lan Config--     :
LAN IP             :192.168.10.1
LAN Subnet Mask    :255.255.255.0
Enable DHCP Service:0
Enable NAT         :0
Enable Port Mirror :0
Enable Bridge Mode :1
--WIFI Config--    :
WIFI Enable        :0
WIFI Log Enable    :0
WAN TYPE           :0
WAN IP             :192.168.1.179
WAN Subnet Mask    :255.255.255.0
WAN Gateway        :192.168.1.1
Domain Name        :
Primary DNS        :8.8.8.8
Secondary DNS      :202.96.134.133
Enable DHCP        :1
DHCP Auto DNS      :1
DHCP Option 100-101:1
Use Vendor Class ID:0
Vendor Class ID    :Fanvil X7C-V2
DHCP Hostname      :X7C-V2
Enable PPPoE       :0
PPPoE User         :user123
PPPoE Password     :
WAN6 IP             :
WAN6 IP PREFIX      :
WAN6 Gateway        :
Domain6 Name        :
Primary DNS6        :
Secondary DNS6      :
Enable DHCP6        :1
DHCP6 Auto DNS      :1
Use Vendor6 Class ID:0
Vendor6 Class ID    :
DHCP6 Hostname      :
--Net Global--     :
Net Priority       :01

<MM CONFIG MODULE>
G723 Bit Rate      :1
ILBC Payload Type  :97
ILBC Payload Len   :20
AMR Payload Type   :108
AMRWB Payload Type :109
G726-16 Payload Type:103
G726-24 Payload Type:104
G726-32 Payload Type:102
G726-40 Payload Type:105
Dtmf Payload Type  :101
Opus Payload Type  :107
Opus Sample  Rate  :0
VAD                :0
H264 Payload Type  :117
H264 Packet Mode   :0
H264 Profile       :0
Resv Audio Band    :0
H265 Payload Type  :98
Mpa-robust Payload Type:121
PS Payload Type    :96
RTP Initial Port   :10000
RTP Port Quantity  :1000
RTP Keep Alive     :1
RTP Relay          :0
RTCP CNAME User    :
RTCP CNAME Host    :
Select Your Tone   :17
Sidetone GAIN      :1
Play Egress DTMF   :0
Audio Profile      :
Dial Tone          :425/200,0/300,425/700,0/800
Ringback Tone      :425/1000,0/4000
Busy Tone          :425/500,0/500
Congestion Tone    :425/250,0/250
Call waiting Tone  :425/100,0/100,425/100,0/9700,425/100,0/100,425/100,0/30000
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
Audio Codec Sets   :G722,PCMA,G729,opus,iLBC
Video Codec Sets   :H264
Video Frame Rate   :25
Video Bit Rate     :2000000
Video Resolution   :6
Video Negotiate Dir:2
Native Camera Type :0
USB Camera Index   :0
Local IP Cam Index :0

<SIP CONFIG MODULE>
SIP  Port          :5060
STUN Server        :
STUN Port          :3478
STUN Refresh Time  :50
SIP Wait Stun Time :800
Extern NAT Addrs   :
Reg Fail Interval  :32
Strict BranchPrefix:0
Video Mute Attr    :0
Enable Group Backup:0
Enable RFC4475     :1
Strict UA Match    :1
CSTA Enable        :0
Notify Reboot      :1
SMS direct Enabled :0
SMS Save Enabled   :1
SMS Ring Enabled   :1`;

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
SIP2 Backup Mode        :0
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
SIP2 Enable OSRTP       :0
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
SIP2 UDPUpdate Try Times:3
SIP2 Server Type        :0
SIP2 User Agent         :
SIP2 PRACK              :0
SIP2 Keep AUTH          :0
SIP2 Session Timer      :0
SIP2 S Timer Expires    :1800
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
SIP2 VoiceCodecMap      :PCMU,PCMA,G729,iLBC,opus,G722
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
SIP2 Enable ChgPort     :0
SIP2 VQ Name            :
SIP2 VQ Server          :
SIP2 VQ Server Port     :5060
SIP2 VQ HTTP Server     :
SIP2 Flash Mode         :0
SIP2 Content Type       :
SIP2 Content Body       :
SIP2 Unregister On Boot :1
SIP2 Enable MAC Header  :1
SIP2 Enable Register MAC:1
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
SIP2 Call-ID Format     :$id@$ip
SIP2 GB28181 Mode       :0
SIP2 Proxy Require      :
SIP2 Block RTP When Alerting:0
SIP2 Group Callpark Number:
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
SIP3 Backup Mode        :0
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
SIP3 Enable OSRTP       :0
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
SIP3 UDPUpdate Try Times:3
SIP3 Server Type        :0
SIP3 User Agent         :
SIP3 PRACK              :0
SIP3 Keep AUTH          :0
SIP3 Session Timer      :0
SIP3 S Timer Expires    :1800
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
SIP3 VoiceCodecMap      :PCMU,PCMA,G729,iLBC,opus,G722
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
SIP3 Enable ChgPort     :0
SIP3 VQ Name            :
SIP3 VQ Server          :
SIP3 VQ Server Port     :5060
SIP3 VQ HTTP Server     :
SIP3 Flash Mode         :0
SIP3 Content Type       :
SIP3 Content Body       :
SIP3 Unregister On Boot :1
SIP3 Enable MAC Header  :1
SIP3 Enable Register MAC:1
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
SIP3 Call-ID Format     :$id@$ip
SIP3 GB28181 Mode       :0
SIP3 Proxy Require      :
SIP3 Block RTP When Alerting:0
SIP3 Group Callpark Number:
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
SIP4 Backup Mode        :0
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
SIP4 Enable OSRTP       :0
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
SIP4 UDPUpdate Try Times:3
SIP4 Server Type        :0
SIP4 User Agent         :
SIP4 PRACK              :0
SIP4 Keep AUTH          :0
SIP4 Session Timer      :0
SIP4 S Timer Expires    :1800
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
SIP4 VoiceCodecMap      :PCMU,PCMA,G729,iLBC,opus,G722
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
SIP4 Enable ChgPort     :0
SIP4 VQ Name            :
SIP4 VQ Server          :
SIP4 VQ Server Port     :5060
SIP4 VQ HTTP Server     :
SIP4 Flash Mode         :0
SIP4 Content Type       :
SIP4 Content Body       :
SIP4 Unregister On Boot :1
SIP4 Enable MAC Header  :1
SIP4 Enable Register MAC:1
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
SIP4 Call-ID Format     :$id@$ip
SIP4 GB28181 Mode       :0
SIP4 Proxy Require      :
SIP4 Block RTP When Alerting:0
SIP4 Group Callpark Number:
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
SIP5 Backup Mode        :0
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
SIP5 Enable OSRTP       :0
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
SIP5 UDPUpdate Try Times:3
SIP5 Server Type        :0
SIP5 User Agent         :
SIP5 PRACK              :0
SIP5 Keep AUTH          :0
SIP5 Session Timer      :0
SIP5 S Timer Expires    :1800
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
SIP5 VoiceCodecMap      :PCMU,PCMA,G729,iLBC,opus,G722
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
SIP5 Enable ChgPort     :0
SIP5 VQ Name            :
SIP5 VQ Server          :
SIP5 VQ Server Port     :5060
SIP5 VQ HTTP Server     :
SIP5 Flash Mode         :0
SIP5 Content Type       :
SIP5 Content Body       :
SIP5 Unregister On Boot :1
SIP5 Enable MAC Header  :1
SIP5 Enable Register MAC:1
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
SIP5 Call-ID Format     :$id@$ip
SIP5 GB28181 Mode       :0
SIP5 Proxy Require      :
SIP5 Block RTP When Alerting:0
SIP5 Group Callpark Number:
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
SIP6 Backup Mode        :0
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
SIP6 Enable OSRTP       :0
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
SIP6 UDPUpdate Try Times:3
SIP6 Server Type        :0
SIP6 User Agent         :
SIP6 PRACK              :0
SIP6 Keep AUTH          :0
SIP6 Session Timer      :0
SIP6 S Timer Expires    :1800
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
SIP6 VoiceCodecMap      :PCMU,PCMA,G729,iLBC,opus,G722
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
SIP6 Enable ChgPort     :0
SIP6 VQ Name            :
SIP6 VQ Server          :
SIP6 VQ Server Port     :5060
SIP6 VQ HTTP Server     :
SIP6 Flash Mode         :0
SIP6 Content Type       :
SIP6 Content Body       :
SIP6 Unregister On Boot :1
SIP6 Enable MAC Header  :1
SIP6 Enable Register MAC:1
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
SIP6 Call-ID Format     :$id@$ip
SIP6 GB28181 Mode       :0
SIP6 Proxy Require      :
SIP6 Block RTP When Alerting:0
SIP6 Group Callpark Number:
SIP7 Phone Number       :
SIP7 Display Name       :
SIP7 Sip Name           :
SIP7 Register Addr      :
SIP7 Register Port      :5060
SIP7 Register User      :
SIP7 Register Pswd      :
SIP7 Register TTL       :3600
SIP7 Need Reg On        :0
SIP7 Backup Addr        :
SIP7 Backup Port        :5060
SIP7 Backup Transport   :0
SIP7 Backup TTL         :3600
SIP7 Backup Need Reg On :0
SIP7 Enable Reg         :0
SIP7 Backup Mode        :0
SIP7 Proxy Addr         :
SIP7 Proxy Port         :5060
SIP7 Proxy User         :
SIP7 Proxy Pswd         :
SIP7 Proxy Need Reg On  :0
SIP7 BakProxy Addr      :
SIP7 BakProxy Port      :5060
SIP7 BakProxy Need Reg On:0
SIP7 Enable Failback    :1
SIP7 Failback Interval  :1800
SIP7 Signal Failback    :0
SIP7 Signal Retry Counts:3
SIP7 SigCrypto Key      :
SIP7 Enable OSRTP       :0
SIP7 Media Crypto       :0
SIP7 MedCrypto Key      :
SIP7 SRTP Auth-Tag      :0
SIP7 Enable RFC5939     :0
SIP7 Local Domain       :
SIP7 Always FWD         :0
SIP7 Busy FWD           :0
SIP7 No Answer FWD      :0
SIP7 Always FWD Num     :
SIP7 Busy FWD Num       :
SIP7 NoAnswer FWD Num   :
SIP7 FWD Timer          :5
SIP7 Hotline Num        :
SIP7 Enable Hotline     :0
SIP7 WarmLine Time      :0
SIP7 Pickup Num         :
SIP7 Join Num           :
SIP7 Intercom Num       :
SIP7 Ring Type          :default
SIP7 NAT UDPUpdate      :2
SIP7 UDPUpdate TTL      :30
SIP7 UDPUpdate Try Times:3
SIP7 Server Type        :0
SIP7 User Agent         :
SIP7 PRACK              :0
SIP7 Keep AUTH          :0
SIP7 Session Timer      :0
SIP7 S Timer Expires    :1800
SIP7 Enable GRUU        :0
SIP7 DTMF Mode          :3
SIP7 DTMF Info Mode     :0
SIP7 NAT Type           :0
SIP7 Enable Rport       :1
SIP7 Subscribe          :0
SIP7 Sub Expire         :3600
SIP7 Single Codec       :0
SIP7 CLIR               :0
SIP7 Strict Proxy       :1
SIP7 Direct Contact     :0
SIP7 History Info       :0
SIP7 DNS SRV            :0
SIP7 DNS Mode           :0
SIP7 XFER Expire        :0
SIP7 Ban Anonymous      :0
SIP7 Dial Off Line      :0
SIP7 Quota Name         :0
SIP7 Presence Mode      :0
SIP7 RFC Ver            :1
SIP7 Phone Port         :0
SIP7 Signal Port        :5060
SIP7 Transport          :0
SIP7 Use SRV Mixer      :0
SIP7 SRV Mixer Uri      :
SIP7 Long Contact       :0
SIP7 Auto TCP           :0
SIP7 Uri Escaped        :1
SIP7 Click to Talk      :0
SIP7 MWI Num            :
SIP7 CallPark Num       :
SIP7 Retrieve Num       :
SIP7 Retrieve Type      :0
SIP7 MSRPHelp Num       :
SIP7 User Is Phone      :0
SIP7 Auto Answer        :0
SIP7 NoAnswerTime       :5
SIP7 MissedCallLog      :1
SIP7 SvcCode Mode       :0
SIP7 DNDOn SvcCode      :
SIP7 DNDOff SvcCode     :
SIP7 CFUOn SvcCode      :
SIP7 CFUOff SvcCode     :
SIP7 CFBOn SvcCode      :
SIP7 CFBOff SvcCode     :
SIP7 CFNOn SvcCode      :
SIP7 CFNOff SvcCode     :
SIP7 ANCOn SvcCode      :
SIP7 ANCOff SvcCode     :
SIP7 Send ANOn Code     :
SIP7 Send ANOffCode     :
SIP7 CW On Code         :
SIP7 CW Off Code        :
SIP7 VoiceCodecMap      :PCMU,PCMA,G729,iLBC,opus,G722
SIP7 VideoCodecMap      :
SIP7 BLFList Uri        :
SIP7 BLF Server         :
SIP7 Respond 182        :0
SIP7 Enable BLFList     :0
SIP7 Caller Id Type     :4
SIP7 Keep Higher Caller ID:0
SIP7 Syn Clock Time     :0
SIP7 Use VPN            :1
SIP7 Enable DND         :0
SIP7 Inactive Hold      :0
SIP7 Req With Port      :1
SIP7 Update Reg Expire  :1
SIP7 Enable SCA         :0
SIP7 Sub CallPark       :0
SIP7 Sub CC Status      :0
SIP7 Feature Sync       :0
SIP7 Enable XferBack    :0
SIP7 XferBack Time      :35
SIP7 Use Tel Call       :0
SIP7 Enable Preview     :0
SIP7 Preview Mode       :1
SIP7 TLS Version        :2
SIP7 CSTA Number        :
SIP7 Enable ChgPort     :0
SIP7 VQ Name            :
SIP7 VQ Server          :
SIP7 VQ Server Port     :5060
SIP7 VQ HTTP Server     :
SIP7 Flash Mode         :0
SIP7 Content Type       :
SIP7 Content Body       :
SIP7 Unregister On Boot :1
SIP7 Enable MAC Header  :1
SIP7 Enable Register MAC:1
SIP7 Record Start       :Record:on
SIP7 Record Stop        :Record:off
SIP7 BLF Dialog Match   :1
SIP7 Ptime              :0
SIP7 Enable Deal 180    :1
SIP7 Keep Single Contact:0
SIP7 Session Timer T1   :500
SIP7 Session Timer T2   :4000
SIP7 Session Timer T4   :5000
SIP7 Unavailable Mode   :0
SIP7 TCP Use Retry Timer:0
SIP7 Call-ID Format     :$id@$ip
SIP7 GB28181 Mode       :0
SIP7 Proxy Require      :
SIP7 Block RTP When Alerting:0
SIP7 Group Callpark Number:
SIP8 Phone Number       :
SIP8 Display Name       :
SIP8 Sip Name           :
SIP8 Register Addr      :
SIP8 Register Port      :5060
SIP8 Register User      :
SIP8 Register Pswd      :
SIP8 Register TTL       :3600
SIP8 Need Reg On        :0
SIP8 Backup Addr        :
SIP8 Backup Port        :5060
SIP8 Backup Transport   :0
SIP8 Backup TTL         :3600
SIP8 Backup Need Reg On :0
SIP8 Enable Reg         :0
SIP8 Backup Mode        :0
SIP8 Proxy Addr         :
SIP8 Proxy Port         :5060
SIP8 Proxy User         :
SIP8 Proxy Pswd         :
SIP8 Proxy Need Reg On  :0
SIP8 BakProxy Addr      :
SIP8 BakProxy Port      :5060
SIP8 BakProxy Need Reg On:0
SIP8 Enable Failback    :1
SIP8 Failback Interval  :1800
SIP8 Signal Failback    :0
SIP8 Signal Retry Counts:3
SIP8 SigCrypto Key      :
SIP8 Enable OSRTP       :0
SIP8 Media Crypto       :0
SIP8 MedCrypto Key      :
SIP8 SRTP Auth-Tag      :0
SIP8 Enable RFC5939     :0
SIP8 Local Domain       :
SIP8 Always FWD         :0
SIP8 Busy FWD           :0
SIP8 No Answer FWD      :0
SIP8 Always FWD Num     :
SIP8 Busy FWD Num       :
SIP8 NoAnswer FWD Num   :
SIP8 FWD Timer          :5
SIP8 Hotline Num        :
SIP8 Enable Hotline     :0
SIP8 WarmLine Time      :0
SIP8 Pickup Num         :
SIP8 Join Num           :
SIP8 Intercom Num       :
SIP8 Ring Type          :default
SIP8 NAT UDPUpdate      :2
SIP8 UDPUpdate TTL      :30
SIP8 UDPUpdate Try Times:3
SIP8 Server Type        :0
SIP8 User Agent         :
SIP8 PRACK              :0
SIP8 Keep AUTH          :0
SIP8 Session Timer      :0
SIP8 S Timer Expires    :1800
SIP8 Enable GRUU        :0
SIP8 DTMF Mode          :3
SIP8 DTMF Info Mode     :0
SIP8 NAT Type           :0
SIP8 Enable Rport       :1
SIP8 Subscribe          :0
SIP8 Sub Expire         :3600
SIP8 Single Codec       :0
SIP8 CLIR               :0
SIP8 Strict Proxy       :1
SIP8 Direct Contact     :0
SIP8 History Info       :0
SIP8 DNS SRV            :0
SIP8 DNS Mode           :0
SIP8 XFER Expire        :0
SIP8 Ban Anonymous      :0
SIP8 Dial Off Line      :0
SIP8 Quota Name         :0
SIP8 Presence Mode      :0
SIP8 RFC Ver            :1
SIP8 Phone Port         :0
SIP8 Signal Port        :5060
SIP8 Transport          :0
SIP8 Use SRV Mixer      :0
SIP8 SRV Mixer Uri      :
SIP8 Long Contact       :0
SIP8 Auto TCP           :0
SIP8 Uri Escaped        :1
SIP8 Click to Talk      :0
SIP8 MWI Num            :
SIP8 CallPark Num       :
SIP8 Retrieve Num       :
SIP8 Retrieve Type      :0
SIP8 MSRPHelp Num       :
SIP8 User Is Phone      :0
SIP8 Auto Answer        :0
SIP8 NoAnswerTime       :5
SIP8 MissedCallLog      :1
SIP8 SvcCode Mode       :0
SIP8 DNDOn SvcCode      :
SIP8 DNDOff SvcCode     :
SIP8 CFUOn SvcCode      :
SIP8 CFUOff SvcCode     :
SIP8 CFBOn SvcCode      :
SIP8 CFBOff SvcCode     :
SIP8 CFNOn SvcCode      :
SIP8 CFNOff SvcCode     :
SIP8 ANCOn SvcCode      :
SIP8 ANCOff SvcCode     :
SIP8 Send ANOn Code     :
SIP8 Send ANOffCode     :
SIP8 CW On Code         :
SIP8 CW Off Code        :
SIP8 VoiceCodecMap      :PCMU,PCMA,G729,iLBC,opus,G722
SIP8 VideoCodecMap      :
SIP8 BLFList Uri        :
SIP8 BLF Server         :
SIP8 Respond 182        :0
SIP8 Enable BLFList     :0
SIP8 Caller Id Type     :4
SIP8 Keep Higher Caller ID:0
SIP8 Syn Clock Time     :0
SIP8 Use VPN            :1
SIP8 Enable DND         :0
SIP8 Inactive Hold      :0
SIP8 Req With Port      :1
SIP8 Update Reg Expire  :1
SIP8 Enable SCA         :0
SIP8 Sub CallPark       :0
SIP8 Sub CC Status      :0
SIP8 Feature Sync       :0
SIP8 Enable XferBack    :0
SIP8 XferBack Time      :35
SIP8 Use Tel Call       :0
SIP8 Enable Preview     :0
SIP8 Preview Mode       :1
SIP8 TLS Version        :2
SIP8 CSTA Number        :
SIP8 Enable ChgPort     :0
SIP8 VQ Name            :
SIP8 VQ Server          :
SIP8 VQ Server Port     :5060
SIP8 VQ HTTP Server     :
SIP8 Flash Mode         :0
SIP8 Content Type       :
SIP8 Content Body       :
SIP8 Unregister On Boot :1
SIP8 Enable MAC Header  :1
SIP8 Enable Register MAC:1
SIP8 Record Start       :Record:on
SIP8 Record Stop        :Record:off
SIP8 BLF Dialog Match   :1
SIP8 Ptime              :0
SIP8 Enable Deal 180    :1
SIP8 Keep Single Contact:0
SIP8 Session Timer T1   :500
SIP8 Session Timer T2   :4000
SIP8 Session Timer T4   :5000
SIP8 Unavailable Mode   :0
SIP8 TCP Use Retry Timer:0
SIP8 Call-ID Format     :$id@$ip
SIP8 GB28181 Mode       :0
SIP8 Proxy Require      :
SIP8 Block RTP When Alerting:0
SIP8 Group Callpark Number:
SIP9 Phone Number       :
SIP9 Display Name       :
SIP9 Sip Name           :
SIP9 Register Addr      :
SIP9 Register Port      :5060
SIP9 Register User      :
SIP9 Register Pswd      :
SIP9 Register TTL       :3600
SIP9 Need Reg On        :0
SIP9 Backup Addr        :
SIP9 Backup Port        :5060
SIP9 Backup Transport   :0
SIP9 Backup TTL         :3600
SIP9 Backup Need Reg On :0
SIP9 Enable Reg         :0
SIP9 Backup Mode        :0
SIP9 Proxy Addr         :
SIP9 Proxy Port         :5060
SIP9 Proxy User         :
SIP9 Proxy Pswd         :
SIP9 Proxy Need Reg On  :0
SIP9 BakProxy Addr      :
SIP9 BakProxy Port      :5060
SIP9 BakProxy Need Reg On:0
SIP9 Enable Failback    :1
SIP9 Failback Interval  :1800
SIP9 Signal Failback    :0
SIP9 Signal Retry Counts:3
SIP9 SigCrypto Key      :
SIP9 Enable OSRTP       :0
SIP9 Media Crypto       :0
SIP9 MedCrypto Key      :
SIP9 SRTP Auth-Tag      :0
SIP9 Enable RFC5939     :0
SIP9 Local Domain       :
SIP9 Always FWD         :0
SIP9 Busy FWD           :0
SIP9 No Answer FWD      :0
SIP9 Always FWD Num     :
SIP9 Busy FWD Num       :
SIP9 NoAnswer FWD Num   :
SIP9 FWD Timer          :5
SIP9 Hotline Num        :
SIP9 Enable Hotline     :0
SIP9 WarmLine Time      :0
SIP9 Pickup Num         :
SIP9 Join Num           :
SIP9 Intercom Num       :
SIP9 Ring Type          :default
SIP9 NAT UDPUpdate      :2
SIP9 UDPUpdate TTL      :30
SIP9 UDPUpdate Try Times:3
SIP9 Server Type        :0
SIP9 User Agent         :
SIP9 PRACK              :0
SIP9 Keep AUTH          :0
SIP9 Session Timer      :0
SIP9 S Timer Expires    :1800
SIP9 Enable GRUU        :0
SIP9 DTMF Mode          :3
SIP9 DTMF Info Mode     :0
SIP9 NAT Type           :0
SIP9 Enable Rport       :1
SIP9 Subscribe          :0
SIP9 Sub Expire         :3600
SIP9 Single Codec       :0
SIP9 CLIR               :0
SIP9 Strict Proxy       :1
SIP9 Direct Contact     :0
SIP9 History Info       :0
SIP9 DNS SRV            :0
SIP9 DNS Mode           :0
SIP9 XFER Expire        :0
SIP9 Ban Anonymous      :0
SIP9 Dial Off Line      :0
SIP9 Quota Name         :0
SIP9 Presence Mode      :0
SIP9 RFC Ver            :1
SIP9 Phone Port         :0
SIP9 Signal Port        :5060
SIP9 Transport          :0
SIP9 Use SRV Mixer      :0
SIP9 SRV Mixer Uri      :
SIP9 Long Contact       :0
SIP9 Auto TCP           :0
SIP9 Uri Escaped        :1
SIP9 Click to Talk      :0
SIP9 MWI Num            :
SIP9 CallPark Num       :
SIP9 Retrieve Num       :
SIP9 Retrieve Type      :0
SIP9 MSRPHelp Num       :
SIP9 User Is Phone      :0
SIP9 Auto Answer        :0
SIP9 NoAnswerTime       :5
SIP9 MissedCallLog      :1
SIP9 SvcCode Mode       :0
SIP9 DNDOn SvcCode      :
SIP9 DNDOff SvcCode     :
SIP9 CFUOn SvcCode      :
SIP9 CFUOff SvcCode     :
SIP9 CFBOn SvcCode      :
SIP9 CFBOff SvcCode     :
SIP9 CFNOn SvcCode      :
SIP9 CFNOff SvcCode     :
SIP9 ANCOn SvcCode      :
SIP9 ANCOff SvcCode     :
SIP9 Send ANOn Code     :
SIP9 Send ANOffCode     :
SIP9 CW On Code         :
SIP9 CW Off Code        :
SIP9 VoiceCodecMap      :PCMU,PCMA,G729,iLBC,opus,G722
SIP9 VideoCodecMap      :
SIP9 BLFList Uri        :
SIP9 BLF Server         :
SIP9 Respond 182        :0
SIP9 Enable BLFList     :0
SIP9 Caller Id Type     :4
SIP9 Keep Higher Caller ID:0
SIP9 Syn Clock Time     :0
SIP9 Use VPN            :1
SIP9 Enable DND         :0
SIP9 Inactive Hold      :0
SIP9 Req With Port      :1
SIP9 Update Reg Expire  :1
SIP9 Enable SCA         :0
SIP9 Sub CallPark       :0
SIP9 Sub CC Status      :0
SIP9 Feature Sync       :0
SIP9 Enable XferBack    :0
SIP9 XferBack Time      :35
SIP9 Use Tel Call       :0
SIP9 Enable Preview     :0
SIP9 Preview Mode       :1
SIP9 TLS Version        :2
SIP9 CSTA Number        :
SIP9 Enable ChgPort     :0
SIP9 VQ Name            :
SIP9 VQ Server          :
SIP9 VQ Server Port     :5060
SIP9 VQ HTTP Server     :
SIP9 Flash Mode         :0
SIP9 Content Type       :
SIP9 Content Body       :
SIP9 Unregister On Boot :1
SIP9 Enable MAC Header  :1
SIP9 Enable Register MAC:1
SIP9 Record Start       :Record:on
SIP9 Record Stop        :Record:off
SIP9 BLF Dialog Match   :1
SIP9 Ptime              :0
SIP9 Enable Deal 180    :1
SIP9 Keep Single Contact:0
SIP9 Session Timer T1   :500
SIP9 Session Timer T2   :4000
SIP9 Session Timer T4   :5000
SIP9 Unavailable Mode   :0
SIP9 TCP Use Retry Timer:0
SIP9 Call-ID Format     :$id@$ip
SIP9 GB28181 Mode       :0
SIP9 Proxy Require      :
SIP9 Block RTP When Alerting:0
SIP9 Group Callpark Number:
SIP10 Phone Number       :
SIP10 Display Name       :
SIP10 Sip Name           :
SIP10 Register Addr      :
SIP10 Register Port      :5060
SIP10 Register User      :
SIP10 Register Pswd      :
SIP10 Register TTL       :3600
SIP10 Need Reg On        :0
SIP10 Backup Addr        :
SIP10 Backup Port        :5060
SIP10 Backup Transport   :0
SIP10 Backup TTL         :3600
SIP10 Backup Need Reg On :0
SIP10 Enable Reg         :0
SIP10 Backup Mode        :0
SIP10 Proxy Addr         :
SIP10 Proxy Port         :5060
SIP10 Proxy User         :
SIP10 Proxy Pswd         :
SIP10 Proxy Need Reg On  :0
SIP10 BakProxy Addr      :
SIP10 BakProxy Port      :5060
SIP10 BakProxy Need Reg On:0
SIP10 Enable Failback    :1
SIP10 Failback Interval  :1800
SIP10 Signal Failback    :0
SIP10 Signal Retry Counts:3
SIP10 SigCrypto Key      :
SIP10 Enable OSRTP       :0
SIP10 Media Crypto       :0
SIP10 MedCrypto Key      :
SIP10 SRTP Auth-Tag      :0
SIP10 Enable RFC5939     :0
SIP10 Local Domain       :
SIP10 Always FWD         :0
SIP10 Busy FWD           :0
SIP10 No Answer FWD      :0
SIP10 Always FWD Num     :
SIP10 Busy FWD Num       :
SIP10 NoAnswer FWD Num   :
SIP10 FWD Timer          :5
SIP10 Hotline Num        :
SIP10 Enable Hotline     :0
SIP10 WarmLine Time      :0
SIP10 Pickup Num         :
SIP10 Join Num           :
SIP10 Intercom Num       :
SIP10 Ring Type          :default
SIP10 NAT UDPUpdate      :2
SIP10 UDPUpdate TTL      :30
SIP10 UDPUpdate Try Times:3
SIP10 Server Type        :0
SIP10 User Agent         :
SIP10 PRACK              :0
SIP10 Keep AUTH          :0
SIP10 Session Timer      :0
SIP10 S Timer Expires    :1800
SIP10 Enable GRUU        :0
SIP10 DTMF Mode          :3
SIP10 DTMF Info Mode     :0
SIP10 NAT Type           :0
SIP10 Enable Rport       :1
SIP10 Subscribe          :0
SIP10 Sub Expire         :3600
SIP10 Single Codec       :0
SIP10 CLIR               :0
SIP10 Strict Proxy       :1
SIP10 Direct Contact     :0
SIP10 History Info       :0
SIP10 DNS SRV            :0
SIP10 DNS Mode           :0
SIP10 XFER Expire        :0
SIP10 Ban Anonymous      :0
SIP10 Dial Off Line      :0
SIP10 Quota Name         :0
SIP10 Presence Mode      :0
SIP10 RFC Ver            :1
SIP10 Phone Port         :0
SIP10 Signal Port        :5060
SIP10 Transport          :0
SIP10 Use SRV Mixer      :0
SIP10 SRV Mixer Uri      :
SIP10 Long Contact       :0
SIP10 Auto TCP           :0
SIP10 Uri Escaped        :1
SIP10 Click to Talk      :0
SIP10 MWI Num            :
SIP10 CallPark Num       :
SIP10 Retrieve Num       :
SIP10 Retrieve Type      :0
SIP10 MSRPHelp Num       :
SIP10 User Is Phone      :0
SIP10 Auto Answer        :0
SIP10 NoAnswerTime       :5
SIP10 MissedCallLog      :1
SIP10 SvcCode Mode       :0
SIP10 DNDOn SvcCode      :
SIP10 DNDOff SvcCode     :
SIP10 CFUOn SvcCode      :
SIP10 CFUOff SvcCode     :
SIP10 CFBOn SvcCode      :
SIP10 CFBOff SvcCode     :
SIP10 CFNOn SvcCode      :
SIP10 CFNOff SvcCode     :
SIP10 ANCOn SvcCode      :
SIP10 ANCOff SvcCode     :
SIP10 Send ANOn Code     :
SIP10 Send ANOffCode     :
SIP10 CW On Code         :
SIP10 CW Off Code        :
SIP10 VoiceCodecMap      :PCMU,PCMA,G729,iLBC,opus,G722
SIP10 VideoCodecMap      :
SIP10 BLFList Uri        :
SIP10 BLF Server         :
SIP10 Respond 182        :0
SIP10 Enable BLFList     :0
SIP10 Caller Id Type     :4
SIP10 Keep Higher Caller ID:0
SIP10 Syn Clock Time     :0
SIP10 Use VPN            :1
SIP10 Enable DND         :0
SIP10 Inactive Hold      :0
SIP10 Req With Port      :1
SIP10 Update Reg Expire  :1
SIP10 Enable SCA         :0
SIP10 Sub CallPark       :0
SIP10 Sub CC Status      :0
SIP10 Feature Sync       :0
SIP10 Enable XferBack    :0
SIP10 XferBack Time      :35
SIP10 Use Tel Call       :0
SIP10 Enable Preview     :0
SIP10 Preview Mode       :1
SIP10 TLS Version        :2
SIP10 CSTA Number        :
SIP10 Enable ChgPort     :0
SIP10 VQ Name            :
SIP10 VQ Server          :
SIP10 VQ Server Port     :5060
SIP10 VQ HTTP Server     :
SIP10 Flash Mode         :0
SIP10 Content Type       :
SIP10 Content Body       :
SIP10 Unregister On Boot :1
SIP10 Enable MAC Header  :1
SIP10 Enable Register MAC:1
SIP10 Record Start       :Record:on
SIP10 Record Stop        :Record:off
SIP10 BLF Dialog Match   :1
SIP10 Ptime              :0
SIP10 Enable Deal 180    :1
SIP10 Keep Single Contact:0
SIP10 Session Timer T1   :500
SIP10 Session Timer T2   :4000
SIP10 Session Timer T4   :5000
SIP10 Unavailable Mode   :0
SIP10 TCP Use Retry Timer:0
SIP10 Call-ID Format     :$id@$ip
SIP10 GB28181 Mode       :0
SIP10 Proxy Require      :
SIP10 Block RTP When Alerting:0
SIP10 Group Callpark Number:
SIP11 Phone Number       :
SIP11 Display Name       :
SIP11 Sip Name           :
SIP11 Register Addr      :
SIP11 Register Port      :5060
SIP11 Register User      :
SIP11 Register Pswd      :
SIP11 Register TTL       :3600
SIP11 Need Reg On        :0
SIP11 Backup Addr        :
SIP11 Backup Port        :5060
SIP11 Backup Transport   :0
SIP11 Backup TTL         :3600
SIP11 Backup Need Reg On :0
SIP11 Enable Reg         :0
SIP11 Backup Mode        :0
SIP11 Proxy Addr         :
SIP11 Proxy Port         :5060
SIP11 Proxy User         :
SIP11 Proxy Pswd         :
SIP11 Proxy Need Reg On  :0
SIP11 BakProxy Addr      :
SIP11 BakProxy Port      :5060
SIP11 BakProxy Need Reg On:0
SIP11 Enable Failback    :1
SIP11 Failback Interval  :1800
SIP11 Signal Failback    :0
SIP11 Signal Retry Counts:3
SIP11 SigCrypto Key      :
SIP11 Enable OSRTP       :0
SIP11 Media Crypto       :0
SIP11 MedCrypto Key      :
SIP11 SRTP Auth-Tag      :0
SIP11 Enable RFC5939     :0
SIP11 Local Domain       :
SIP11 Always FWD         :0
SIP11 Busy FWD           :0
SIP11 No Answer FWD      :0
SIP11 Always FWD Num     :
SIP11 Busy FWD Num       :
SIP11 NoAnswer FWD Num   :
SIP11 FWD Timer          :5
SIP11 Hotline Num        :
SIP11 Enable Hotline     :0
SIP11 WarmLine Time      :0
SIP11 Pickup Num         :
SIP11 Join Num           :
SIP11 Intercom Num       :
SIP11 Ring Type          :default
SIP11 NAT UDPUpdate      :2
SIP11 UDPUpdate TTL      :30
SIP11 UDPUpdate Try Times:3
SIP11 Server Type        :0
SIP11 User Agent         :
SIP11 PRACK              :0
SIP11 Keep AUTH          :0
SIP11 Session Timer      :0
SIP11 S Timer Expires    :1800
SIP11 Enable GRUU        :0
SIP11 DTMF Mode          :3
SIP11 DTMF Info Mode     :0
SIP11 NAT Type           :0
SIP11 Enable Rport       :1
SIP11 Subscribe          :0
SIP11 Sub Expire         :3600
SIP11 Single Codec       :0
SIP11 CLIR               :0
SIP11 Strict Proxy       :1
SIP11 Direct Contact     :0
SIP11 History Info       :0
SIP11 DNS SRV            :0
SIP11 DNS Mode           :0
SIP11 XFER Expire        :0
SIP11 Ban Anonymous      :0
SIP11 Dial Off Line      :0
SIP11 Quota Name         :0
SIP11 Presence Mode      :0
SIP11 RFC Ver            :1
SIP11 Phone Port         :0
SIP11 Signal Port        :5060
SIP11 Transport          :0
SIP11 Use SRV Mixer      :0
SIP11 SRV Mixer Uri      :
SIP11 Long Contact       :0
SIP11 Auto TCP           :0
SIP11 Uri Escaped        :1
SIP11 Click to Talk      :0
SIP11 MWI Num            :
SIP11 CallPark Num       :
SIP11 Retrieve Num       :
SIP11 Retrieve Type      :0
SIP11 MSRPHelp Num       :
SIP11 User Is Phone      :0
SIP11 Auto Answer        :0
SIP11 NoAnswerTime       :5
SIP11 MissedCallLog      :1
SIP11 SvcCode Mode       :0
SIP11 DNDOn SvcCode      :
SIP11 DNDOff SvcCode     :
SIP11 CFUOn SvcCode      :
SIP11 CFUOff SvcCode     :
SIP11 CFBOn SvcCode      :
SIP11 CFBOff SvcCode     :
SIP11 CFNOn SvcCode      :
SIP11 CFNOff SvcCode     :
SIP11 ANCOn SvcCode      :
SIP11 ANCOff SvcCode     :
SIP11 Send ANOn Code     :
SIP11 Send ANOffCode     :
SIP11 CW On Code         :
SIP11 CW Off Code        :
SIP11 VoiceCodecMap      :PCMU,PCMA,G729,iLBC,opus,G722
SIP11 VideoCodecMap      :
SIP11 BLFList Uri        :
SIP11 BLF Server         :
SIP11 Respond 182        :0
SIP11 Enable BLFList     :0
SIP11 Caller Id Type     :4
SIP11 Keep Higher Caller ID:0
SIP11 Syn Clock Time     :0
SIP11 Use VPN            :1
SIP11 Enable DND         :0
SIP11 Inactive Hold      :0
SIP11 Req With Port      :1
SIP11 Update Reg Expire  :1
SIP11 Enable SCA         :0
SIP11 Sub CallPark       :0
SIP11 Sub CC Status      :0
SIP11 Feature Sync       :0
SIP11 Enable XferBack    :0
SIP11 XferBack Time      :35
SIP11 Use Tel Call       :0
SIP11 Enable Preview     :0
SIP11 Preview Mode       :1
SIP11 TLS Version        :2
SIP11 CSTA Number        :
SIP11 Enable ChgPort     :0
SIP11 VQ Name            :
SIP11 VQ Server          :
SIP11 VQ Server Port     :5060
SIP11 VQ HTTP Server     :
SIP11 Flash Mode         :0
SIP11 Content Type       :
SIP11 Content Body       :
SIP11 Unregister On Boot :1
SIP11 Enable MAC Header  :1
SIP11 Enable Register MAC:1
SIP11 Record Start       :Record:on
SIP11 Record Stop        :Record:off
SIP11 BLF Dialog Match   :1
SIP11 Ptime              :0
SIP11 Enable Deal 180    :1
SIP11 Keep Single Contact:0
SIP11 Session Timer T1   :500
SIP11 Session Timer T2   :4000
SIP11 Session Timer T4   :5000
SIP11 Unavailable Mode   :0
SIP11 TCP Use Retry Timer:0
SIP11 Call-ID Format     :$id@$ip
SIP11 GB28181 Mode       :0
SIP11 Proxy Require      :
SIP11 Block RTP When Alerting:0
SIP11 Group Callpark Number:
SIP12 Phone Number       :
SIP12 Display Name       :
SIP12 Sip Name           :
SIP12 Register Addr      :
SIP12 Register Port      :5060
SIP12 Register User      :
SIP12 Register Pswd      :
SIP12 Register TTL       :3600
SIP12 Need Reg On        :0
SIP12 Backup Addr        :
SIP12 Backup Port        :5060
SIP12 Backup Transport   :0
SIP12 Backup TTL         :3600
SIP12 Backup Need Reg On :0
SIP12 Enable Reg         :0
SIP12 Backup Mode        :0
SIP12 Proxy Addr         :
SIP12 Proxy Port         :5060
SIP12 Proxy User         :
SIP12 Proxy Pswd         :
SIP12 Proxy Need Reg On  :0
SIP12 BakProxy Addr      :
SIP12 BakProxy Port      :5060
SIP12 BakProxy Need Reg On:0
SIP12 Enable Failback    :1
SIP12 Failback Interval  :1800
SIP12 Signal Failback    :0
SIP12 Signal Retry Counts:3
SIP12 SigCrypto Key      :
SIP12 Enable OSRTP       :0
SIP12 Media Crypto       :0
SIP12 MedCrypto Key      :
SIP12 SRTP Auth-Tag      :0
SIP12 Enable RFC5939     :0
SIP12 Local Domain       :
SIP12 Always FWD         :0
SIP12 Busy FWD           :0
SIP12 No Answer FWD      :0
SIP12 Always FWD Num     :
SIP12 Busy FWD Num       :
SIP12 NoAnswer FWD Num   :
SIP12 FWD Timer          :5
SIP12 Hotline Num        :
SIP12 Enable Hotline     :0
SIP12 WarmLine Time      :0
SIP12 Pickup Num         :
SIP12 Join Num           :
SIP12 Intercom Num       :
SIP12 Ring Type          :default
SIP12 NAT UDPUpdate      :2
SIP12 UDPUpdate TTL      :30
SIP12 UDPUpdate Try Times:3
SIP12 Server Type        :0
SIP12 User Agent         :
SIP12 PRACK              :0
SIP12 Keep AUTH          :0
SIP12 Session Timer      :0
SIP12 S Timer Expires    :1800
SIP12 Enable GRUU        :0
SIP12 DTMF Mode          :3
SIP12 DTMF Info Mode     :0
SIP12 NAT Type           :0
SIP12 Enable Rport       :1
SIP12 Subscribe          :0
SIP12 Sub Expire         :3600
SIP12 Single Codec       :0
SIP12 CLIR               :0
SIP12 Strict Proxy       :1
SIP12 Direct Contact     :0
SIP12 History Info       :0
SIP12 DNS SRV            :0
SIP12 DNS Mode           :0
SIP12 XFER Expire        :0
SIP12 Ban Anonymous      :0
SIP12 Dial Off Line      :0
SIP12 Quota Name         :0
SIP12 Presence Mode      :0
SIP12 RFC Ver            :1
SIP12 Phone Port         :0
SIP12 Signal Port        :5060
SIP12 Transport          :0
SIP12 Use SRV Mixer      :0
SIP12 SRV Mixer Uri      :
SIP12 Long Contact       :0
SIP12 Auto TCP           :0
SIP12 Uri Escaped        :1
SIP12 Click to Talk      :0
SIP12 MWI Num            :
SIP12 CallPark Num       :
SIP12 Retrieve Num       :
SIP12 Retrieve Type      :0
SIP12 MSRPHelp Num       :
SIP12 User Is Phone      :0
SIP12 Auto Answer        :0
SIP12 NoAnswerTime       :5
SIP12 MissedCallLog      :1
SIP12 SvcCode Mode       :0
SIP12 DNDOn SvcCode      :
SIP12 DNDOff SvcCode     :
SIP12 CFUOn SvcCode      :
SIP12 CFUOff SvcCode     :
SIP12 CFBOn SvcCode      :
SIP12 CFBOff SvcCode     :
SIP12 CFNOn SvcCode      :
SIP12 CFNOff SvcCode     :
SIP12 ANCOn SvcCode      :
SIP12 ANCOff SvcCode     :
SIP12 Send ANOn Code     :
SIP12 Send ANOffCode     :
SIP12 CW On Code         :
SIP12 CW Off Code        :
SIP12 VoiceCodecMap      :PCMU,PCMA,G729,iLBC,opus,G722
SIP12 VideoCodecMap      :
SIP12 BLFList Uri        :
SIP12 BLF Server         :
SIP12 Respond 182        :0
SIP12 Enable BLFList     :0
SIP12 Caller Id Type     :4
SIP12 Keep Higher Caller ID:0
SIP12 Syn Clock Time     :0
SIP12 Use VPN            :1
SIP12 Enable DND         :0
SIP12 Inactive Hold      :0
SIP12 Req With Port      :1
SIP12 Update Reg Expire  :1
SIP12 Enable SCA         :0
SIP12 Sub CallPark       :0
SIP12 Sub CC Status      :0
SIP12 Feature Sync       :0
SIP12 Enable XferBack    :0
SIP12 XferBack Time      :35
SIP12 Use Tel Call       :0
SIP12 Enable Preview     :0
SIP12 Preview Mode       :1
SIP12 TLS Version        :2
SIP12 CSTA Number        :
SIP12 Enable ChgPort     :0
SIP12 VQ Name            :
SIP12 VQ Server          :
SIP12 VQ Server Port     :5060
SIP12 VQ HTTP Server     :
SIP12 Flash Mode         :0
SIP12 Content Type       :
SIP12 Content Body       :
SIP12 Unregister On Boot :1
SIP12 Enable MAC Header  :1
SIP12 Enable Register MAC:1
SIP12 Record Start       :Record:on
SIP12 Record Stop        :Record:off
SIP12 BLF Dialog Match   :1
SIP12 Ptime              :0
SIP12 Enable Deal 180    :1
SIP12 Keep Single Contact:0
SIP12 Session Timer T1   :500
SIP12 Session Timer T2   :4000
SIP12 Session Timer T4   :5000
SIP12 Unavailable Mode   :0
SIP12 TCP Use Retry Timer:0
SIP12 Call-ID Format     :$id@$ip
SIP12 GB28181 Mode       :0
SIP12 Proxy Require      :
SIP12 Block RTP When Alerting:0
SIP12 Group Callpark Number:
SIP13 Phone Number       :
SIP13 Display Name       :
SIP13 Sip Name           :
SIP13 Register Addr      :
SIP13 Register Port      :5060
SIP13 Register User      :
SIP13 Register Pswd      :
SIP13 Register TTL       :3600
SIP13 Need Reg On        :0
SIP13 Backup Addr        :
SIP13 Backup Port        :5060
SIP13 Backup Transport   :0
SIP13 Backup TTL         :3600
SIP13 Backup Need Reg On :0
SIP13 Enable Reg         :0
SIP13 Backup Mode        :0
SIP13 Proxy Addr         :
SIP13 Proxy Port         :5060
SIP13 Proxy User         :
SIP13 Proxy Pswd         :
SIP13 Proxy Need Reg On  :0
SIP13 BakProxy Addr      :
SIP13 BakProxy Port      :5060
SIP13 BakProxy Need Reg On:0
SIP13 Enable Failback    :1
SIP13 Failback Interval  :1800
SIP13 Signal Failback    :0
SIP13 Signal Retry Counts:3
SIP13 SigCrypto Key      :
SIP13 Enable OSRTP       :0
SIP13 Media Crypto       :0
SIP13 MedCrypto Key      :
SIP13 SRTP Auth-Tag      :0
SIP13 Enable RFC5939     :0
SIP13 Local Domain       :
SIP13 Always FWD         :0
SIP13 Busy FWD           :0
SIP13 No Answer FWD      :0
SIP13 Always FWD Num     :
SIP13 Busy FWD Num       :
SIP13 NoAnswer FWD Num   :
SIP13 FWD Timer          :5
SIP13 Hotline Num        :
SIP13 Enable Hotline     :0
SIP13 WarmLine Time      :0
SIP13 Pickup Num         :
SIP13 Join Num           :
SIP13 Intercom Num       :
SIP13 Ring Type          :default
SIP13 NAT UDPUpdate      :2
SIP13 UDPUpdate TTL      :30
SIP13 UDPUpdate Try Times:3
SIP13 Server Type        :0
SIP13 User Agent         :
SIP13 PRACK              :0
SIP13 Keep AUTH          :0
SIP13 Session Timer      :0
SIP13 S Timer Expires    :1800
SIP13 Enable GRUU        :0
SIP13 DTMF Mode          :3
SIP13 DTMF Info Mode     :0
SIP13 NAT Type           :0
SIP13 Enable Rport       :1
SIP13 Subscribe          :0
SIP13 Sub Expire         :3600
SIP13 Single Codec       :0
SIP13 CLIR               :0
SIP13 Strict Proxy       :1
SIP13 Direct Contact     :0
SIP13 History Info       :0
SIP13 DNS SRV            :0
SIP13 DNS Mode           :0
SIP13 XFER Expire        :0
SIP13 Ban Anonymous      :0
SIP13 Dial Off Line      :0
SIP13 Quota Name         :0
SIP13 Presence Mode      :0
SIP13 RFC Ver            :1
SIP13 Phone Port         :0
SIP13 Signal Port        :5060
SIP13 Transport          :0
SIP13 Use SRV Mixer      :0
SIP13 SRV Mixer Uri      :
SIP13 Long Contact       :0
SIP13 Auto TCP           :0
SIP13 Uri Escaped        :1
SIP13 Click to Talk      :0
SIP13 MWI Num            :
SIP13 CallPark Num       :
SIP13 Retrieve Num       :
SIP13 Retrieve Type      :0
SIP13 MSRPHelp Num       :
SIP13 User Is Phone      :0
SIP13 Auto Answer        :0
SIP13 NoAnswerTime       :5
SIP13 MissedCallLog      :1
SIP13 SvcCode Mode       :0
SIP13 DNDOn SvcCode      :
SIP13 DNDOff SvcCode     :
SIP13 CFUOn SvcCode      :
SIP13 CFUOff SvcCode     :
SIP13 CFBOn SvcCode      :
SIP13 CFBOff SvcCode     :
SIP13 CFNOn SvcCode      :
SIP13 CFNOff SvcCode     :
SIP13 ANCOn SvcCode      :
SIP13 ANCOff SvcCode     :
SIP13 Send ANOn Code     :
SIP13 Send ANOffCode     :
SIP13 CW On Code         :
SIP13 CW Off Code        :
SIP13 VoiceCodecMap      :PCMU,PCMA,G729,iLBC,opus,G722
SIP13 VideoCodecMap      :
SIP13 BLFList Uri        :
SIP13 BLF Server         :
SIP13 Respond 182        :0
SIP13 Enable BLFList     :0
SIP13 Caller Id Type     :4
SIP13 Keep Higher Caller ID:0
SIP13 Syn Clock Time     :0
SIP13 Use VPN            :1
SIP13 Enable DND         :0
SIP13 Inactive Hold      :0
SIP13 Req With Port      :1
SIP13 Update Reg Expire  :1
SIP13 Enable SCA         :0
SIP13 Sub CallPark       :0
SIP13 Sub CC Status      :0
SIP13 Feature Sync       :0
SIP13 Enable XferBack    :0
SIP13 XferBack Time      :35
SIP13 Use Tel Call       :0
SIP13 Enable Preview     :0
SIP13 Preview Mode       :1
SIP13 TLS Version        :2
SIP13 CSTA Number        :
SIP13 Enable ChgPort     :0
SIP13 VQ Name            :
SIP13 VQ Server          :
SIP13 VQ Server Port     :5060
SIP13 VQ HTTP Server     :
SIP13 Flash Mode         :0
SIP13 Content Type       :
SIP13 Content Body       :
SIP13 Unregister On Boot :1
SIP13 Enable MAC Header  :1
SIP13 Enable Register MAC:1
SIP13 Record Start       :Record:on
SIP13 Record Stop        :Record:off
SIP13 BLF Dialog Match   :1
SIP13 Ptime              :0
SIP13 Enable Deal 180    :1
SIP13 Keep Single Contact:0
SIP13 Session Timer T1   :500
SIP13 Session Timer T2   :4000
SIP13 Session Timer T4   :5000
SIP13 Unavailable Mode   :0
SIP13 TCP Use Retry Timer:0
SIP13 Call-ID Format     :$id@$ip
SIP13 GB28181 Mode       :0
SIP13 Proxy Require      :
SIP13 Block RTP When Alerting:0
SIP13 Group Callpark Number:
SIP14 Phone Number       :
SIP14 Display Name       :
SIP14 Sip Name           :
SIP14 Register Addr      :
SIP14 Register Port      :5060
SIP14 Register User      :
SIP14 Register Pswd      :
SIP14 Register TTL       :3600
SIP14 Need Reg On        :0
SIP14 Backup Addr        :
SIP14 Backup Port        :5060
SIP14 Backup Transport   :0
SIP14 Backup TTL         :3600
SIP14 Backup Need Reg On :0
SIP14 Enable Reg         :0
SIP14 Backup Mode        :0
SIP14 Proxy Addr         :
SIP14 Proxy Port         :5060
SIP14 Proxy User         :
SIP14 Proxy Pswd         :
SIP14 Proxy Need Reg On  :0
SIP14 BakProxy Addr      :
SIP14 BakProxy Port      :5060
SIP14 BakProxy Need Reg On:0
SIP14 Enable Failback    :1
SIP14 Failback Interval  :1800
SIP14 Signal Failback    :0
SIP14 Signal Retry Counts:3
SIP14 SigCrypto Key      :
SIP14 Enable OSRTP       :0
SIP14 Media Crypto       :0
SIP14 MedCrypto Key      :
SIP14 SRTP Auth-Tag      :0
SIP14 Enable RFC5939     :0
SIP14 Local Domain       :
SIP14 Always FWD         :0
SIP14 Busy FWD           :0
SIP14 No Answer FWD      :0
SIP14 Always FWD Num     :
SIP14 Busy FWD Num       :
SIP14 NoAnswer FWD Num   :
SIP14 FWD Timer          :5
SIP14 Hotline Num        :
SIP14 Enable Hotline     :0
SIP14 WarmLine Time      :0
SIP14 Pickup Num         :
SIP14 Join Num           :
SIP14 Intercom Num       :
SIP14 Ring Type          :default
SIP14 NAT UDPUpdate      :2
SIP14 UDPUpdate TTL      :30
SIP14 UDPUpdate Try Times:3
SIP14 Server Type        :0
SIP14 User Agent         :
SIP14 PRACK              :0
SIP14 Keep AUTH          :0
SIP14 Session Timer      :0
SIP14 S Timer Expires    :1800
SIP14 Enable GRUU        :0
SIP14 DTMF Mode          :3
SIP14 DTMF Info Mode     :0
SIP14 NAT Type           :0
SIP14 Enable Rport       :1
SIP14 Subscribe          :0
SIP14 Sub Expire         :3600
SIP14 Single Codec       :0
SIP14 CLIR               :0
SIP14 Strict Proxy       :1
SIP14 Direct Contact     :0
SIP14 History Info       :0
SIP14 DNS SRV            :0
SIP14 DNS Mode           :0
SIP14 XFER Expire        :0
SIP14 Ban Anonymous      :0
SIP14 Dial Off Line      :0
SIP14 Quota Name         :0
SIP14 Presence Mode      :0
SIP14 RFC Ver            :1
SIP14 Phone Port         :0
SIP14 Signal Port        :5060
SIP14 Transport          :0
SIP14 Use SRV Mixer      :0
SIP14 SRV Mixer Uri      :
SIP14 Long Contact       :0
SIP14 Auto TCP           :0
SIP14 Uri Escaped        :1
SIP14 Click to Talk      :0
SIP14 MWI Num            :
SIP14 CallPark Num       :
SIP14 Retrieve Num       :
SIP14 Retrieve Type      :0
SIP14 MSRPHelp Num       :
SIP14 User Is Phone      :0
SIP14 Auto Answer        :0
SIP14 NoAnswerTime       :5
SIP14 MissedCallLog      :1
SIP14 SvcCode Mode       :0
SIP14 DNDOn SvcCode      :
SIP14 DNDOff SvcCode     :
SIP14 CFUOn SvcCode      :
SIP14 CFUOff SvcCode     :
SIP14 CFBOn SvcCode      :
SIP14 CFBOff SvcCode     :
SIP14 CFNOn SvcCode      :
SIP14 CFNOff SvcCode     :
SIP14 ANCOn SvcCode      :
SIP14 ANCOff SvcCode     :
SIP14 Send ANOn Code     :
SIP14 Send ANOffCode     :
SIP14 CW On Code         :
SIP14 CW Off Code        :
SIP14 VoiceCodecMap      :PCMU,PCMA,G729,iLBC,opus,G722
SIP14 VideoCodecMap      :
SIP14 BLFList Uri        :
SIP14 BLF Server         :
SIP14 Respond 182        :0
SIP14 Enable BLFList     :0
SIP14 Caller Id Type     :4
SIP14 Keep Higher Caller ID:0
SIP14 Syn Clock Time     :0
SIP14 Use VPN            :1
SIP14 Enable DND         :0
SIP14 Inactive Hold      :0
SIP14 Req With Port      :1
SIP14 Update Reg Expire  :1
SIP14 Enable SCA         :0
SIP14 Sub CallPark       :0
SIP14 Sub CC Status      :0
SIP14 Feature Sync       :0
SIP14 Enable XferBack    :0
SIP14 XferBack Time      :35
SIP14 Use Tel Call       :0
SIP14 Enable Preview     :0
SIP14 Preview Mode       :1
SIP14 TLS Version        :2
SIP14 CSTA Number        :
SIP14 Enable ChgPort     :0
SIP14 VQ Name            :
SIP14 VQ Server          :
SIP14 VQ Server Port     :5060
SIP14 VQ HTTP Server     :
SIP14 Flash Mode         :0
SIP14 Content Type       :
SIP14 Content Body       :
SIP14 Unregister On Boot :1
SIP14 Enable MAC Header  :1
SIP14 Enable Register MAC:1
SIP14 Record Start       :Record:on
SIP14 Record Stop        :Record:off
SIP14 BLF Dialog Match   :1
SIP14 Ptime              :0
SIP14 Enable Deal 180    :1
SIP14 Keep Single Contact:0
SIP14 Session Timer T1   :500
SIP14 Session Timer T2   :4000
SIP14 Session Timer T4   :5000
SIP14 Unavailable Mode   :0
SIP14 TCP Use Retry Timer:0
SIP14 Call-ID Format     :$id@$ip
SIP14 GB28181 Mode       :0
SIP14 Proxy Require      :
SIP14 Block RTP When Alerting:0
SIP14 Group Callpark Number:
SIP15 Phone Number       :
SIP15 Display Name       :
SIP15 Sip Name           :
SIP15 Register Addr      :
SIP15 Register Port      :5060
SIP15 Register User      :
SIP15 Register Pswd      :
SIP15 Register TTL       :3600
SIP15 Need Reg On        :0
SIP15 Backup Addr        :
SIP15 Backup Port        :5060
SIP15 Backup Transport   :0
SIP15 Backup TTL         :3600
SIP15 Backup Need Reg On :0
SIP15 Enable Reg         :0
SIP15 Backup Mode        :0
SIP15 Proxy Addr         :
SIP15 Proxy Port         :5060
SIP15 Proxy User         :
SIP15 Proxy Pswd         :
SIP15 Proxy Need Reg On  :0
SIP15 BakProxy Addr      :
SIP15 BakProxy Port      :5060
SIP15 BakProxy Need Reg On:0
SIP15 Enable Failback    :1
SIP15 Failback Interval  :1800
SIP15 Signal Failback    :0
SIP15 Signal Retry Counts:3
SIP15 SigCrypto Key      :
SIP15 Enable OSRTP       :0
SIP15 Media Crypto       :0
SIP15 MedCrypto Key      :
SIP15 SRTP Auth-Tag      :0
SIP15 Enable RFC5939     :0
SIP15 Local Domain       :
SIP15 Always FWD         :0
SIP15 Busy FWD           :0
SIP15 No Answer FWD      :0
SIP15 Always FWD Num     :
SIP15 Busy FWD Num       :
SIP15 NoAnswer FWD Num   :
SIP15 FWD Timer          :5
SIP15 Hotline Num        :
SIP15 Enable Hotline     :0
SIP15 WarmLine Time      :0
SIP15 Pickup Num         :
SIP15 Join Num           :
SIP15 Intercom Num       :
SIP15 Ring Type          :default
SIP15 NAT UDPUpdate      :2
SIP15 UDPUpdate TTL      :30
SIP15 UDPUpdate Try Times:3
SIP15 Server Type        :0
SIP15 User Agent         :
SIP15 PRACK              :0
SIP15 Keep AUTH          :0
SIP15 Session Timer      :0
SIP15 S Timer Expires    :1800
SIP15 Enable GRUU        :0
SIP15 DTMF Mode          :3
SIP15 DTMF Info Mode     :0
SIP15 NAT Type           :0
SIP15 Enable Rport       :1
SIP15 Subscribe          :0
SIP15 Sub Expire         :3600
SIP15 Single Codec       :0
SIP15 CLIR               :0
SIP15 Strict Proxy       :1
SIP15 Direct Contact     :0
SIP15 History Info       :0
SIP15 DNS SRV            :0
SIP15 DNS Mode           :0
SIP15 XFER Expire        :0
SIP15 Ban Anonymous      :0
SIP15 Dial Off Line      :0
SIP15 Quota Name         :0
SIP15 Presence Mode      :0
SIP15 RFC Ver            :1
SIP15 Phone Port         :0
SIP15 Signal Port        :5060
SIP15 Transport          :0
SIP15 Use SRV Mixer      :0
SIP15 SRV Mixer Uri      :
SIP15 Long Contact       :0
SIP15 Auto TCP           :0
SIP15 Uri Escaped        :1
SIP15 Click to Talk      :0
SIP15 MWI Num            :
SIP15 CallPark Num       :
SIP15 Retrieve Num       :
SIP15 Retrieve Type      :0
SIP15 MSRPHelp Num       :
SIP15 User Is Phone      :0
SIP15 Auto Answer        :0
SIP15 NoAnswerTime       :5
SIP15 MissedCallLog      :1
SIP15 SvcCode Mode       :0
SIP15 DNDOn SvcCode      :
SIP15 DNDOff SvcCode     :
SIP15 CFUOn SvcCode      :
SIP15 CFUOff SvcCode     :
SIP15 CFBOn SvcCode      :
SIP15 CFBOff SvcCode     :
SIP15 CFNOn SvcCode      :
SIP15 CFNOff SvcCode     :
SIP15 ANCOn SvcCode      :
SIP15 ANCOff SvcCode     :
SIP15 Send ANOn Code     :
SIP15 Send ANOffCode     :
SIP15 CW On Code         :
SIP15 CW Off Code        :
SIP15 VoiceCodecMap      :PCMU,PCMA,G729,iLBC,opus,G722
SIP15 VideoCodecMap      :
SIP15 BLFList Uri        :
SIP15 BLF Server         :
SIP15 Respond 182        :0
SIP15 Enable BLFList     :0
SIP15 Caller Id Type     :4
SIP15 Keep Higher Caller ID:0
SIP15 Syn Clock Time     :0
SIP15 Use VPN            :1
SIP15 Enable DND         :0
SIP15 Inactive Hold      :0
SIP15 Req With Port      :1
SIP15 Update Reg Expire  :1
SIP15 Enable SCA         :0
SIP15 Sub CallPark       :0
SIP15 Sub CC Status      :0
SIP15 Feature Sync       :0
SIP15 Enable XferBack    :0
SIP15 XferBack Time      :35
SIP15 Use Tel Call       :0
SIP15 Enable Preview     :0
SIP15 Preview Mode       :1
SIP15 TLS Version        :2
SIP15 CSTA Number        :
SIP15 Enable ChgPort     :0
SIP15 VQ Name            :
SIP15 VQ Server          :
SIP15 VQ Server Port     :5060
SIP15 VQ HTTP Server     :
SIP15 Flash Mode         :0
SIP15 Content Type       :
SIP15 Content Body       :
SIP15 Unregister On Boot :1
SIP15 Enable MAC Header  :1
SIP15 Enable Register MAC:1
SIP15 Record Start       :Record:on
SIP15 Record Stop        :Record:off
SIP15 BLF Dialog Match   :1
SIP15 Ptime              :0
SIP15 Enable Deal 180    :1
SIP15 Keep Single Contact:0
SIP15 Session Timer T1   :500
SIP15 Session Timer T2   :4000
SIP15 Session Timer T4   :5000
SIP15 Unavailable Mode   :0
SIP15 TCP Use Retry Timer:0
SIP15 Call-ID Format     :$id@$ip
SIP15 GB28181 Mode       :0
SIP15 Proxy Require      :
SIP15 Block RTP When Alerting:0
SIP15 Group Callpark Number:
SIP16 Phone Number       :
SIP16 Display Name       :
SIP16 Sip Name           :
SIP16 Register Addr      :
SIP16 Register Port      :5060
SIP16 Register User      :
SIP16 Register Pswd      :
SIP16 Register TTL       :3600
SIP16 Need Reg On        :0
SIP16 Backup Addr        :
SIP16 Backup Port        :5060
SIP16 Backup Transport   :0
SIP16 Backup TTL         :3600
SIP16 Backup Need Reg On :0
SIP16 Enable Reg         :0
SIP16 Backup Mode        :0
SIP16 Proxy Addr         :
SIP16 Proxy Port         :5060
SIP16 Proxy User         :
SIP16 Proxy Pswd         :
SIP16 Proxy Need Reg On  :0
SIP16 BakProxy Addr      :
SIP16 BakProxy Port      :5060
SIP16 BakProxy Need Reg On:0
SIP16 Enable Failback    :1
SIP16 Failback Interval  :1800
SIP16 Signal Failback    :0
SIP16 Signal Retry Counts:3
SIP16 SigCrypto Key      :
SIP16 Enable OSRTP       :0
SIP16 Media Crypto       :0
SIP16 MedCrypto Key      :
SIP16 SRTP Auth-Tag      :0
SIP16 Enable RFC5939     :0
SIP16 Local Domain       :
SIP16 Always FWD         :0
SIP16 Busy FWD           :0
SIP16 No Answer FWD      :0
SIP16 Always FWD Num     :
SIP16 Busy FWD Num       :
SIP16 NoAnswer FWD Num   :
SIP16 FWD Timer          :5
SIP16 Hotline Num        :
SIP16 Enable Hotline     :0
SIP16 WarmLine Time      :0
SIP16 Pickup Num         :
SIP16 Join Num           :
SIP16 Intercom Num       :
SIP16 Ring Type          :default
SIP16 NAT UDPUpdate      :2
SIP16 UDPUpdate TTL      :30
SIP16 UDPUpdate Try Times:3
SIP16 Server Type        :0
SIP16 User Agent         :
SIP16 PRACK              :0
SIP16 Keep AUTH          :0
SIP16 Session Timer      :0
SIP16 S Timer Expires    :1800
SIP16 Enable GRUU        :0
SIP16 DTMF Mode          :3
SIP16 DTMF Info Mode     :0
SIP16 NAT Type           :0
SIP16 Enable Rport       :1
SIP16 Subscribe          :0
SIP16 Sub Expire         :3600
SIP16 Single Codec       :0
SIP16 CLIR               :0
SIP16 Strict Proxy       :1
SIP16 Direct Contact     :0
SIP16 History Info       :0
SIP16 DNS SRV            :0
SIP16 DNS Mode           :0
SIP16 XFER Expire        :0
SIP16 Ban Anonymous      :0
SIP16 Dial Off Line      :0
SIP16 Quota Name         :0
SIP16 Presence Mode      :0
SIP16 RFC Ver            :1
SIP16 Phone Port         :0
SIP16 Signal Port        :5060
SIP16 Transport          :0
SIP16 Use SRV Mixer      :0
SIP16 SRV Mixer Uri      :
SIP16 Long Contact       :0
SIP16 Auto TCP           :0
SIP16 Uri Escaped        :1
SIP16 Click to Talk      :0
SIP16 MWI Num            :
SIP16 CallPark Num       :
SIP16 Retrieve Num       :
SIP16 Retrieve Type      :0
SIP16 MSRPHelp Num       :
SIP16 User Is Phone      :0
SIP16 Auto Answer        :0
SIP16 NoAnswerTime       :5
SIP16 MissedCallLog      :1
SIP16 SvcCode Mode       :0
SIP16 DNDOn SvcCode      :
SIP16 DNDOff SvcCode     :
SIP16 CFUOn SvcCode      :
SIP16 CFUOff SvcCode     :
SIP16 CFBOn SvcCode      :
SIP16 CFBOff SvcCode     :
SIP16 CFNOn SvcCode      :
SIP16 CFNOff SvcCode     :
SIP16 ANCOn SvcCode      :
SIP16 ANCOff SvcCode     :
SIP16 Send ANOn Code     :
SIP16 Send ANOffCode     :
SIP16 CW On Code         :
SIP16 CW Off Code        :
SIP16 VoiceCodecMap      :PCMU,PCMA,G729,iLBC,opus,G722
SIP16 VideoCodecMap      :
SIP16 BLFList Uri        :
SIP16 BLF Server         :
SIP16 Respond 182        :0
SIP16 Enable BLFList     :0
SIP16 Caller Id Type     :4
SIP16 Keep Higher Caller ID:0
SIP16 Syn Clock Time     :0
SIP16 Use VPN            :1
SIP16 Enable DND         :0
SIP16 Inactive Hold      :0
SIP16 Req With Port      :1
SIP16 Update Reg Expire  :1
SIP16 Enable SCA         :0
SIP16 Sub CallPark       :0
SIP16 Sub CC Status      :0
SIP16 Feature Sync       :0
SIP16 Enable XferBack    :0
SIP16 XferBack Time      :35
SIP16 Use Tel Call       :0
SIP16 Enable Preview     :0
SIP16 Preview Mode       :1
SIP16 TLS Version        :2
SIP16 CSTA Number        :
SIP16 Enable ChgPort     :0
SIP16 VQ Name            :
SIP16 VQ Server          :
SIP16 VQ Server Port     :5060
SIP16 VQ HTTP Server     :
SIP16 Flash Mode         :0
SIP16 Content Type       :
SIP16 Content Body       :
SIP16 Unregister On Boot :1
SIP16 Enable MAC Header  :1
SIP16 Enable Register MAC:1
SIP16 Record Start       :Record:on
SIP16 Record Stop        :Record:off
SIP16 BLF Dialog Match   :1
SIP16 Ptime              :0
SIP16 Enable Deal 180    :1
SIP16 Keep Single Contact:0
SIP16 Session Timer T1   :500
SIP16 Session Timer T2   :4000
SIP16 Session Timer T4   :5000
SIP16 Unavailable Mode   :0
SIP16 TCP Use Retry Timer:0
SIP16 Call-ID Format     :$id@$ip
SIP16 GB28181 Mode       :0
SIP16 Proxy Require      :
SIP16 Block RTP When Alerting:0
SIP16 Group Callpark Number:
SIP17 Phone Number       :
SIP17 Display Name       :
SIP17 Sip Name           :
SIP17 Register Addr      :
SIP17 Register Port      :5060
SIP17 Register User      :
SIP17 Register Pswd      :
SIP17 Register TTL       :3600
SIP17 Need Reg On        :0
SIP17 Backup Addr        :
SIP17 Backup Port        :5060
SIP17 Backup Transport   :0
SIP17 Backup TTL         :3600
SIP17 Backup Need Reg On :0
SIP17 Enable Reg         :0
SIP17 Backup Mode        :0
SIP17 Proxy Addr         :
SIP17 Proxy Port         :5060
SIP17 Proxy User         :
SIP17 Proxy Pswd         :
SIP17 Proxy Need Reg On  :0
SIP17 BakProxy Addr      :
SIP17 BakProxy Port      :5060
SIP17 BakProxy Need Reg On:0
SIP17 Enable Failback    :1
SIP17 Failback Interval  :1800
SIP17 Signal Failback    :0
SIP17 Signal Retry Counts:3
SIP17 SigCrypto Key      :
SIP17 Enable OSRTP       :0
SIP17 Media Crypto       :0
SIP17 MedCrypto Key      :
SIP17 SRTP Auth-Tag      :0
SIP17 Enable RFC5939     :0
SIP17 Local Domain       :
SIP17 Always FWD         :0
SIP17 Busy FWD           :0
SIP17 No Answer FWD      :0
SIP17 Always FWD Num     :
SIP17 Busy FWD Num       :
SIP17 NoAnswer FWD Num   :
SIP17 FWD Timer          :5
SIP17 Hotline Num        :
SIP17 Enable Hotline     :0
SIP17 WarmLine Time      :0
SIP17 Pickup Num         :
SIP17 Join Num           :
SIP17 Intercom Num       :
SIP17 Ring Type          :default
SIP17 NAT UDPUpdate      :2
SIP17 UDPUpdate TTL      :30
SIP17 UDPUpdate Try Times:3
SIP17 Server Type        :0
SIP17 User Agent         :
SIP17 PRACK              :0
SIP17 Keep AUTH          :0
SIP17 Session Timer      :0
SIP17 S Timer Expires    :1800
SIP17 Enable GRUU        :0
SIP17 DTMF Mode          :3
SIP17 DTMF Info Mode     :0
SIP17 NAT Type           :0
SIP17 Enable Rport       :1
SIP17 Subscribe          :0
SIP17 Sub Expire         :3600
SIP17 Single Codec       :0
SIP17 CLIR               :0
SIP17 Strict Proxy       :1
SIP17 Direct Contact     :0
SIP17 History Info       :0
SIP17 DNS SRV            :0
SIP17 DNS Mode           :0
SIP17 XFER Expire        :0
SIP17 Ban Anonymous      :0
SIP17 Dial Off Line      :0
SIP17 Quota Name         :0
SIP17 Presence Mode      :0
SIP17 RFC Ver            :1
SIP17 Phone Port         :0
SIP17 Signal Port        :5060
SIP17 Transport          :0
SIP17 Use SRV Mixer      :0
SIP17 SRV Mixer Uri      :
SIP17 Long Contact       :0
SIP17 Auto TCP           :0
SIP17 Uri Escaped        :1
SIP17 Click to Talk      :0
SIP17 MWI Num            :
SIP17 CallPark Num       :
SIP17 Retrieve Num       :
SIP17 Retrieve Type      :0
SIP17 MSRPHelp Num       :
SIP17 User Is Phone      :0
SIP17 Auto Answer        :0
SIP17 NoAnswerTime       :5
SIP17 MissedCallLog      :1
SIP17 SvcCode Mode       :0
SIP17 DNDOn SvcCode      :
SIP17 DNDOff SvcCode     :
SIP17 CFUOn SvcCode      :
SIP17 CFUOff SvcCode     :
SIP17 CFBOn SvcCode      :
SIP17 CFBOff SvcCode     :
SIP17 CFNOn SvcCode      :
SIP17 CFNOff SvcCode     :
SIP17 ANCOn SvcCode      :
SIP17 ANCOff SvcCode     :
SIP17 Send ANOn Code     :
SIP17 Send ANOffCode     :
SIP17 CW On Code         :
SIP17 CW Off Code        :
SIP17 VoiceCodecMap      :PCMU,PCMA,G729,iLBC,opus,G722
SIP17 VideoCodecMap      :
SIP17 BLFList Uri        :
SIP17 BLF Server         :
SIP17 Respond 182        :0
SIP17 Enable BLFList     :0
SIP17 Caller Id Type     :4
SIP17 Keep Higher Caller ID:0
SIP17 Syn Clock Time     :0
SIP17 Use VPN            :1
SIP17 Enable DND         :0
SIP17 Inactive Hold      :0
SIP17 Req With Port      :1
SIP17 Update Reg Expire  :1
SIP17 Enable SCA         :0
SIP17 Sub CallPark       :0
SIP17 Sub CC Status      :0
SIP17 Feature Sync       :0
SIP17 Enable XferBack    :0
SIP17 XferBack Time      :35
SIP17 Use Tel Call       :0
SIP17 Enable Preview     :0
SIP17 Preview Mode       :1
SIP17 TLS Version        :2
SIP17 CSTA Number        :
SIP17 Enable ChgPort     :0
SIP17 VQ Name            :
SIP17 VQ Server          :
SIP17 VQ Server Port     :5060
SIP17 VQ HTTP Server     :
SIP17 Flash Mode         :0
SIP17 Content Type       :
SIP17 Content Body       :
SIP17 Unregister On Boot :1
SIP17 Enable MAC Header  :1
SIP17 Enable Register MAC:1
SIP17 Record Start       :Record:on
SIP17 Record Stop        :Record:off
SIP17 BLF Dialog Match   :1
SIP17 Ptime              :0
SIP17 Enable Deal 180    :1
SIP17 Keep Single Contact:0
SIP17 Session Timer T1   :500
SIP17 Session Timer T2   :4000
SIP17 Session Timer T4   :5000
SIP17 Unavailable Mode   :0
SIP17 TCP Use Retry Timer:0
SIP17 Call-ID Format     :$id@$ip
SIP17 GB28181 Mode       :0
SIP17 Proxy Require      :
SIP17 Block RTP When Alerting:0
SIP17 Group Callpark Number:
SIP18 Phone Number       :
SIP18 Display Name       :
SIP18 Sip Name           :
SIP18 Register Addr      :
SIP18 Register Port      :5060
SIP18 Register User      :
SIP18 Register Pswd      :
SIP18 Register TTL       :3600
SIP18 Need Reg On        :0
SIP18 Backup Addr        :
SIP18 Backup Port        :5060
SIP18 Backup Transport   :0
SIP18 Backup TTL         :3600
SIP18 Backup Need Reg On :0
SIP18 Enable Reg         :0
SIP18 Backup Mode        :0
SIP18 Proxy Addr         :
SIP18 Proxy Port         :5060
SIP18 Proxy User         :
SIP18 Proxy Pswd         :
SIP18 Proxy Need Reg On  :0
SIP18 BakProxy Addr      :
SIP18 BakProxy Port      :5060
SIP18 BakProxy Need Reg On:0
SIP18 Enable Failback    :1
SIP18 Failback Interval  :1800
SIP18 Signal Failback    :0
SIP18 Signal Retry Counts:3
SIP18 SigCrypto Key      :
SIP18 Enable OSRTP       :0
SIP18 Media Crypto       :0
SIP18 MedCrypto Key      :
SIP18 SRTP Auth-Tag      :0
SIP18 Enable RFC5939     :0
SIP18 Local Domain       :
SIP18 Always FWD         :0
SIP18 Busy FWD           :0
SIP18 No Answer FWD      :0
SIP18 Always FWD Num     :
SIP18 Busy FWD Num       :
SIP18 NoAnswer FWD Num   :
SIP18 FWD Timer          :5
SIP18 Hotline Num        :
SIP18 Enable Hotline     :0
SIP18 WarmLine Time      :0
SIP18 Pickup Num         :
SIP18 Join Num           :
SIP18 Intercom Num       :
SIP18 Ring Type          :default
SIP18 NAT UDPUpdate      :2
SIP18 UDPUpdate TTL      :30
SIP18 UDPUpdate Try Times:3
SIP18 Server Type        :0
SIP18 User Agent         :
SIP18 PRACK              :0
SIP18 Keep AUTH          :0
SIP18 Session Timer      :0
SIP18 S Timer Expires    :1800
SIP18 Enable GRUU        :0
SIP18 DTMF Mode          :3
SIP18 DTMF Info Mode     :0
SIP18 NAT Type           :0
SIP18 Enable Rport       :1
SIP18 Subscribe          :0
SIP18 Sub Expire         :3600
SIP18 Single Codec       :0
SIP18 CLIR               :0
SIP18 Strict Proxy       :1
SIP18 Direct Contact     :0
SIP18 History Info       :0
SIP18 DNS SRV            :0
SIP18 DNS Mode           :0
SIP18 XFER Expire        :0
SIP18 Ban Anonymous      :0
SIP18 Dial Off Line      :0
SIP18 Quota Name         :0
SIP18 Presence Mode      :0
SIP18 RFC Ver            :1
SIP18 Phone Port         :0
SIP18 Signal Port        :5060
SIP18 Transport          :0
SIP18 Use SRV Mixer      :0
SIP18 SRV Mixer Uri      :
SIP18 Long Contact       :0
SIP18 Auto TCP           :0
SIP18 Uri Escaped        :1
SIP18 Click to Talk      :0
SIP18 MWI Num            :
SIP18 CallPark Num       :
SIP18 Retrieve Num       :
SIP18 Retrieve Type      :0
SIP18 MSRPHelp Num       :
SIP18 User Is Phone      :0
SIP18 Auto Answer        :0
SIP18 NoAnswerTime       :5
SIP18 MissedCallLog      :1
SIP18 SvcCode Mode       :0
SIP18 DNDOn SvcCode      :
SIP18 DNDOff SvcCode     :
SIP18 CFUOn SvcCode      :
SIP18 CFUOff SvcCode     :
SIP18 CFBOn SvcCode      :
SIP18 CFBOff SvcCode     :
SIP18 CFNOn SvcCode      :
SIP18 CFNOff SvcCode     :
SIP18 ANCOn SvcCode      :
SIP18 ANCOff SvcCode     :
SIP18 Send ANOn Code     :
SIP18 Send ANOffCode     :
SIP18 CW On Code         :
SIP18 CW Off Code        :
SIP18 VoiceCodecMap      :PCMU,PCMA,G729,iLBC,opus,G722
SIP18 VideoCodecMap      :
SIP18 BLFList Uri        :
SIP18 BLF Server         :
SIP18 Respond 182        :0
SIP18 Enable BLFList     :0
SIP18 Caller Id Type     :4
SIP18 Keep Higher Caller ID:0
SIP18 Syn Clock Time     :0
SIP18 Use VPN            :1
SIP18 Enable DND         :0
SIP18 Inactive Hold      :0
SIP18 Req With Port      :1
SIP18 Update Reg Expire  :1
SIP18 Enable SCA         :0
SIP18 Sub CallPark       :0
SIP18 Sub CC Status      :0
SIP18 Feature Sync       :0
SIP18 Enable XferBack    :0
SIP18 XferBack Time      :35
SIP18 Use Tel Call       :0
SIP18 Enable Preview     :0
SIP18 Preview Mode       :1
SIP18 TLS Version        :2
SIP18 CSTA Number        :
SIP18 Enable ChgPort     :0
SIP18 VQ Name            :
SIP18 VQ Server          :
SIP18 VQ Server Port     :5060
SIP18 VQ HTTP Server     :
SIP18 Flash Mode         :0
SIP18 Content Type       :
SIP18 Content Body       :
SIP18 Unregister On Boot :1
SIP18 Enable MAC Header  :1
SIP18 Enable Register MAC:1
SIP18 Record Start       :Record:on
SIP18 Record Stop        :Record:off
SIP18 BLF Dialog Match   :1
SIP18 Ptime              :0
SIP18 Enable Deal 180    :1
SIP18 Keep Single Contact:0
SIP18 Session Timer T1   :500
SIP18 Session Timer T2   :4000
SIP18 Session Timer T4   :5000
SIP18 Unavailable Mode   :0
SIP18 TCP Use Retry Timer:0
SIP18 Call-ID Format     :$id@$ip
SIP18 GB28181 Mode       :0
SIP18 Proxy Require      :
SIP18 Block RTP When Alerting:0
SIP18 Group Callpark Number:
SIP19 Phone Number       :
SIP19 Display Name       :
SIP19 Sip Name           :
SIP19 Register Addr      :
SIP19 Register Port      :5060
SIP19 Register User      :
SIP19 Register Pswd      :
SIP19 Register TTL       :3600
SIP19 Need Reg On        :0
SIP19 Backup Addr        :
SIP19 Backup Port        :5060
SIP19 Backup Transport   :0
SIP19 Backup TTL         :3600
SIP19 Backup Need Reg On :0
SIP19 Enable Reg         :0
SIP19 Backup Mode        :0
SIP19 Proxy Addr         :
SIP19 Proxy Port         :5060
SIP19 Proxy User         :
SIP19 Proxy Pswd         :
SIP19 Proxy Need Reg On  :0
SIP19 BakProxy Addr      :
SIP19 BakProxy Port      :5060
SIP19 BakProxy Need Reg On:0
SIP19 Enable Failback    :1
SIP19 Failback Interval  :1800
SIP19 Signal Failback    :0
SIP19 Signal Retry Counts:3
SIP19 SigCrypto Key      :
SIP19 Enable OSRTP       :0
SIP19 Media Crypto       :0
SIP19 MedCrypto Key      :
SIP19 SRTP Auth-Tag      :0
SIP19 Enable RFC5939     :0
SIP19 Local Domain       :
SIP19 Always FWD         :0
SIP19 Busy FWD           :0
SIP19 No Answer FWD      :0
SIP19 Always FWD Num     :
SIP19 Busy FWD Num       :
SIP19 NoAnswer FWD Num   :
SIP19 FWD Timer          :5
SIP19 Hotline Num        :
SIP19 Enable Hotline     :0
SIP19 WarmLine Time      :0
SIP19 Pickup Num         :
SIP19 Join Num           :
SIP19 Intercom Num       :
SIP19 Ring Type          :default
SIP19 NAT UDPUpdate      :2
SIP19 UDPUpdate TTL      :30
SIP19 UDPUpdate Try Times:3
SIP19 Server Type        :0
SIP19 User Agent         :
SIP19 PRACK              :0
SIP19 Keep AUTH          :0
SIP19 Session Timer      :0
SIP19 S Timer Expires    :1800
SIP19 Enable GRUU        :0
SIP19 DTMF Mode          :3
SIP19 DTMF Info Mode     :0
SIP19 NAT Type           :0
SIP19 Enable Rport       :1
SIP19 Subscribe          :0
SIP19 Sub Expire         :3600
SIP19 Single Codec       :0
SIP19 CLIR               :0
SIP19 Strict Proxy       :1
SIP19 Direct Contact     :0
SIP19 History Info       :0
SIP19 DNS SRV            :0
SIP19 DNS Mode           :0
SIP19 XFER Expire        :0
SIP19 Ban Anonymous      :0
SIP19 Dial Off Line      :0
SIP19 Quota Name         :0
SIP19 Presence Mode      :0
SIP19 RFC Ver            :1
SIP19 Phone Port         :0
SIP19 Signal Port        :5060
SIP19 Transport          :0
SIP19 Use SRV Mixer      :0
SIP19 SRV Mixer Uri      :
SIP19 Long Contact       :0
SIP19 Auto TCP           :0
SIP19 Uri Escaped        :1
SIP19 Click to Talk      :0
SIP19 MWI Num            :
SIP19 CallPark Num       :
SIP19 Retrieve Num       :
SIP19 Retrieve Type      :0
SIP19 MSRPHelp Num       :
SIP19 User Is Phone      :0
SIP19 Auto Answer        :0
SIP19 NoAnswerTime       :5
SIP19 MissedCallLog      :1
SIP19 SvcCode Mode       :0
SIP19 DNDOn SvcCode      :
SIP19 DNDOff SvcCode     :
SIP19 CFUOn SvcCode      :
SIP19 CFUOff SvcCode     :
SIP19 CFBOn SvcCode      :
SIP19 CFBOff SvcCode     :
SIP19 CFNOn SvcCode      :
SIP19 CFNOff SvcCode     :
SIP19 ANCOn SvcCode      :
SIP19 ANCOff SvcCode     :
SIP19 Send ANOn Code     :
SIP19 Send ANOffCode     :
SIP19 CW On Code         :
SIP19 CW Off Code        :
SIP19 VoiceCodecMap      :PCMU,PCMA,G729,iLBC,opus,G722
SIP19 VideoCodecMap      :
SIP19 BLFList Uri        :
SIP19 BLF Server         :
SIP19 Respond 182        :0
SIP19 Enable BLFList     :0
SIP19 Caller Id Type     :4
SIP19 Keep Higher Caller ID:0
SIP19 Syn Clock Time     :0
SIP19 Use VPN            :1
SIP19 Enable DND         :0
SIP19 Inactive Hold      :0
SIP19 Req With Port      :1
SIP19 Update Reg Expire  :1
SIP19 Enable SCA         :0
SIP19 Sub CallPark       :0
SIP19 Sub CC Status      :0
SIP19 Feature Sync       :0
SIP19 Enable XferBack    :0
SIP19 XferBack Time      :35
SIP19 Use Tel Call       :0
SIP19 Enable Preview     :0
SIP19 Preview Mode       :1
SIP19 TLS Version        :2
SIP19 CSTA Number        :
SIP19 Enable ChgPort     :0
SIP19 VQ Name            :
SIP19 VQ Server          :
SIP19 VQ Server Port     :5060
SIP19 VQ HTTP Server     :
SIP19 Flash Mode         :0
SIP19 Content Type       :
SIP19 Content Body       :
SIP19 Unregister On Boot :1
SIP19 Enable MAC Header  :1
SIP19 Enable Register MAC:1
SIP19 Record Start       :Record:on
SIP19 Record Stop        :Record:off
SIP19 BLF Dialog Match   :1
SIP19 Ptime              :0
SIP19 Enable Deal 180    :1
SIP19 Keep Single Contact:0
SIP19 Session Timer T1   :500
SIP19 Session Timer T2   :4000
SIP19 Session Timer T4   :5000
SIP19 Unavailable Mode   :0
SIP19 TCP Use Retry Timer:0
SIP19 Call-ID Format     :$id@$ip
SIP19 GB28181 Mode       :0
SIP19 Proxy Require      :
SIP19 Block RTP When Alerting:0
SIP19 Group Callpark Number:
SIP20 Phone Number       :
SIP20 Display Name       :
SIP20 Sip Name           :
SIP20 Register Addr      :
SIP20 Register Port      :5060
SIP20 Register User      :
SIP20 Register Pswd      :
SIP20 Register TTL       :3600
SIP20 Need Reg On        :0
SIP20 Backup Addr        :
SIP20 Backup Port        :5060
SIP20 Backup Transport   :0
SIP20 Backup TTL         :3600
SIP20 Backup Need Reg On :0
SIP20 Enable Reg         :0
SIP20 Backup Mode        :0
SIP20 Proxy Addr         :
SIP20 Proxy Port         :5060
SIP20 Proxy User         :
SIP20 Proxy Pswd         :
SIP20 Proxy Need Reg On  :0
SIP20 BakProxy Addr      :
SIP20 BakProxy Port      :5060
SIP20 BakProxy Need Reg On:0
SIP20 Enable Failback    :1
SIP20 Failback Interval  :1800
SIP20 Signal Failback    :0
SIP20 Signal Retry Counts:3
SIP20 SigCrypto Key      :
SIP20 Enable OSRTP       :0
SIP20 Media Crypto       :0
SIP20 MedCrypto Key      :
SIP20 SRTP Auth-Tag      :0
SIP20 Enable RFC5939     :0
SIP20 Local Domain       :
SIP20 Always FWD         :0
SIP20 Busy FWD           :0
SIP20 No Answer FWD      :0
SIP20 Always FWD Num     :
SIP20 Busy FWD Num       :
SIP20 NoAnswer FWD Num   :
SIP20 FWD Timer          :5
SIP20 Hotline Num        :
SIP20 Enable Hotline     :0
SIP20 WarmLine Time      :0
SIP20 Pickup Num         :
SIP20 Join Num           :
SIP20 Intercom Num       :
SIP20 Ring Type          :default
SIP20 NAT UDPUpdate      :2
SIP20 UDPUpdate TTL      :30
SIP20 UDPUpdate Try Times:3
SIP20 Server Type        :0
SIP20 User Agent         :
SIP20 PRACK              :0
SIP20 Keep AUTH          :0
SIP20 Session Timer      :0
SIP20 S Timer Expires    :1800
SIP20 Enable GRUU        :0
SIP20 DTMF Mode          :3
SIP20 DTMF Info Mode     :0
SIP20 NAT Type           :0
SIP20 Enable Rport       :1
SIP20 Subscribe          :0
SIP20 Sub Expire         :3600
SIP20 Single Codec       :0
SIP20 CLIR               :0
SIP20 Strict Proxy       :1
SIP20 Direct Contact     :0
SIP20 History Info       :0
SIP20 DNS SRV            :0
SIP20 DNS Mode           :0
SIP20 XFER Expire        :0
SIP20 Ban Anonymous      :0
SIP20 Dial Off Line      :0
SIP20 Quota Name         :0
SIP20 Presence Mode      :0
SIP20 RFC Ver            :1
SIP20 Phone Port         :0
SIP20 Signal Port        :5060
SIP20 Transport          :0
SIP20 Use SRV Mixer      :0
SIP20 SRV Mixer Uri      :
SIP20 Long Contact       :0
SIP20 Auto TCP           :0
SIP20 Uri Escaped        :1
SIP20 Click to Talk      :0
SIP20 MWI Num            :
SIP20 CallPark Num       :
SIP20 Retrieve Num       :
SIP20 Retrieve Type      :0
SIP20 MSRPHelp Num       :
SIP20 User Is Phone      :0
SIP20 Auto Answer        :0
SIP20 NoAnswerTime       :5
SIP20 MissedCallLog      :1
SIP20 SvcCode Mode       :0
SIP20 DNDOn SvcCode      :
SIP20 DNDOff SvcCode     :
SIP20 CFUOn SvcCode      :
SIP20 CFUOff SvcCode     :
SIP20 CFBOn SvcCode      :
SIP20 CFBOff SvcCode     :
SIP20 CFNOn SvcCode      :
SIP20 CFNOff SvcCode     :
SIP20 ANCOn SvcCode      :
SIP20 ANCOff SvcCode     :
SIP20 Send ANOn Code     :
SIP20 Send ANOffCode     :
SIP20 CW On Code         :
SIP20 CW Off Code        :
SIP20 VoiceCodecMap      :PCMU,PCMA,G729,iLBC,opus,G722
SIP20 VideoCodecMap      :
SIP20 BLFList Uri        :
SIP20 BLF Server         :
SIP20 Respond 182        :0
SIP20 Enable BLFList     :0
SIP20 Caller Id Type     :4
SIP20 Keep Higher Caller ID:0
SIP20 Syn Clock Time     :0
SIP20 Use VPN            :1
SIP20 Enable DND         :0
SIP20 Inactive Hold      :0
SIP20 Req With Port      :1
SIP20 Update Reg Expire  :1
SIP20 Enable SCA         :0
SIP20 Sub CallPark       :0
SIP20 Sub CC Status      :0
SIP20 Feature Sync       :0
SIP20 Enable XferBack    :0
SIP20 XferBack Time      :35
SIP20 Use Tel Call       :0
SIP20 Enable Preview     :0
SIP20 Preview Mode       :1
SIP20 TLS Version        :2
SIP20 CSTA Number        :
SIP20 Enable ChgPort     :0
SIP20 VQ Name            :
SIP20 VQ Server          :
SIP20 VQ Server Port     :5060
SIP20 VQ HTTP Server     :
SIP20 Flash Mode         :0
SIP20 Content Type       :
SIP20 Content Body       :
SIP20 Unregister On Boot :1
SIP20 Enable MAC Header  :1
SIP20 Enable Register MAC:1
SIP20 Record Start       :Record:on
SIP20 Record Stop        :Record:off
SIP20 BLF Dialog Match   :1
SIP20 Ptime              :0
SIP20 Enable Deal 180    :1
SIP20 Keep Single Contact:0
SIP20 Session Timer T1   :500
SIP20 Session Timer T2   :4000
SIP20 Session Timer T4   :5000
SIP20 Unavailable Mode   :0
SIP20 TCP Use Retry Timer:0
SIP20 Call-ID Format     :$id@$ip
SIP20 GB28181 Mode       :0
SIP20 Proxy Require      :
SIP20 Block RTP When Alerting:0
SIP20 Group Callpark Number:
--SIP P2P Config-- :
SIP P2P Enable Auto Answer:0
SIP P2P Auto Answer Delay :30
SIP P2P Dtmf Mode         :1
SIP P2P Sip Info Dtmf Mode:0
SIP P2P Enable Preview    :0
SIP P2P Preview Mode      :0
SIP P2P Use VPN           :1
SIP P2P Call-ID Format    :$id@$ip
SIP P2P Session Timer     :0
SIP P2P S Timer Expires   :1800

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
P1 DND Accept Mcast   :0
P1 Enable White List  :1
P1 Enable Black List  :1
P1 Enable CallBar     :1
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
P1 Enable Intercom    :1
P1 Intercom Mute      :0
P1 Intercom Tone      :1
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
P1 Auto Handle Video  :1
P1 Default Ans Mode   :2
P1 Default Dial Mode  :2
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
P1 Privacy Rule       :
P1 Transf DTMF Code   :
P1 Hold DTMF Code     :
P1 Conf DTMF Code     :
P1 Disable Dial Search:0
P1 Call Number Filter :
P1 Auto Resume Current:0
P1 Call Timeout       :120
P1 Ring Timeout       :120
P1 Ring Priority      :1
P1 Auto Answer Tone   :1
P1 Alerting Tone      :1
P1 Busy Tone          :1
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
Alert1 Ring Type          :1.wav
Alert2 Text               :
Alert2 Line               :-1
Alert2 Ring Type          :1.wav
Alert3 Text               :
Alert3 Line               :-1
Alert3 Ring Type          :1.wav
Alert4 Text               :
Alert4 Line               :-1
Alert4 Ring Type          :1.wav
Alert5 Text               :
Alert5 Line               :-1
Alert5 Ring Type          :1.wav
Alert6 Text               :
Alert6 Line               :-1
Alert6 Ring Type          :1.wav
Alert7 Text               :
Alert7 Line               :-1
Alert7 Ring Type          :1.wav
Alert8 Text               :
Alert8 Line               :-1
Alert8 Ring Type          :1.wav
Alert9 Text               :
Alert9 Line               :-1
Alert9 Ring Type          :1.wav
Alert10 Text               :
Alert10 Line               :-1
Alert10 Ring Type          :1.wav

<PHONE FEATURE MODULE>
Menu Password      :
KeyLock Password   :
Fast Keylock Code  :
Enable KeyLock     :0
KeyLock Timeout    :0
KeyLock Status     :0
Emergency Call     :110
Push XML IP        :
SIP Number Plan    :0
LDAP Search        :0
Search Path        :0
Caller Display Type:5
CallLog DisplayType:0
Enable Recv SMS    :1
Enable Call History:1
Line Display Format:$name@$protocol$instance
Enable MWI Tone    :0
SIP Notify XML     :1
Block XML When Call:1
XML Update Interval:30
Vqm Display Order  :
Enable Push XML Auth:0
Pickup Visual Alert:0
Pickup Audio Alert :0
Pickup Ring Type   :
Callpark Visual Alert:0
Callpark Audio Alert:0
Callpark Ring Type :
Pbook Display Attr :
Display Business Card Timeout :0
Display Call Duration:1
DSS Name Search    :1
--Display Input--  :
LCD Title          :VOIP PHONE
LCD Constrast      :5
Enable Energysaving:4
LCD Luminance Level:12
Backlight Off Time :60
Disable CHN IME    :0
Phone Model        :
Host Name          :(none)
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
Power Saving       :1
Idle Mute          :3
Register Failed    :3
DND                :0
Power Color             :1
MWI Or SMS Color        :1
In Using Color          :1
Ring Color              :1
Hold Color              :1
Mute Color              :1
Missed Call Color       :1
Idle Mute Color         :1
Register Failed Color   :1
Power Saving Color      :1
DND Color               :1
Event Notification LED  :0
Standby Lamp Effect      :1
Lamp Effect Play Time    :1
Custom Lamp Effect Time  :1200
Standby Lamp Effect Type :0
Offhook Lamp Effect      :1
Offhook Lamp Effect Color:0
Ringing Lamp Effect      :0
Ringing Lamp Effect Type :0
Talking Lamp Effect      :0
Talking Lamp Effect Type :0
Calling Lamp Effect      :0
Calling Lamp Effect Type :0
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
BLF Failed Color   :2
BLF Failed Ctl     :0
BLF Failed Text    :failed
BLF Parked Color   :0
BLF Parked Ctl     :3
BLF Parked Text    :parked
--Voice Volume--   :
Handset Vol        :5
Handset Mic Vol    :3
Handset Tone Vol   :3
Headset Vol        :5
Headset Mic Vol    :3
Headset Ring Vol   :5
Headset Tone Vol   :3
HandFree Vol       :5
HandFree Mic Vol   :3
HandFree Ring Vol  :5
HandFree Tone Vol  :3
Ring Type          :default.wav
--DateTime Config--:
Enable SNTP        :1
SNTP Server        :10.252.64.109
Second SNTP Server :time.nist.gov
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
Conference Softkey :hold;conf;split;end;
Waiting Softkey    :xfer;accept;reject;end;
Ending Softkey     :redial;none;none;end;
DialerPre Softkey  :send;save;delete;exit;
DialerCall Softkey :send;2aB;delete;exit;
DialerXfer Softkey :delete;xfer;send;exit;
DialerCfwd Softkey :send;2aB;delete;exit;
Desktop Click      :history;status;none;none;none;
Dailer  Click      :pline;nline;none;none;none;
Ringing Click      :none;none;none;none;none;
Call    Click      :none;none;voldown;volup;none;
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
LDAP1 Display Type       :0
LDAP1 Search Type        :0
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
LDAP2 Display Type       :0
LDAP2 Search Type        :0
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
LDAP3 Display Type       :0
LDAP3 Search Type        :0
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
LDAP4 Display Type       :0
LDAP4 Search Type        :0
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
LDAP5 Display Type       :0
LDAP5 Search Type        :0
--Xml PhoneBook--  :
XML-PBook1 Name               :
XML-PBook1 Addr               :
XML-PBook1 UserName           :
XML-PBook1 PassWd             :
XML-PBook1 Sipline            :-1
XML-PBook1 BindLine           :-1
XML-PBook1 Phonebook Type     :0
XML-PBook2 Name               :
XML-PBook2 Addr               :
XML-PBook2 UserName           :
XML-PBook2 PassWd             :
XML-PBook2 Sipline            :-1
XML-PBook2 BindLine           :-1
XML-PBook2 Phonebook Type     :0
XML-PBook3 Name               :
XML-PBook3 Addr               :
XML-PBook3 UserName           :
XML-PBook3 PassWd             :
XML-PBook3 Sipline            :-1
XML-PBook3 BindLine           :-1
XML-PBook3 Phonebook Type     :0
XML-PBook4 Name               :
XML-PBook4 Addr               :
XML-PBook4 UserName           :
XML-PBook4 PassWd             :
XML-PBook4 Sipline            :-1
XML-PBook4 BindLine           :-1
XML-PBook4 Phonebook Type     :0
XML-PBook5 Name               :
XML-PBook5 Addr               :
XML-PBook5 UserName           :
XML-PBook5 PassWd             :
XML-PBook5 Sipline            :-1
XML-PBook5 BindLine           :-1
XML-PBook5 Phonebook Type     :0

<DEVICE MANAGER MODULE>
Onhook Time        :120
Enable Hookflash   :0
Key Long Press Time:2
Key Long Long Press Time:6

<VQM CONFIG MODULE>
Session Report     :1
Interval Report    :1
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
Recv Sip Msg Url   :
Reset Phone Url    :
Insufficient Rom Url:
--CTI AT Config--  :
At Enabled         :0
At Server          :

<ATE CONFIG MODULE>
ATE Id            :0000000000000000

<MCAST CFG MODULE>
Priority           :0
Enable Priority    :0
Intercom Priority  :0
Enable Prio Chan   :0
Enable Emer Chan   :0
Multicast Tone     :1
Mcast Listening Renew Time:0
Mcast Send DTMF Mode:0
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
FuncKey Page Num   :2
SideKey Page Num   :3
DSS Home Page      :0
DSS Timeout To Home  :90
Display Parked Info:0
DSS DIAL Switch Mode :0
First Call Wait Time :16
First Num Start Time :360
First Num End Time   :1080
DSS Long Press Action:1
Auto BLF List        :1
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
Fkey4 Type               :2
Fkey4 Value              :SIP4
Fkey4 Title              :
Fkey4 ICON               :Green
Fkey5 Type               :2
Fkey5 Value              :SIP5
Fkey5 Title              :
Fkey5 ICON               :Green
Fkey6 Type               :2
Fkey6 Value              :SIP6
Fkey6 Title              :
Fkey6 ICON               :Green
Fkey7 Type               :3
Fkey7 Value              :F_MWI
Fkey7 Title              :
Fkey7 ICON               :Green
Fkey8 Type               :3
Fkey8 Value              :F_HEADSET
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
Fkey11 Type               :0
Fkey11 Value              :
Fkey11 Title              :
Fkey11 ICON               :Green
Fkey12 Type               :0
Fkey12 Value              :
Fkey12 Title              :
Fkey12 ICON               :Green
--Sidekey Config2--:
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
Fkey11 Type               :0
Fkey11 Value              :
Fkey11 Title              :
Fkey11 ICON               :Green
Fkey12 Type               :0
Fkey12 Value              :
Fkey12 Title              :
Fkey12 ICON               :Green
--Sidekey Config3--:
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
Fkey11 Type               :0
Fkey11 Value              :
Fkey11 Title              :
Fkey11 ICON               :Green
Fkey12 Type               :0
Fkey12 Value              :
Fkey12 Title              :
Fkey12 ICON               :Green
--Sidekey Config4--:
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
Fkey11 Type               :0
Fkey11 Value              :
Fkey11 Title              :
Fkey11 ICON               :Green
Fkey12 Type               :0
Fkey12 Value              :
Fkey12 Title              :
Fkey12 ICON               :Green
--Sidekey Config5--:
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
Fkey11 Type               :0
Fkey11 Value              :
Fkey11 Title              :
Fkey11 ICON               :Green
Fkey12 Type               :0
Fkey12 Value              :
Fkey12 Title              :
Fkey12 ICON               :Green
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
--Extern Console1--:
exKey1 Type               :0
exKey1 Value              :
exKey1 Title              :
exKey1 ICON               :Green
exKey2 Type               :0
exKey2 Value              :
exKey2 Title              :
exKey2 ICON               :Green
exKey3 Type               :0
exKey3 Value              :
exKey3 Title              :
exKey3 ICON               :Green
exKey4 Type               :0
exKey4 Value              :
exKey4 Title              :
exKey4 ICON               :Green
exKey5 Type               :0
exKey5 Value              :
exKey5 Title              :
exKey5 ICON               :Green
exKey6 Type               :0
exKey6 Value              :
exKey6 Title              :
exKey6 ICON               :Green
exKey7 Type               :0
exKey7 Value              :
exKey7 Title              :
exKey7 ICON               :Green
exKey8 Type               :0
exKey8 Value              :
exKey8 Title              :
exKey8 ICON               :Green
exKey9 Type               :0
exKey9 Value              :
exKey9 Title              :
exKey9 ICON               :Green
exKey10 Type               :0
exKey10 Value              :
exKey10 Title              :
exKey10 ICON               :Green
exKey11 Type               :0
exKey11 Value              :
exKey11 Title              :
exKey11 ICON               :Green
exKey12 Type               :0
exKey12 Value              :
exKey12 Title              :
exKey12 ICON               :Green
exKey13 Type               :0
exKey13 Value              :
exKey13 Title              :
exKey13 ICON               :Green
exKey14 Type               :0
exKey14 Value              :
exKey14 Title              :
exKey14 ICON               :Green
exKey15 Type               :0
exKey15 Value              :
exKey15 Title              :
exKey15 ICON               :Green
exKey16 Type               :0
exKey16 Value              :
exKey16 Title              :
exKey16 ICON               :Green
exKey17 Type               :0
exKey17 Value              :
exKey17 Title              :
exKey17 ICON               :Green
exKey18 Type               :0
exKey18 Value              :
exKey18 Title              :
exKey18 ICON               :Green
exKey19 Type               :0
exKey19 Value              :
exKey19 Title              :
exKey19 ICON               :Green
exKey20 Type               :0
exKey20 Value              :
exKey20 Title              :
exKey20 ICON               :Green
--Extern Console2--:
exKey1 Type               :0
exKey1 Value              :
exKey1 Title              :
exKey1 ICON               :Green
exKey2 Type               :0
exKey2 Value              :
exKey2 Title              :
exKey2 ICON               :Green
exKey3 Type               :0
exKey3 Value              :
exKey3 Title              :
exKey3 ICON               :Green
exKey4 Type               :0
exKey4 Value              :
exKey4 Title              :
exKey4 ICON               :Green
exKey5 Type               :0
exKey5 Value              :
exKey5 Title              :
exKey5 ICON               :Green
exKey6 Type               :0
exKey6 Value              :
exKey6 Title              :
exKey6 ICON               :Green
exKey7 Type               :0
exKey7 Value              :
exKey7 Title              :
exKey7 ICON               :Green
exKey8 Type               :0
exKey8 Value              :
exKey8 Title              :
exKey8 ICON               :Green
exKey9 Type               :0
exKey9 Value              :
exKey9 Title              :
exKey9 ICON               :Green
exKey10 Type               :0
exKey10 Value              :
exKey10 Title              :
exKey10 ICON               :Green
exKey11 Type               :0
exKey11 Value              :
exKey11 Title              :
exKey11 ICON               :Green
exKey12 Type               :0
exKey12 Value              :
exKey12 Title              :
exKey12 ICON               :Green
exKey13 Type               :0
exKey13 Value              :
exKey13 Title              :
exKey13 ICON               :Green
exKey14 Type               :0
exKey14 Value              :
exKey14 Title              :
exKey14 ICON               :Green
exKey15 Type               :0
exKey15 Value              :
exKey15 Title              :
exKey15 ICON               :Green
exKey16 Type               :0
exKey16 Value              :
exKey16 Title              :
exKey16 ICON               :Green
exKey17 Type               :0
exKey17 Value              :
exKey17 Title              :
exKey17 ICON               :Green
exKey18 Type               :0
exKey18 Value              :
exKey18 Title              :
exKey18 ICON               :Green
exKey19 Type               :0
exKey19 Value              :
exKey19 Title              :
exKey19 ICON               :Green
exKey20 Type               :0
exKey20 Value              :
exKey20 Title              :
exKey20 ICON               :Green
--Extern Console3--:
exKey1 Type               :0
exKey1 Value              :
exKey1 Title              :
exKey1 ICON               :Green
exKey2 Type               :0
exKey2 Value              :
exKey2 Title              :
exKey2 ICON               :Green
exKey3 Type               :0
exKey3 Value              :
exKey3 Title              :
exKey3 ICON               :Green
exKey4 Type               :0
exKey4 Value              :
exKey4 Title              :
exKey4 ICON               :Green
exKey5 Type               :0
exKey5 Value              :
exKey5 Title              :
exKey5 ICON               :Green
exKey6 Type               :0
exKey6 Value              :
exKey6 Title              :
exKey6 ICON               :Green
exKey7 Type               :0
exKey7 Value              :
exKey7 Title              :
exKey7 ICON               :Green
exKey8 Type               :0
exKey8 Value              :
exKey8 Title              :
exKey8 ICON               :Green
exKey9 Type               :0
exKey9 Value              :
exKey9 Title              :
exKey9 ICON               :Green
exKey10 Type               :0
exKey10 Value              :
exKey10 Title              :
exKey10 ICON               :Green
exKey11 Type               :0
exKey11 Value              :
exKey11 Title              :
exKey11 ICON               :Green
exKey12 Type               :0
exKey12 Value              :
exKey12 Title              :
exKey12 ICON               :Green
exKey13 Type               :0
exKey13 Value              :
exKey13 Title              :
exKey13 ICON               :Green
exKey14 Type               :0
exKey14 Value              :
exKey14 Title              :
exKey14 ICON               :Green
exKey15 Type               :0
exKey15 Value              :
exKey15 Title              :
exKey15 ICON               :Green
exKey16 Type               :0
exKey16 Value              :
exKey16 Title              :
exKey16 ICON               :Green
exKey17 Type               :0
exKey17 Value              :
exKey17 Title              :
exKey17 ICON               :Green
exKey18 Type               :0
exKey18 Value              :
exKey18 Title              :
exKey18 ICON               :Green
exKey19 Type               :0
exKey19 Value              :
exKey19 Title              :
exKey19 ICON               :Green
exKey20 Type               :0
exKey20 Value              :
exKey20 Title              :
exKey20 ICON               :Green
--Extern Console4--:
exKey1 Type               :0
exKey1 Value              :
exKey1 Title              :
exKey1 ICON               :Green
exKey2 Type               :0
exKey2 Value              :
exKey2 Title              :
exKey2 ICON               :Green
exKey3 Type               :0
exKey3 Value              :
exKey3 Title              :
exKey3 ICON               :Green
exKey4 Type               :0
exKey4 Value              :
exKey4 Title              :
exKey4 ICON               :Green
exKey5 Type               :0
exKey5 Value              :
exKey5 Title              :
exKey5 ICON               :Green
exKey6 Type               :0
exKey6 Value              :
exKey6 Title              :
exKey6 ICON               :Green
exKey7 Type               :0
exKey7 Value              :
exKey7 Title              :
exKey7 ICON               :Green
exKey8 Type               :0
exKey8 Value              :
exKey8 Title              :
exKey8 ICON               :Green
exKey9 Type               :0
exKey9 Value              :
exKey9 Title              :
exKey9 ICON               :Green
exKey10 Type               :0
exKey10 Value              :
exKey10 Title              :
exKey10 ICON               :Green
exKey11 Type               :0
exKey11 Value              :
exKey11 Title              :
exKey11 ICON               :Green
exKey12 Type               :0
exKey12 Value              :
exKey12 Title              :
exKey12 ICON               :Green
exKey13 Type               :0
exKey13 Value              :
exKey13 Title              :
exKey13 ICON               :Green
exKey14 Type               :0
exKey14 Value              :
exKey14 Title              :
exKey14 ICON               :Green
exKey15 Type               :0
exKey15 Value              :
exKey15 Title              :
exKey15 ICON               :Green
exKey16 Type               :0
exKey16 Value              :
exKey16 Title              :
exKey16 ICON               :Green
exKey17 Type               :0
exKey17 Value              :
exKey17 Title              :
exKey17 ICON               :Green
exKey18 Type               :0
exKey18 Value              :
exKey18 Title              :
exKey18 ICON               :Green
exKey19 Type               :0
exKey19 Value              :
exKey19 Title              :
exKey19 ICON               :Green
exKey20 Type               :0
exKey20 Value              :
exKey20 Title              :
exKey20 ICON               :Green
--Extern Console5--:
exKey1 Type               :0
exKey1 Value              :
exKey1 Title              :
exKey1 ICON               :Green
exKey2 Type               :0
exKey2 Value              :
exKey2 Title              :
exKey2 ICON               :Green
exKey3 Type               :0
exKey3 Value              :
exKey3 Title              :
exKey3 ICON               :Green
exKey4 Type               :0
exKey4 Value              :
exKey4 Title              :
exKey4 ICON               :Green
exKey5 Type               :0
exKey5 Value              :
exKey5 Title              :
exKey5 ICON               :Green
exKey6 Type               :0
exKey6 Value              :
exKey6 Title              :
exKey6 ICON               :Green
exKey7 Type               :0
exKey7 Value              :
exKey7 Title              :
exKey7 ICON               :Green
exKey8 Type               :0
exKey8 Value              :
exKey8 Title              :
exKey8 ICON               :Green
exKey9 Type               :0
exKey9 Value              :
exKey9 Title              :
exKey9 ICON               :Green
exKey10 Type               :0
exKey10 Value              :
exKey10 Title              :
exKey10 ICON               :Green
exKey11 Type               :0
exKey11 Value              :
exKey11 Title              :
exKey11 ICON               :Green
exKey12 Type               :0
exKey12 Value              :
exKey12 Title              :
exKey12 ICON               :Green
exKey13 Type               :0
exKey13 Value              :
exKey13 Title              :
exKey13 ICON               :Green
exKey14 Type               :0
exKey14 Value              :
exKey14 Title              :
exKey14 ICON               :Green
exKey15 Type               :0
exKey15 Value              :
exKey15 Title              :
exKey15 ICON               :Green
exKey16 Type               :0
exKey16 Value              :
exKey16 Title              :
exKey16 ICON               :Green
exKey17 Type               :0
exKey17 Value              :
exKey17 Title              :
exKey17 ICON               :Green
exKey18 Type               :0
exKey18 Value              :
exKey18 Title              :
exKey18 ICON               :Green
exKey19 Type               :0
exKey19 Value              :
exKey19 Title              :
exKey19 ICON               :Green
exKey20 Type               :0
exKey20 Value              :
exKey20 Title              :
exKey20 ICON               :Green

<MMI CONFIG MODULE>
Web Server Type    :0
Web Port           :80
Https Web Port     :443
Remote Control     :1
Enable MMI Filter  :0
Web Authentication :0
Telnet Port        :23
Telnet Prompt      :
Logon Timeout      :15
--MMI Account--    :
Account1 Name               :admin
Account1 Password           :
Account1 Level              :10
Account2 Name               :guest
Account2 Password           :
Account2 Level              :5

<LOG CONFIG MODULE>
Level              :ERROR
Style              :level,tag,datetimems
Output Device      :stdout
File Name          :platform.log
File Size          :512KB
Syslog Tag         :platform
Syslog Server      :0.0.0.0
Syslog Server Port :514

<TR069 CONFIG MODULE>
TR069 Tone         :0
ACS Server Type    :1
Enable TR069       :0
ACS URL            :0.0.0.0
ACS UserName       :admin
ACS Password       :
CPE UserName       :dps
CPE Password       :
Periodix Interval  :3600
TLS Version        :2
Area Code          :
STUN Enable        :0
STUN Server Addr   :
STUN Server Port   :3478
STUN Local Port    :30000
STUN Max Period    :30
STUN Min Period    :30

<SIP Hotspot MODULE>
Enable Hotspot     :0
Mode               :1
Version            :1
Listen Type        :0
Listen IP          :224.0.2.0
Listen Port        :16360
Own Name           :SIP Hotspot
Ring Mode          :0
Group Call Mode    :0
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
HS7 Enable             :1
HS7 Ext Prefix         :
HS8 Enable             :1
HS8 Ext Prefix         :
HS9 Enable             :1
HS9 Ext Prefix         :
HS10 Enable             :1
HS10 Ext Prefix         :
HS11 Enable             :1
HS11 Ext Prefix         :
HS12 Enable             :1
HS12 Ext Prefix         :
HS13 Enable             :1
HS13 Ext Prefix         :
HS14 Enable             :1
HS14 Ext Prefix         :
HS15 Enable             :1
HS15 Ext Prefix         :
HS16 Enable             :1
HS16 Ext Prefix         :
HS17 Enable             :1
HS17 Ext Prefix         :
HS18 Enable             :1
HS18 Ext Prefix         :
HS19 Enable             :1
HS19 Ext Prefix         :
HS20 Enable             :1
HS20 Ext Prefix         :

<VPN CONFIG MODULE>
VPN mode           :-1
Enable VPN         :0
Enable Nat         :0
Openvpn mode       :0
VPN Connect Timeout:60
Openvpn Enable User Auth:0
Openvpn User Name  :
Openvpn Password   :
L2TP Server Address:0.0.0.0
L2TP User Name     :
L2TP Password      :
L2TP Negotiate DNS :1
PPTP Server Address:0.0.0.0
PPTP User Name     :
PPTP Password      :
SSTP Server Address:0.0.0.0
SSTP User Name     :
SSTP Password      :

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
Check FailTimes    :1
Flash Server IP    :
Flash File Name    :
Flash Protocol     :2
Flash Mode         :0
Flash Interval     :1
update PB Interval :720
AP Config Priority :0
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
DHCP Option ACS    :0

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
CDP Enable         :1
CDP Refresh Time   :60
DHCP Option Vlan   :132
DHCP Vlan Data Type:0

<DOT1X CONFIG MODULE>
Xsup Mode          :0
Xsup User          :admin
Xsup Password      :
--SSL Mode--       :
Permission CTF     :0
Common Name        :0
CTF mode           :0
Device Cert Mode   :0

<RTSP CONFIG MODULE>
Rtsp Client Work Mode:0

<APP CONFIG MODULE>
Watch Dog Enabled  :1
Enable In Access   :0
Enable Out Access   :0

<RECORD CONFIG MODULE>
Enabled            :1
Voice Codec        :G729
Record Type        :0
File Size Limit    :0
Server Addr        :0.0.0.0
Server Port        :10000
Cover Older Recordings :0
Enable Auto Record :0

<UI DEFINED CONFIG MODULE>
Bluetooth Enabled:0
Bluetooth Adapter Name:Fanvil X7C-V2
Bluetooth Ring Mode:1
Display Language:en;cn;tc;ru;it;fr;de;he;es;cat;eus;gal;tr;hr;slo;cz;nl;ko;ua;pt;pl;ar;jp;kr;
Current material version:0x00000000
SBC Provision Url:

<UI MAINTAIN CONFIG MODULE>
Timeout To Screensaver :7200
User Change Background :0
User Change Sub Background :
EHS Headset type :0
Missed Call Popup      :1
MWI Popup              :1
Device Connect Popup   :1
SMS Popup              :1
Other Popup            :1
Enable Port Mirror     :0
Enable Display To Info:0
Auto Close Led         :0
Idle Time Font Color   :0xffffff
Common Title Font Color:0xffffff
Softkey Font Color     :0xffffff
Menu List Font Color   :0x262626
Scroll Bar Color       :0x5a9dba
Warn Theme Color       :0xc4012f
Inform Theme Color     :0x007bb0
Funkey List Font Color :0xffffff
Talking Font Color     :0xffffff
Display Logo on Screensaver :1
Display Time on Screensaver :1
Display Date on Screensaver :1
Display SIP on Screensaver :1
Display Provision prompt :0
Power Saving           :1
Timeout To Power Saving:14400
Sidekey Label Length   :0

<AP DEFINED MODULE>
AP Enable:0
AP Secure Mode:1
AP SSID:X7C-V2-0C-38-3E-57-7F-B4
AP Password:
AP Max Client:8
<<END OF FILE>>`;
