export default function createPolycomXml(portConfigs) {
  let config = portConfigs[0];

  //config={brojTelefona:"51330181",sifra:"123xxx"}

  let sifra = config.sifra;

  //"330181"
  let sipDisplay = `${config.brojTelefona.substring(2)}`;

  //+38751330181@mtel.ba"
  let sipAuthenicateId = `+387${config.brojTelefona}@mtel.ba`;

  //Lokal-181
  let sipLabel = `Lokal-${config.brojTelefona.substring(5)}`;

  let xmlContent = `<reg 
    reg.1.displayName='${sipDisplay}'
    reg.1.address='${sipAuthenicateId}'
    reg.1.label='${sipLabel}'
    reg.1.type="private" 
    reg.1.lcs="0" 
    reg.1.csta="" 
    reg.1.thirdPartyName="" 
    reg.1.auth.userId='${sipAuthenicateId}' 
    reg.1.auth.password='${sifra}'
    reg.1.auth.optimizedInFailover="" 
    reg.1.musicOnHold.uri="" 
    reg.1.server.1.address="mtel.ba" 
    reg.1.server.1.port="5060" 
    reg.1.server.1.transport="UDPOnly" 
    reg.1.server.1.expires="3600" 
    reg.1.server.1.expires.overlap="" 
    reg.1.server.1.register="1" 
    reg.1.server.1.retryTimeOut="" 
    reg.1.server.1.retryMaxCount="" 
    reg.1.server.1.expires.lineSeize="" 
    reg.1.server.1.lcs="" 
    reg.1.server.2.address="" 
    reg.1.server.2.port="" 
    reg.1.server.2.transport="" 
    reg.1.server.2.expires="" 
    reg.1.server.2.expires.overlap="" 
    reg.1.server.2.register="" 
    reg.1.server.2.retryTimeOut="" 
    reg.1.server.2.retryMaxCount="" 
    reg.1.server.2.expires.lineSeize="" 
    reg.1.server.2.lcs="" 
    reg.1.outboundProxy.address="10.252.64.110" 
    reg.1.outboundProxy.port="5060" 
    reg.1.outboundProxy.transport="UDPOnly" 
    reg.1.acd-login-logout="0" 
    reg.1.acd-agent-available="0" 
    reg.1.proxyRequire="" 
    reg.1.ringType="2" 
    reg.1.lineKeys="" 
    reg.1.callsPerLineKey="2" 
    reg.1.bargeInEnabled="" 
    reg.1.serverFeatureControl.dnd="" 
    reg.1.serverFeatureControl.cf="" 
    reg.1.strictLineSeize="" 
    reg.1.tcpFastFailover="" 
    reg.2.displayName="" 
    reg.2.address="" 
    reg.2.label="" 
    reg.2.type="" 
    reg.2.lcs="" 
    reg.2.csta="" 
    reg.2.thirdPartyName="" 
    reg.2.auth.userId="" 
    reg.2.auth.password="" 
    reg.2.auth.optimizedInFailover="" 
    reg.2.musicOnHold.uri="" 
    reg.2.server.1.address="" 
    reg.2.server.1.port="" 
    reg.2.server.1.transport="" 
    reg.2.server.1.expires="" 
    reg.2.server.1.expires.overlap="" 
    reg.2.server.1.register="" 
    reg.2.server.1.retryTimeOut="" 
    reg.2.server.1.retryMaxCount="" 
    reg.2.server.1.expires.lineSeize="" 
    reg.2.server.1.lcs="" 
    reg.2.server.2.address="" 
    reg.2.server.2.port="" 
    reg.2.server.2.transport="" 
    reg.2.server.2.expires="" 
    reg.2.server.2.expires.overlap="" 
    reg.2.server.2.register="" 
    reg.2.server.2.retryTimeOut="" 
    reg.2.server.2.retryMaxCount="" 
    reg.2.server.2.expires.lineSeize="" 
    reg.2.server.2.lcs="" 
    reg.2.outboundProxy.address="" 
    reg.2.outboundProxy.port="" 
    reg.2.outboundProxy.transport="" 
    reg.2.acd-login-logout="" 
    reg.2.acd-agent-available="" 
    reg.2.proxyRequire="" 
    reg.2.ringType="" 
    reg.2.lineKeys="" 
    reg.2.callsPerLineKey="" 
    reg.2.bargeInEnabled="" 
    reg.2.serverFeatureControl.dnd="" 
    reg.2.serverFeatureControl.cf="" 
    reg.2.strictLineSeize="" 
    reg.2.tcpFastFailover="" />`;

  return `${HEADER}${xmlContent}${BASE_TEMPLATE}`;
}

const HEADER = `<?xml version="1.0" encoding="utf-8" standalone="yes"?>
<!--Telekom Srpske-->
<!-- $RCSfile: phone1.cfg,v $  $Revision: 1.120 $ -->
<phone1>`;

const BASE_TEMPLATE = `<call>
    <donotdisturb call.donotdisturb.perReg="0" />
    <autoOffHook call.autoOffHook.1.enabled="0" call.autoOffHook.1.contact="" call.autoOffHook.2.enabled="0" call.autoOffHook.2.contact="" call.autoOffHook.3.enabled="0" call.autoOffHook.3.contact="" call.autoOffHook.4.enabled="0" call.autoOffHook.4.contact="" call.autoOffHook.5.enabled="0" call.autoOffHook.5.contact="" call.autoOffHook.6.enabled="0" call.autoOffHook.6.contact="" />
    <missedCallTracking call.missedCallTracking.1.enabled="1" call.missedCallTracking.2.enabled="1" call.missedCallTracking.3.enabled="1" call.missedCallTracking.4.enabled="1" call.missedCallTracking.5.enabled="1" call.missedCallTracking.6.enabled="1" />
    <serverMissedCall call.serverMissedCall.1.enabled="0" call.serverMissedCall.2.enabled="0" call.serverMissedCall.3.enabled="0" call.serverMissedCall.4.enabled="0" call.serverMissedCall.5.enabled="0" call.serverMissedCall.6.enabled="0" /> 
    <callWaiting call.callWaiting.ring="beep" />
  </call>
  <divert divert.1.contact="" divert.1.autoOnSpecificCaller="1" divert.1.sharedDisabled="1" divert.2.contact="" divert.2.autoOnSpecificCaller="1" divert.2.sharedDisabled="1" divert.3.contact="" divert.3.autoOnSpecificCaller="1" divert.3.sharedDisabled="1" divert.4.contact="" divert.4.autoOnSpecificCaller="1" divert.4.sharedDisabled="1" divert.5.contact="" divert.5.autoOnSpecificCaller="1" divert.5.sharedDisabled="1" divert.6.contact="" divert.6.autoOnSpecificCaller="1" divert.6.sharedDisabled="1">
    <fwd divert.fwd.1.enabled="1" divert.fwd.2.enabled="1" divert.fwd.3.enabled="1" divert.fwd.4.enabled="1" divert.fwd.5.enabled="1" divert.fwd.6.enabled="1" />
    <busy divert.busy.1.enabled="1" divert.busy.1.contact="" divert.busy.2.enabled="1" divert.busy.2.contact="" divert.busy.3.enabled="1" divert.busy.3.contact="" divert.busy.4.enabled="1" divert.busy.4.contact="" divert.busy.5.enabled="1" divert.busy.5.contact="" divert.busy.6.enabled="1" divert.busy.6.contact="" />
    <noanswer divert.noanswer.1.enabled="1" divert.noanswer.1.timeout="55" divert.noanswer.1.contact="" divert.noanswer.2.enabled="1" divert.noanswer.2.timeout="55" divert.noanswer.2.contact="" divert.noanswer.3.enabled="1" divert.noanswer.3.timeout="55" divert.noanswer.3.contact="" divert.noanswer.4.enabled="1" divert.noanswer.4.timeout="55" divert.noanswer.4.contact="" divert.noanswer.5.enabled="1" divert.noanswer.5.timeout="55" divert.noanswer.5.contact="" divert.noanswer.6.enabled="1" divert.noanswer.6.timeout="55" divert.noanswer.6.contact="" />
    <dnd divert.dnd.1.enabled="0" divert.dnd.1.contact="" divert.dnd.2.enabled="0" divert.dnd.2.contact="" divert.dnd.3.enabled="0" divert.dnd.3.contact="" divert.dnd.4.enabled="0" divert.dnd.4.contact="" divert.dnd.5.enabled="0" divert.dnd.5.contact="" divert.dnd.6.enabled="0" divert.dnd.6.contact="" />
  </divert>
  <dialplan dialplan.1.impossibleMatchHandling="0" dialplan.1.removeEndOfDial="1" dialplan.1.applyToUserSend="1" dialplan.1.applyToUserDial="1" dialplan.1.applyToCallListDial="0" dialplan.1.applyToDirectoryDial="0" dialplan.1.applyToTelUriDial="1" dialplan.2.impossibleMatchHandling="0" dialplan.2.removeEndOfDial="1" dialplan.2.applyToUserSend="1" dialplan.2.applyToUserDial="1" dialplan.2.applyToCallListDial="0" dialplan.2.applyToDirectoryDial="0" dialplan.2.applyToTelUriDial="1" dialplan.3.impossibleMatchHandling="0" dialplan.3.removeEndOfDial="1" dialplan.3.applyToUserSend="1" dialplan.3.applyToUserDial="1" dialplan.3.applyToCallListDial="0" dialplan.3.applyToDirectoryDial="0" dialplan.3.applyToTelUriDial="1" dialplan.4.impossibleMatchHandling="0" dialplan.4.removeEndOfDial="1" dialplan.4.applyToUserSend="1" dialplan.4.applyToUserDial="1" dialplan.4.applyToCallListDial="0" dialplan.4.applyToDirectoryDial="0" dialplan.4.applyToTelUriDial="1" dialplan.5.impossibleMatchHandling="0" dialplan.5.removeEndOfDial="1" dialplan.5.applyToUserSend="1" dialplan.5.applyToUserDial="1" dialplan.5.applyToCallListDial="0" dialplan.5.applyToDirectoryDial="0" dialplan.5.applyToTelUriDial="1" dialplan.6.impossibleMatchHandling="0" dialplan.6.removeEndOfDial="1" dialplan.6.applyToUserSend="1" dialplan.6.applyToUserDial="1" dialplan.6.applyToCallListDial="0" dialplan.6.applyToDirectoryDial="0" dialplan.6.applyToTelUriDial="1">
    <digitmap dialplan.1.digitmap="" dialplan.1.digitmap.timeOut="" dialplan.2.digitmap="" dialplan.2.digitmap.timeOut="" dialplan.3.digitmap="" dialplan.3.digitmap.timeOut="" dialplan.4.digitmap="" dialplan.4.digitmap.timeOut="" dialplan.5.digitmap="" dialplan.5.digitmap.timeOut="" dialplan.6.digitmap="" dialplan.6.digitmap.timeOut="" />
    <routing>
      <server dialplan.1.routing.server.1.address="" dialplan.1.routing.server.1.port="" dialplan.2.routing.server.1.address="" dialplan.2.routing.server.1.port="" dialplan.3.routing.server.1.address="" dialplan.3.routing.server.1.port="" dialplan.4.routing.server.1.address="" dialplan.4.routing.server.1.port="" dialplan.5.routing.server.1.address="" dialplan.5.routing.server.1.port="" dialplan.6.routing.server.1.address="" dialplan.6.routing.server.1.port="" />
      <emergency dialplan.1.routing.emergency.1.value="" dialplan.1.routing.emergency.1.server.1="" dialplan.2.routing.emergency.1.value="" dialplan.2.routing.emergency.1.server.1="" dialplan.3.routing.emergency.1.value="" dialplan.3.routing.emergency.1.server.1="" dialplan.4.routing.emergency.1.value="" dialplan.4.routing.emergency.1.server.1="" dialplan.5.routing.emergency.1.value="" dialplan.5.routing.emergency.1.server.1="" dialplan.6.routing.emergency.1.value="" dialplan.6.routing.emergency.1.server.1="" />
    </routing>
  </dialplan>
  <msg msg.bypassInstantMessage="0">
    <mwi msg.mwi.1.subscribe="" msg.mwi.1.callBackMode="registration" msg.mwi.1.callBack="" msg.mwi.2.subscribe="" msg.mwi.2.callBackMode="registration" msg.mwi.2.callBack="" msg.mwi.3.subscribe="" msg.mwi.3.callBackMode="registration" msg.mwi.3.callBack="" msg.mwi.4.subscribe="" msg.mwi.4.callBackMode="registration" msg.mwi.4.callBack="" msg.mwi.5.subscribe="" msg.mwi.5.callBackMode="registration" msg.mwi.5.callBack="" msg.mwi.6.subscribe="" msg.mwi.6.callBackMode="registration" msg.mwi.6.callBack="" />
  </msg>
  <nat nat.ip="" nat.signalPort="" nat.mediaPortStart="" nat.keepalive.interval="60" />
  <attendant attendant.uri="" attendant.reg="" attendant.ringType="1" attendant.behaviors.display.spontaneousCallAppearances.normal="" attendant.behaviors.display.spontaneousCallAppearances.automata="" attendant.behaviors.display.remoteCallerID.normal="" attendant.behaviors.display.remoteCallerID.automata="" attendant.resourceList.1.address="" attendant.resourceList.1.label="" attendant.resourceList.1.type="" attendant.resourceList.2.address="" attendant.resourceList.2.label="" attendant.resourceList.2.type="" attendant.resourceList.3.address="" attendant.resourceList.3.label="" attendant.resourceList.3.type="" attendant.resourceList.4.address="" attendant.resourceList.4.label="" attendant.resourceList.4.type="" attendant.resourceList.5.address="" attendant.resourceList.5.label="" attendant.resourceList.5.type="" attendant.resourceList.6.address="" attendant.resourceList.6.label="" attendant.resourceList.6.type="" attendant.resourceList.7.address="" attendant.resourceList.7.label="" attendant.resourceList.7.type="" attendant.resourceList.8.address="" attendant.resourceList.8.label="" attendant.resourceList.8.type="" attendant.resourceList.9.address="" attendant.resourceList.9.label="" attendant.resourceList.9.type="" attendant.resourceList.10.address="" attendant.resourceList.10.label="" attendant.resourceList.10.type="" attendant.resourceList.11.address="" attendant.resourceList.11.label="" attendant.resourceList.11.type="" attendant.resourceList.12.address="" attendant.resourceList.12.label="" attendant.resourceList.12.type="" attendant.resourceList.13.address="" attendant.resourceList.13.label="" attendant.resourceList.13.type="" attendant.resourceList.14.address="" attendant.resourceList.14.label="" attendant.resourceList.14.type="" attendant.resourceList.15.address="" attendant.resourceList.15.label="" attendant.resourceList.15.type="" attendant.resourceList.16.address="" attendant.resourceList.16.label="" attendant.resourceList.16.type="" attendant.resourceList.17.address="" attendant.resourceList.17.label="" attendant.resourceList.17.type="" attendant.resourceList.18.address="" attendant.resourceList.18.label="" attendant.resourceList.18.type="" attendant.resourceList.19.address="" attendant.resourceList.19.label="" attendant.resourceList.19.type="" attendant.resourceList.20.address="" attendant.resourceList.20.label="" attendant.resourceList.20.type="" attendant.resourceList.21.address="" attendant.resourceList.21.label="" attendant.resourceList.21.type="" attendant.resourceList.22.address="" attendant.resourceList.22.label="" attendant.resourceList.22.type="" attendant.resourceList.23.address="" attendant.resourceList.23.label="" attendant.resourceList.23.type="" attendant.resourceList.24.address="" attendant.resourceList.24.label="" attendant.resourceList.24.type="" attendant.resourceList.25.address="" attendant.resourceList.25.label="" attendant.resourceList.25.type="" attendant.resourceList.26.address="" attendant.resourceList.26.label="" attendant.resourceList.26.type="" attendant.resourceList.27.address="" attendant.resourceList.27.label="" attendant.resourceList.27.type="" attendant.resourceList.28.address="" attendant.resourceList.28.label="" attendant.resourceList.28.type="" attendant.resourceList.29.address="" attendant.resourceList.29.label="" attendant.resourceList.29.type="" attendant.resourceList.30.address="" attendant.resourceList.30.label="" attendant.resourceList.30.type="" attendant.resourceList.31.address="" attendant.resourceList.31.label="" attendant.resourceList.31.type="" attendant.resourceList.32.address="" attendant.resourceList.32.label="" attendant.resourceList.32.type="" attendant.resourceList.33.address="" attendant.resourceList.33.label="" attendant.resourceList.33.type="" attendant.resourceList.34.address="" attendant.resourceList.34.label="" attendant.resourceList.34.type="" attendant.resourceList.35.address="" attendant.resourceList.35.label="" attendant.resourceList.35.type="" attendant.resourceList.36.address="" attendant.resourceList.36.label="" attendant.resourceList.36.type="" attendant.resourceList.37.address="" attendant.resourceList.37.label="" attendant.resourceList.37.type="" attendant.resourceList.38.address="" attendant.resourceList.38.label="" attendant.resourceList.38.type="" attendant.resourceList.39.address="" attendant.resourceList.39.label="" attendant.resourceList.39.type="" attendant.resourceList.40.address="" attendant.resourceList.40.label="" attendant.resourceList.40.type="" attendant.resourceList.41.address="" attendant.resourceList.41.label="" attendant.resourceList.41.type="" attendant.resourceList.42.address="" attendant.resourceList.42.label="" attendant.resourceList.42.type="" attendant.resourceList.43.address="" attendant.resourceList.43.label="" attendant.resourceList.43.type="" attendant.resourceList.44.address="" attendant.resourceList.44.label="" attendant.resourceList.44.type="" attendant.resourceList.45.address="" attendant.resourceList.45.label="" attendant.resourceList.45.type="" attendant.resourceList.46.address="" attendant.resourceList.46.label="" attendant.resourceList.46.type="" attendant.resourceList.47.address="" attendant.resourceList.47.label="" attendant.resourceList.47.type="" />
  <roaming_buddies roaming_buddies.reg="" />
  <roaming_privacy roaming_privacy.reg="" />
  <user_preferences up.analogHeadsetOption="0" up.offHookAction.none="" up.pictureFrame.folder="" up.pictureFrame.timePerImage="" up.screenSaver.enabled="0" up.screenSaver.waitTime="" />
  <acd acd.reg="" acd.stateAtSignIn="" />
</phone1>`;
