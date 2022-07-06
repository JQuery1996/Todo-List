import { JWT } from "next-auth/jwt";
import NextAuth, { DefaultSession } from "next-auth";
declare module "next-auth/jwt" {
    /** Returned by the `jwt` callback and `getToken`, when using JWT sessions */
    interface JWT {
        /** OpenID ID Token */
        userRole: "admin";
    }
}

declare module "next-auth" {
    interface Session {
        user: {
            _id: string;
        } & DefaultSession["user"];
    }
}
