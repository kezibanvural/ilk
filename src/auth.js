import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { login } from "./services/auth-service";
import { getIsTokenValid, isUserAuthorized } from "./helpers/auth";

const config = {
    providers: [
        Credentials({
            async authorize(credentials) {
                const res = await login(credentials);
                const data = await res.json(); 
                console.log("data", data);
                if (!res.ok) return null;
				const payload = {
					user: { ...data, role:"student" },
					accessToken: data.access,
					refreshToken:data.refresh
				};
				delete payload.user.refresh;
				delete payload.user.access;
				console.log("payload",payload);
				return payload;
            }
        })
    ],
    callbacks: {
        authorized({ auth, request: { nextUrl } }) {
            const isSignedIn = !!auth?.user?.role;
            const isOnSigninPage = nextUrl.pathname.startsWith("/sign-in");
            const isOnChatPage = nextUrl.pathname.startsWith("/chat");
            const isTokenValid = getIsTokenValid(auth?.accessToken);
            console.log("auth", auth);
            if (isSignedIn && isTokenValid) {
                if (isOnChatPage) {
                    const isAuth = isUserAuthorized(auth.user.role, nextUrl.pathname);
                    if (isAuth) return true;
                    if (auth.user.role.toLowerCase() === "student") {
                        return Response.redirect(new URL("/unauthorized", nextUrl));
                    }
                } else if (isOnSigninPage) {
                    if (auth.user.role.toLowerCase() === "student") {
                        return Response.redirect(new URL("/chat", nextUrl));
                    } else {
                        return Response.redirect(new URL("/", nextUrl));
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
            const isTokenValid = getIsTokenValid(token.accessToken);
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
			console.log("oooooooooooo",token);
            session.user = token.user;
            return session;
        },
    },
    pages: {
        signIn: "/sign-in",
    }
};

export const { handlers, auth, signIn, signOut } = NextAuth(config);
