// import { config } from "@/helpers/config";

const REQ_API_URL = process.env.NEXT_PUBLIC_API_URL;

export const register = (payload) => {
	return fetch(`${REQ_API_URL}/user/register`, {
		method: "POST",
		body: JSON.stringify(payload),
		headers: {
			"Content-Type": "application/json",
		},
	});
};
