import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { login, refreshTokenService } from "./services/auth-service";
import { getIsTokenValid, isUserAuthorized } from "./helpers/auth";

const config = {
    site: "https://lkai.app" || "http://localhost:3000",
    providers: [
        Credentials({
            async authorize(credentials) {
                const res = await login(credentials);
                const data = await res.json();
                // console.log("data", data);
                if (!res.ok) return null;
				const payload = {
					user: { ...data },
					accessToken: data.access,
					refreshToken:data.refresh
				};
				delete payload.user.refresh;
				delete payload.user.access;
				// console.log("payload",payload);
				return payload;
            }
        })
    ],
    callbacks: {
        authorized({ auth, request: { nextUrl } }) {
            const isSignedIn = !!auth?.user?.role;
            const isOnSigninPage = nextUrl.pathname.startsWith("/sign-in");
            const isOnChatPage = nextUrl.pathname.startsWith("/chat");
            const isOnDashboardPage = nextUrl.pathname.startsWith("/dashboard");
            const isTokenValid = getIsTokenValid(auth);

            // console.log("auth", auth);
            if (isSignedIn && isTokenValid) {
                if (isOnChatPage) {
                    const isAuth = isUserAuthorized(auth.user.role, nextUrl.pathname);
                    if (isAuth) return true;

                } else if (isOnSigninPage) {

                    if (auth.user.role.toLowerCase() === "admin") {
                        return Response.redirect(new URL("/dashboard", nextUrl));
                    } else {
                        return Response.redirect(new URL("/chat", nextUrl));
                    }
					 
                } else if(isOnDashboardPage){
					
					if (auth.user.role.toLowerCase() === "student") {
                        return Response.redirect(new URL("/unauthorized", nextUrl));
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
            const isTokenValid = getIsTokenValid(token);
            if (!isTokenValid) {
                return {
                    ...session,
                    redirect: {
                        destination: "/sign-in",
                        permanent: false,
                    },
                };
            }
            session.accessToken = token.accessToken;
            session.refreshToken = token.refreshToken;
            const payload = { ...token };
            delete payload.token;
            session.user = token.user;
            return session;
        },
    },
    pages: {
        signIn: "/sign-in",
    }
};

export const { handlers, auth, signIn, signOut } = NextAuth(config);
