import NextAuth from "next-auth"
import Credentials from "next-auth/providers/credentials";
import { login } from "./services/auth-service";
import { getIsTokenValid, isUserAuthorized } from "./helpers/auth";

const config = {
    providers:[
        Credentials({
            async authorize(credentials){
                const res = await login(credentials);
                const data = await res.json();
                console.log("message",data.message);
                if(!res.ok) return null
                return data ?? null;
            }
        })
    ],
    callbacks: {
		authorized({ auth, request: { nextUrl } }) {
			const isSignedIn = !!auth?.user?.role;
			const isOnSignInPage = nextUrl.pathname.includes("/sign-in");
			const isOnChatPage = nextUrl.pathname.includes("/chat");
			const isTokenValid = getIsTokenValid(auth?.token);
			// console.log("auth",auth);
            
			if (isSignedIn && isTokenValid) {
                if (isOnChatPage) {
                    const isAuth = isUserAuthorized(
                        auth.user.role[0],
						nextUrl.pathname
                        );
                        
					if(isAuth) return true;
					if(auth.user.role.toLowerCase() === "student"){
						return Response.redirect(new URL("/unauthorized", nextUrl));
					}


				} else if (isOnSignInPage) {
					if(auth.user.role[0].toLowerCase() === "student"){
						return Response.redirect(new URL("/", nextUrl));
					}else{

						return Response.redirect(new URL("/sign-in", nextUrl));
					}
				}
			} else if (isOnChatPage) {
				return false;
			}
			return true;
		},

		async jwt({ token, user }) {
			return { ...user, ...token };
		},
		async session({ session, token }) {
			const isTokenValid = getIsTokenValid(token.object.accessToken);
			if(!isTokenValid) return null;
			session.token = token.object.accessToken;
            const payload = {...token.object}
            delete payload.accessToken
			session.user = payload
			return session;
		},
	},
    pages: {
        signIn : "/login",
    }
}


export const { handlers, auth, signIn, signOut } = NextAuth(config);