export default function create_VVX350_phone_cfg(
  selectedPhone,
  mac,
  portConfigs
) {
  let xmlContent = `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<!-- Application SIP Helford6 5.9.6.2996 30-Jan-21 15:34 -->
<!-- Created 01-09-2022 13:21 -->
<!-- Base profile Generic -->
<PHONE_CONFIG>
	<OVERRIDES
		np.normal.ringing.calls.tonePattern="ringer12"
		tone.chord.callProg.busyTone.repeat="200"
		tone.chord.callProg.callWaiting.offDur="800"
		tone.chord.callProg.callWaiting.repeat="200"
		tone.chord.callProg.callWaitingLong.repeat="20"
		tone.chord.callProg.intercom.repeat="10"
		tone.chord.callProg.precedenceCallWaiting.repeat="30"
		tone.chord.callProg.precedenceRingback.repeat="20"
		tone.chord.callProg.ringback.onDur="1000"
		tone.chord.callProg.ringback.repeat="200"
		tone.chord.callProg.stutterLong.repeat="60"
		tone.chord.callProg.stutter_3.repeat="30"
		se.pat.callProg.dialTone.inst.1.param="200"
		se.pat.callProg.dialTone.inst.3.param="700"
		se.pat.callProg.dialTone.inst.2.type="silence"
		se.pat.callProg.dialTone.inst.3.type="chord"
		se.pat.callProg.dialTone.inst.4.type="silence"
		se.pat.callProg.dialTone.inst.5.type="branch"
		se.pat.callProg.dialTone.inst.2.value="300"
		se.pat.callProg.dialTone.inst.3.value="dialTone"
		se.pat.callProg.dialTone.inst.4.value="800"
		se.pat.callProg.dialTone.inst.5.value="-4"
		tone.chord.callProg.busyTone.freq.1="425"
		tone.chord.callProg.busyTone.freq.2="0"
		tone.chord.callProg.busyTone.level.1="-20"
		tone.chord.callProg.busyTone.level.2="-20"
		tone.chord.callProg.callWaiting.freq.1="425"
		tone.chord.callProg.dialTone.freq.1="425"
		tone.chord.callProg.dialTone.freq.2="0"
		tone.chord.callProg.dialTone.level.1="-10"
		tone.chord.callProg.dialTone.level.2="-20"
		tone.chord.callProg.ringback.freq.1="425"
		tone.chord.callProg.ringback.freq.2="0"
		tone.chord.callProg.ringback.level.1="-20"
		tone.chord.callProg.ringback.level.2="-20"
		reg.1.ringType="ringer12"
	/>
</PHONE_CONFIG>`;

  return xmlContent;
}
