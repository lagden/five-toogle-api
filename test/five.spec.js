import test from 'ava'
import got from 'got'
import server from './helper/server.js'

test.before(async t => {
	t.context.baseUrl = await server()
})

test('app', async t => {
	const response = await got.get(`${t.context.baseUrl}/`, {
		throwHttpErrors: false,
	})

	t.is(response.statusCode, 200)
	t.snapshot(response.body)
})

test('cmd on', async t => {
	const response = await got.get(`${t.context.baseUrl}/cmd/on`, {
		throwHttpErrors: false,
		responseType: 'json',
	})

	t.is(response.statusCode, 200)
	t.snapshot(response.body)
})

test('cmd off', async t => {
	const response = await got.get(`${t.context.baseUrl}/cmd/on`, {
		throwHttpErrors: false,
		responseType: 'json',
	})

	t.is(response.statusCode, 200)
	t.snapshot(response.body)
})
