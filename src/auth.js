import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { login, refreshTokenService } from "./services/auth-service";
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
          user: { ...data },
          accessToken: data.access,
          refreshToken: data.refresh
        };
        delete payload.user.refresh;
        delete payload.user.access;
        return payload;
      }
    })
  ],
  callbacks: {
    async redirect({ url, baseUrl }) {
      return url.startsWith(baseUrl) ? url : baseUrl;
    },
    authorized({ auth, request: { nextUrl } }) {
      const isSignedIn = !!auth?.user?.role;
      const isOnSigninPage = nextUrl.pathname.startsWith("/sign-in");
      const isOnChatPage = nextUrl.pathname.startsWith("/chat");
      const isOnDashboardPage = nextUrl.pathname.startsWith("/dashboard");
      const isTokenValid = getIsTokenValid(auth);

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
        } else if (isOnDashboardPage) {
          if (auth.user.role.toLowerCase() === "student" && auth.user.role) {
            return Response.redirect(new URL("/unauthorized", nextUrl));
          }
        }
      } else if (isOnDashboardPage || isOnChatPage ) {
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
          redirect: { destination: "/sign-in", permanent: false },
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
  },
  // Güvenli host ayarları
//   trustHost: true,
  // Otomatik olarak geçerli host'u güvenilir olarak kabul eder
};

export const { handlers, auth, signIn, signOut } = NextAuth(config);