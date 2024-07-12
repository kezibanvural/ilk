
const API_URL = process.env.NEXT_PUBLIC_BASE_URL;

export const login = (payload) => {
	console.log(payload);
	return fetch(`${API_URL}/user/login`, {
		method: "post",
		body: JSON.stringify(payload),
		headers: {
			"Content-Type": "application/json",
		},
	});
};

export const refreshTokenService = (payload) => {
	console.log(payload);
	return fetch(`${API_URL}/api/token/refresh`, {
		method: "post",
		body: JSON.stringify(payload),
		headers: {
			"Content-Type": "application/json",
		},
	});
};