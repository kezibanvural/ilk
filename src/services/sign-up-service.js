import { config } from "@/helpers/config";

const API_URL = config.api.baseUrl;

export const register = (payload) => {
    console.log("payload",payload);
	return fetch(`${API_URL}/user/register/`, {
		method: "POST",
		body: JSON.stringify(payload),
		headers: {
			"Content-Type": "application/json",
		},
	});
};
