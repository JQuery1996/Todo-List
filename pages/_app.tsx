// import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import { SessionProvider } from "next-auth/react";
import theme from "lib/theme";
import Fonts from "components/fonts";
import Layout from "components/layouts/main";
import { AnimatePresence } from "framer-motion";

if (typeof window !== "undefined") window.history.scrollRestoration = "manual";

function MyApp({
    Component,
    pageProps: { session, ...pageProps },
    router,
}: AppProps) {
    return (
        <SessionProvider session={session}>
            <ChakraProvider theme={theme}>
                <Fonts />
                <Layout router={router}>
                    <AnimatePresence
                        exitBeforeEnter
                        initial={true}
                        onExitComplete={() => {
                            if (typeof window !== "undefined")
                                window.scrollTo({ top: 0 });
                        }}
                    >
                        <Component {...pageProps} />
                    </AnimatePresence>
                </Layout>
            </ChakraProvider>
        </SessionProvider>
    );
}

export default MyApp;
