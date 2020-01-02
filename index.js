const express = require('express')
const addressDetect = require('cryptocurrency-address-detector')
const helmet = require('helmet')
const { sanitizeParam } = require('express-validator')

const app = express();
app.use(helmet());

app.get('/api/:address', [sanitizeParam('address')], async (req, res) => {
    const address = req.params.address
    await addressDetect(address)
		.then(cryptocurrency => res.json({ cryptocurrency: cryptocurrency }))
		.catch(error => res.json({ error: error}))
})

const serializeError = (err) => new Object({ errors: [{ status: 500, title: err.message, stack: err.stack }] })
app.use((err, req, res, next) => {
	res.status(500).json(serializeError(err))
})

module.exports = app