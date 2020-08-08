const addressDetect = require('cryptocurrency-address-detector');

export default async (request, response) => {
	const {
		query: { address }
	} = request;
	try {
		const cryptocurrency = await addressDetect(address);
		response.status(200).json({ cryptocurrency });
	} catch (error) {
		response.status(500).json({ error });
	}
};
