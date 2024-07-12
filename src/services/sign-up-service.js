import { config } from "@/helpers/config";

const API_URL = process.env.NEXT_PUBLIC_BASE_URL;

export const register = (payload) => {
	console.log("API_URL",API_URL);
	return fetch(`${API_URL}/user/register`, {
		method: "POST",
		body: JSON.stringify(payload),
		headers: {
			"Content-Type": "application/json",
		},
	});
};
