import { config } from "@/helpers/config";

const REQ_API_URL = config.api.baseUrl;

export const chatService = (payload) => {
	return fetch(`${REQ_API_URL}/ask`, {
		method: "POST",
		body: JSON.stringify(payload),
		headers: {
			"Content-Type": "application/json",
		},
	});
};