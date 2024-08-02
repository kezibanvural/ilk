import { parseJwt } from "@/helpers/auth";
import { getSession } from "next-auth/react";

const REQ_API_URL = process.env.NEXT_PUBLIC_BASE_URL

export const getAllChatHistory = async (user_id) => {
    return fetch(`${REQ_API_URL}/user/${user_id}/sessions`, {
        method: "GET",
		headers: { "Content-Type": "application/json" },
    });
};

export const getChatHistoryById = async (sessionId) => {
    return fetch(`${REQ_API_URL}/user/user123/session/${sessionId}`, {
        method: "GET",
		headers: { "Content-Type": "application/json" },
    });
};