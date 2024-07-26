import { getAuthHeader, getAuthHeaderClient } from "@/helpers/auth";

const REQ_API_URL = "http://localhost:5008"

export const getAllChatHistory = async () => {
    return fetch(`${REQ_API_URL}/user/user123/sessions`, {
        method: "GET",
		headers: await getAuthHeader(),
    });
};

export const getChatHistoryById = async (sessionId) => {
    return fetch(`${REQ_API_URL}/user/user123/session/${sessionId}`, {
        method: "GET",
		headers: { "Content-Type": "application/json" },
    });
};