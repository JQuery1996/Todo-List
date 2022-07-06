import type {
    NextPage,
    GetServerSideProps,
    GetServerSidePropsContext,
    InferGetServerSidePropsType,
} from "next";
import { Title } from "components/title";
import { getCsrfToken, getProviders, useSession } from "next-auth/react";
import { Container, Box, Heading } from "@chakra-ui/react";
import { useColorModeValue } from "@chakra-ui/react";
import { Oauth } from "components/auth/oauth";
import { Email } from "components/auth/email";
import { unstable_getServerSession } from "next-auth";
import { authOptions } from "pages/api/auth/[...nextauth]";
import { TextDivider } from "components/text-divider";
import { Credentials } from "components/auth/credentials";

export default function SignIn({
    providers,
    csrfToken,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
    const { data: session } = useSession();
    const bgColor = useColorModeValue("whiteAlpha.500", "blackAlpha.200");
    return (
        !session && (
            <Container
                display="flex"
                justifyContent="center"
                alignItems="center"
                alignContent="center"
            >
                <Title
                    title="Sign in"
                    description="Oauth, Email and Credential Sign in"
                />
                <Box
                    w="container.md"
                    display="flex"
                    flexDirection="column"
                    gap={5}
                    justifyContent="center"
                    alignItems="center"
                    alignContent="center"
                    h="calc(100vh - 3rem)"
                    bg={bgColor}
                    borderRadius="lg"
                    my={6}
                    boxShadow="2xl"
                >
                    <Heading as="h2" variant="page-title">
                        Sign in Form
                    </Heading>
                    <Credentials providers={providers!} />
                    <TextDivider text="OR" />
                    <Oauth providers={providers!} />
                    <TextDivider text="OR" />
                    <Email providers={providers!} />
                </Box>
            </Container>
        )
    );
}

export async function getServerSideProps<GetServerSideProps>(
    context: GetServerSidePropsContext,
) {
    // get providers we configure it in pages/api/auth/[...nextauth].ts
    const session = await unstable_getServerSession(
        context.req,
        context.res,
        authOptions,
    );
    if (session)
        return {
            redirect: {
                destination: "/",
                permanent: false,
            },
        };
    const providers = await getProviders();
    const csrfToken = await getCsrfToken();
    return {
        props: {
            providers,
            csrfToken,
        },
    };
}
