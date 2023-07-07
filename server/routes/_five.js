import Router from '@koa/router'
import ee from '../lib/ee.js'
// import * as debug from '../lib/debug.js'

const router = new Router()

function app(ctx) {
	ctx.body = 'Rode o comando: [/cmd/on | /cmd/off]'
}

function cmd(ctx) {
	const {
		cmd,
	} = ctx.params

	ee.emit('relay.toggle', cmd === 'off')

	ctx.body = {
		data: {
			cmd,
		},
	}
}

router
	.get('/', app)
	.get('/cmd/:cmd', cmd)

export default router
