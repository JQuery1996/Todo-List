declare namespace NodeJS {
    export interface ProcessEnv {
        DB_NAME: string;
        MONGODB_URI: string;
        JWT_SECRET: string;
        NEXTAUTH_URL: string;
        NEXT_AUTH_SECRET: string;
        GITHUB_CLIENT_ID: string;
        GITHUB_CLIENT_SECRET: string;
        GOOGLE_CLIENT_ID: string;
        GOOGLE_CLIENT_SECRET: string;
        FACEBOOK_CLIENT_ID: string;
        FACEBOOK_CLIENT_SECRET: string;
        EMAIL_SERVER: string;
        EMAIL_FROM: string;
    }
}
