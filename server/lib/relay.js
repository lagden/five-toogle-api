import five from 'johnny-five'
import ee from './ee.js'

const relay = new five.Relay(10)

function toggle(v) {
	// Open the circuit.
	if (v === false) {
		relay.open()
		console.log('relay.isOn - open', relay.isOn)
	}

	// Open the circuit.
	if (v === false) {
		relay.close()
		console.log('relay.isOn - close', relay.isOn)
	}
}

ee.on('relay.toggle', toggle)
