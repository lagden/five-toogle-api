import {RaspiIO} from 'raspi-io'
import five from 'johnny-five'
import ee from './ee.js'

const board = new five.Board({
	io: new RaspiIO(),
})

let relay

board.on('ready', () => {
	relay = new five.Relay({
		pin: 17,
	})
})


function toggle(v) {
	if (relay === undefined) {
		return
	}

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
