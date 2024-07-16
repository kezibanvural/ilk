import { config } from "@/helpers/config";

const REQ_API_URL = config.api.baseUrl;

export const login = (payload) => {
	console.log(payload);
	return fetch(`${REQ_API_URL}/user/login`, {
		method: "post",
		body: JSON.stringify(payload),
		headers: {
			"Content-Type": "application/json",
		},
	});
};

export const refreshTokenService = (payload) => {
	console.log(payload);
	return fetch(`${REQ_API_URL}/api/token/refresh`, {
		method: "post",
		body: JSON.stringify(payload),
		headers: {
			"Content-Type": "application/json",
		},
	});
};