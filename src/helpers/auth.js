import { auth } from "@/auth";
import { config } from "./config";
import { getSession } from "next-auth/react";
import { refreshTokenService } from "@/services/auth-service";

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
    const token = session?.accessToken;

    let authHeader = { "Content-Type": "application/json" };
    if (token) {
        authHeader = { Authorization:` Bearer ${token}`, ...authHeader };
    }

    return authHeader;
};
export const getAuthHeaderById = async (session_id="") => {

    let authHeader = { "Content-Type": "application/json" };
    const session = await getSession();
    const user_id = parseJwt(session?.accessToken).user_id;

    session_id ? (
        authHeader ={
        "Content-Type": "application/json", 
        "user-id":user_id,
        "session-id":session_id
    }) : (
        authHeader = { 
            "Content-Type": "application/json", 
            "user-id":user_id 
        }
    )


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


export const getIsTokenValid = async (token) => {
    if(!token?.accessToken) return false;
    // console.log("token",token);
    const jwtExpireTimeStamp = parseJwt(token.accessToken).exp;

    const jwtExpireDateTime = new Date(jwtExpireTimeStamp * 1000);

    if(jwtExpireDateTime <= new Date()){

        const payload = {refresh:token.refreshToken}
        const res = await refreshTokenService(payload);
        const data = await res.json();

        if(data){
            console.log('Token refreshed successfully', data);
            token.accessToken = data.access
            return true;
        }

        console.log('API token was expired')
        return false
    }

    return true;

    
}