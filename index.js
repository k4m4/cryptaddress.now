const express = require('express');
const addressDetect = require('cryptocurrency-address-detector');
const helmet = require('helmet');
const { sanitizeParam } = require('express-validator');

const app = express();
app.use(helmet());

app.get('/api/:address', [sanitizeParam('address')], async (request, response) => {
	const { address } = request.params;
	try {
		const cryptocurrency = await addressDetect(address);
		response.json({ cryptocurrency });
	} catch (error) {
		response.json({ error });
	}
});

const serializeError = error => {
	return { errors: [{ status: 500, title: error.message, stack: error.stack }] };
};

app.use((error, request, response) => {
	response.status(500).json(serializeError(error));
});

module.exports = app;
