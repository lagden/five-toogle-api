import {RaspiIO} from 'raspi-io'
import five from 'johnny-five'
import ee from './ee.js'

const board = new five.Board({
	io: new RaspiIO(),
})

let relay

board.on('ready', () => {
	relay = new five.Relay({
		pin: 'P1-11',
		type: 'NC',
	})
})

function toggle(v) {
	if (relay === undefined) {
		return
	}

	// Open the circuit.
	if (v === true) {
		relay.open()
		console.log('relay is openned')
	}

	// Open the circuit.
	if (v === false) {
		relay.close()
		console.log('relay is closed')
	}
}

ee.on('relay.toggle', toggle)
