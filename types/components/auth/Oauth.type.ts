import { BuiltInProviderType } from "next-auth/providers";
import { ClientSafeProvider, LiteralUnion } from "next-auth/react";

export interface IOauth {
    providers: Record<
        LiteralUnion<BuiltInProviderType, string>,
        ClientSafeProvider
    >;
}
