import { auth } from "@/auth";
import { config } from "./config";
import { getSession } from "next-auth/react";

export const getAuthHeader = async () => {
    const session = await auth();
    const token = session?.token;

    let authHeader = { "Content-Type": "application/json" };
    if (token) {
        authHeader = { Authorization:` Bearer ${token}`, ...authHeader };
    }
    return authHeader;
};

export const getAuthHeaderClient = async () => {
    const session = await getSession();
    const token = session?.token;

    let authHeader = { "Content-Type": "application/json" };
    if (token) {
        authHeader = { Authorization:` Bearer ${token}`, ...authHeader };
    }

    return authHeader;
};

export const isUserAuthorized = (role, url) => {
    const menu = config.userRightsOnRoutes.find((item) =>
        item.urlRegex.test(url)
    );

    if (!menu) return false;
    return menu.rights.includes(role);
};

export const parseJwt = (token) => {
    return JSON.parse(atob(token.split(".")[1]))
}


export const getIsTokenValid = (token) => {
    if(!token) return false;

    const jwtExpireTimeStamp = parseJwt(token).exp;

    const jwtExpireDateTime = new Date(jwtExpireTimeStamp * 1000);

    if(jwtExpireDateTime <= new Date()){
        console.log('API token was expired')
        return false
    }

    return true;

    
}