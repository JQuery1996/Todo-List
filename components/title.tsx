import Head from "next/head";
import type { ITitle } from "types/components/title.type";

export function Title({ title, description }: ITitle) {
    return (
        <Head>
            <title>{title}</title>
            {description && <meta name="description" content={description} />}
        </Head>
    );
}
