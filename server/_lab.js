import {RaspiIO} from 'raspi-io'
import five from 'johnny-five'

const board = new five.Board({
	io: new RaspiIO(),
})

board.on('ready', function() {
	const relay = new five.Relay({
		pin: 11,
		type: 'NC',
	})

	this.repl.inject({
		relay,
	})
})
