import NextAuth from "next-auth";
import type { NextAuthOptions } from "next-auth";

// import Adapter for MongoDB
import { MongoDBAdapter } from "@next-auth/mongodb-adapter";
import ClientPromise from "lib/mongodb";

// import Providers
import GoogleProvider from "next-auth/providers/google";
import GithubProvider from "next-auth/providers/github";
import FacebookProvider from "next-auth/providers/facebook";
import EmailProvider from "next-auth/providers/email";
import CredentialProvider from "next-auth/providers/credentials";

import dbConnect from "lib/dbConnect";
import User from "models/User";
import { IUser } from "types/models/user.type";
import { signInUser } from "utils/auth/signInUser";
import { registerUser } from "utils/auth/registerUser";
import { ERRORS } from "utils/ErrorType";

export const authOptions: NextAuthOptions = {
    // config one or more providers
    providers: [
        // Google Provider
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
            // for refresh token
            authorization: {
                params: {
                    prompt: "consent",
                    access_type: "offline",
                    response_type: "code",
                },
            },
        }),
        FacebookProvider({
            clientId: process.env.FACEBOOK_CLIENT_ID,
            clientSecret: process.env.FACEBOOK_CLIENT_SECRET,
        }),
        GithubProvider({
            clientId: process.env.GITHUB_CLIENT_ID,
            clientSecret: process.env.GITHUB_CLIENT_SECRET,
        }),
        EmailProvider({
            server: process.env.EMAIL_SERVER,
            from: process.env.EMAIL_FROM,
        }),
        CredentialProvider({
            name: "Credentials",
            credentials: {
                email: { label: "email", type: "email" },
                password: { label: "password", type: "password" },
            },
            async authorize(credentials, req) {
                await dbConnect();
                const email = credentials?.email;
                const password = credentials?.password;

                if (!email) throw new Error(ERRORS.EMAIL_REQUIRED);
                if (!password) throw new Error(ERRORS.PASSWORD_REQUIRED);

                const user = <IUser>await User.findOne({ email });
                if (user) return signInUser(email, password, user);
                else return registerUser(email, password);
            },
        }),
    ],

    // set secret
    secret: process.env.NEXT_AUTH_SECRET,

    // config Adapter
    adapter: MongoDBAdapter(ClientPromise),

    session: {
        strategy: "jwt",
    },

    jwt: {
        maxAge: 60 * 60 * 24 * 30,
    },

    // pages
    pages: {
        signIn: "/auth/signin",
        error: "/auth/signin",
        newUser: "/",
    },
    // callbacks
    callbacks: {
        async session({ session, token }) {
            if (session) {
                session.user._id = token.sub!;
                if (!session.user.name) session.user.name = session.user.email;
            }

            return JSON.parse(JSON.stringify(session));
        },
    },
};

export default NextAuth(authOptions);
