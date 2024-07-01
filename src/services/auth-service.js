
const API_URL = "http://localhost:8000";

// TODO 
export const login = (payload) => {
	return fetch(`${API_URL}/user/login`, {
		method: "post",
		body: JSON.stringify(payload),
		headers: {
			"Content-Type": "application/json",
		},
	});
};