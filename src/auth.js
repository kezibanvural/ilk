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
				if (!res.ok) return null;

				return data;
			},
		}),
	],
	callbacks: {
		authorized({ auth, request: { nextUrl } }) {
			const isLoggedIn = !!auth?.access;
			const isOnSignInPage = nextUrl.pathname.startsWith("/sign-in");
			const isOnChatPage = nextUrl.pathname.startsWith("/chat");
			const isTokenValid = getIsTokenValid(auth?.access);

			console.log("isLoggedIn",isLoggedIn);
			console.log("isOnSignInPage",isOnSignInPage);
			console.log("isOnChatPage",isOnChatPage);
			console.log("isTokenValid",isTokenValid);

			if (isLoggedIn && isTokenValid) {
				if (isOnChatPage) {
					const isAuth = isUserAuthorized(
						auth.access,
						nextUrl.pathname
					);

					if(isAuth) return true;
					return Response.redirect(new URL("/unauthorized", nextUrl));


				} else if (isOnSignInPage) {
					return Response.redirect(new URL("/chat", nextUrl));
				}
			} else if (isOnChatPage) {
				return false;
			}

			console.log("AUTH",auth)
			console.log(auth?.user ? "Login olmus" : "login olmamis")
			return true;
		},

		//JWT datasina ihtiyac duyan her route icin bu callback cagrilir
		callbacks: {
			async jwt({ token, user }) {
			  console.log("user", user);
			  console.log("token", token);
			  
			  if (user) {
				token.accessToken = user.access; // user.access'i token.accessToken olarak ekle
				token.refreshToken = user.refresh; // user.refresh'i token.refreshToken olarak ekle
				token.id = user.id; // user.id'yi token.id olarak ekle
			  }
		  
			  return token;
			},
			async session({ session, token }) {
			  session.accessToken = token.accessToken; // token.accessToken'i session.accessToken olarak ekle
			  session.refreshToken = token.refreshToken; // token.refreshToken'i session.refreshToken olarak ekle
			  session.user.id = token.id; // token.id'yi session.user.id olarak ekle
		  
			  return session;
			}
		  }
		  
	},
	pages: {
		signIn: "/sign-in",
	},
};

export const { handlers, auth, signIn, signOut } = NextAuth(config);
