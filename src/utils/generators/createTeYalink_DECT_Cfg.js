export default function createTeYalink_DECT_Cfg(
  selectedPhone,
  mac,
  portConfigs
) {
  let config = portConfigs[0];

  //config={brojTelefona:"51330181",sifra:"123xxx"}

  let sifra = config.sifra;

  //"330181"
  let sipDisplay = `0${config.brojTelefona}`;

  //+38751330181@mtel.ba"
  let sipAuthName = `+387${config.brojTelefona}@mtel.ba`;

  //Lokal-181
  let sipUserName = `+387${config.brojTelefona}`;

  let xmlContent = `#!version:1.0.0.1

### This file is the exported MAC-all.cfg.

### For security, the following parameters with password haven't been display in this file.

static.security.user_password = admin:admin.1
account.1.password = ${sifra}
account.1.auth_name = ${sipAuthName}
account.1.codec.pcmu.priority = 1
account.1.codec.pcma.priority = 2
account.1.codec.g729.enable = 0
account.1.codec.g729.priority = 0
account.1.codec.g722.enable = 0
account.1.codec.g722.priority = 0
#account.1.conf_type = 1
account.1.display_name = ${sipDisplay}
account.1.enable = 1
account.1.label = test
account.1.nat.udp_update_enable = 2
account.1.nat.udp_update_time = 60
account.1.outbound_proxy.1.address = 10.252.64.110
account.1.outbound_proxy_enable = 1
account.1.session_timer.enable = 1
account.1.sip_server.1.address = mtel.ba
account.1.sip_server.1.expires = 60
account.1.user_name = ${sipUserName}
custom.handset.date_format = 1
local_time.dst_time_type = 1
local_time.end_time = 10/5/7/2
local_time.ntp_server1 = 10.252.64.109
local_time.ntp_server2 = %EMPTY%
local_time.start_time = 3/5/7/2
local_time.summer_time = 1
local_time.time_zone = +1
local_time.time_zone_name = None
voice.tone.busy = 425+0/500,0/500
voice.tone.callwaiting = 425+0/300,0/800
voice.tone.dial = 425+0/200,0/300,425+0/700,0/800
voice.tone.ring = 425+0/1000,0/4000
###  Static Configuration  ###
static.auto_provision.server.url = http://10.252.64.109/Yealink`;

  return `${xmlContent}`;
}
