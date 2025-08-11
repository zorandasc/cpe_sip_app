export default function createTeYalink_T43U_Cfg(
  selectedPhone,
  mac,
  portConfigs
) {
  let config = portConfigs[0];

  //config={brojTelefona:"51330181",sifra:"123xxx"}

  let sifra = config.sifra;

  //+38751330181@mtel.ba"
  let sipAuthName = `+387${config.brojTelefona}@mtel.ba`;

  //"330181"
  let sipDisplayName = `+387${config.brojTelefona}`;

  //Lokal-181
  let sipLabel = `${config.brojTelefona.substring(2)}`;

  let sipUserName = sipAuthName;

  let xmlContent = `#!version:1.0.0.1

### This file is the exported MAC-all.cfg.

### For security, the following parameters with password haven't been display in this file.
account.1.password = ${sifra}
### account.2.password = tNl!UmQT
static.security.user_password = admin:acutnip*1
account.1.auth_name = ${sipAuthName}
### account.1.blf.blf_list_uri = blf_051490004@mtel.ba
account.1.blf_list_call_parked_code = *68
account.1.blf_list_code = *97
account.1.blf_list_retrieve_call_parked_code = *88
account.1.codec.pcma.priority = 1
account.1.codec.g729.enable = 0
account.1.codec.g722.enable = 0
account.1.dialoginfo_callpickup = 1
account.1.direct_pickup_code = *97
account.1.display_mwi.enable = 0
account.1.display_name = ${sipDisplayName}
account.1.enable = 1
account.1.label = ${sipLabel}
account.1.nat.udp_update_enable = 2
account.1.nat.udp_update_time = 60
account.1.outbound_proxy.1.address = 10.252.64.110
account.1.outbound_proxy_enable = 1
account.1.session_timer.enable = 1
account.1.sip_server.1.address = mtel.ba
account.1.user_name = ${sipUserName}
### account.2.auth_name = +38751249386@mtel.ba
account.2.codec.pcma.priority = 1
account.2.codec.g729.enable = 0
account.2.codec.g722.enable = 0
### account.2.display_name = +38751249386
account.2.dtmf.type = 3
account.2.enable = 1
### account.2.label = 249386
account.2.outbound_proxy.1.address = 10.252.64.110
account.2.outbound_proxy_enable = 1
account.2.sip_server.1.address = mtel.ba
### account.2.user_name = +38751249386@mtel.ba
call_waiting.off_code = #43
call_waiting.on_code = *43
default_input_method.advanced_setting_password = 123
expansion_module.backgrounds = Resource:03-exp.jpg
features.call_park.enable = 1
features.direct_ip_call_enable = 0
features.parked_call_monitor.blf_visual_enable = 1
features.pickup.direct_pickup_enable = 1
features.power_saving.enable = 0
forward.always.off_code = *73
forward.always.on_code = *72
forward.busy.off_code = *91
forward.busy.on_code = *90
forward.no_answer.off_code = *93
forward.no_answer.on_code = *92
local_time.dhcp_time = 1
local_time.dst_time_type = 1
local_time.end_time = 10/5/7/2:0,-1d
local_time.ntp_server1 = 10.252.64.109
local_time.start_time = 3/5/7/2:0,-1d
local_time.summer_time = 0
local_time.time_zone = +1
local_time.time_zone_name = Belgrade
phone_setting.active_backlight_level = 3
phone_setting.backlight_time = 0
phone_setting.contrast = 7
phone_setting.custom_forward_type = 4
screensaver.wait_time = 3600
voice.handfree.spk_vol = 5
voice.ring_vol = 3
voice.tone.busy = 425/500,0/500
voice.tone.callwaiting = 425/300,0/800
voice.tone.dial = 425/200,0/300,425/700,0/800
voice.tone.dialrecall = 480+620/250,0/250
voice.tone.message = 350+440/100,0/100
voice.tone.ring = 425/1000,0/4000
voice.tone.secondary_dial = 350+440
`;

  return `${xmlContent}`;
}
