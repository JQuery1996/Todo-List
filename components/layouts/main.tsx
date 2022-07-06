import Head from "next/head";
import { Box, Container } from "@chakra-ui/react";
import { useRouter } from "next/router";
import type { IMain } from "types/components/layouts/main.type";
import { ThemeToggleButton } from "components/theme-toggle-button";
import { Nav } from "components/nav";
import { useSession } from "next-auth/react";
export default function Main({ children, router }: IMain) {
    const { data: session } = useSession();
    return (
        <Box as="main" p={0} m={0}>
            {session && <Nav path={router.asPath} />}
            <Container maxW="container.md" pt={session ? "28" : 0}>
                {children}
            </Container>
        </Box>
    );
}
