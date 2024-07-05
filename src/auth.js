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
				console.log("data",data);
				if (!res.ok) return null;

				return data;
			},
		}),
	],
	callbacks: {

		authorized({ auth, request: { nextUrl } }) {
			const isSignedIn = !!auth;
			const isOnSigninPage = nextUrl.pathname.startsWith("/sign-in");
			const isOnChatPage = nextUrl.pathname.startsWith("/chat");
			const isTokenValid = getIsTokenValid(auth?.accessToken);
			console.log("auth",auth);
			if (isSignedIn && isTokenValid) {
				if (isOnChatPage) {
					const isAuth = isUserAuthorized(
						auth.user,
						nextUrl.pathname
					);

					if(isAuth) return true;
					return Response.redirect(new URL("/unauthorized", nextUrl));


				} else if (isOnSigninPage) {
					return Response.redirect(new URL("/chat", nextUrl));
				}
			} else if (isOnChatPage) {
				return false;
			}

			// console.log("AUTH",auth)
			// console.log(auth?.user ? "Login olmus" : "login olmamis")
			return true;
		},

		async jwt({ token, user }) {
			console.log("user",user);
			console.log("token",token);
			return { ...user, ...token };
		},

		async session({ session, token }) {
			const isTokenValid = getIsTokenValid(token.accessToken);
			if(!isTokenValid) return null;

			session.accessToken = token.accessToken;
			session.user = token.user;
			return session;
		},
	},
	pages: {
		signIn: "/sign-in",
	},
};

export const { handlers, auth, signIn, signOut } = NextAuth(config);
