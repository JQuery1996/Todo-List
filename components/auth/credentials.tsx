import {
    Box,
    InputGroup,
    InputLeftElement,
    InputRightElement,
    Input,
    FormHelperText,
    useColorModeValue,
    Button,
    useToast,
} from "@chakra-ui/react";
import type { ICredentials } from "types/components/auth/credentials.type";
import { EmailIcon, LockIcon } from "@chakra-ui/icons";
import { useState, useEffect } from "react";
import { signIn } from "next-auth/react";
import { redirect } from "utils/auth/redirect";
import { useRouter } from "next/router";
import { ERRORS } from "utils/ErrorType";

export function Credentials({ providers }: ICredentials) {
    const [show, showSet] = useState<boolean>(false);
    const [email, emailSet] = useState<string>("");
    const [password, passwordSet] = useState<string>("");
    const [loading, loadingSet] = useState<boolean>(false);

    const toast = useToast();
    const router = useRouter();

    async function handleSignIn() {
        loadingSet(true);
        const response = await signIn(providers.credentials.id, {
            email,
            password,
            redirect: true,
        });
        loadingSet(false);
    }

    useEffect(() => {
        if (router.query.error)
            toast({
                title: "Failed!",
                description: router.query.error,
                status: "error",
                variant: "left-accent",
                duration: 9000,
                isClosable: true,
            });
    }, [router, toast]);
    return (
        <Box
            w="80%"
            display="flex"
            gap={4}
            flexDirection="column"
            textAlign="center"
        >
            <InputGroup>
                <InputLeftElement pointerEvents="none">
                    <EmailIcon color="gray.300" mt="0.5rem" />
                </InputLeftElement>
                <Input
                    type="email"
                    placeholder="email@example.com"
                    borderColor={useColorModeValue(
                        "blackAlpha.300",
                        "whiteAlpha.500",
                    )}
                    value={email}
                    onChange={(e) => emailSet(e.target.value)}
                    size="lg"
                />
            </InputGroup>
            <InputGroup>
                <InputLeftElement pointerEvents="none">
                    <LockIcon color="gray.300" mt="0.5rem" />
                </InputLeftElement>
                <Input
                    pr="4.5rem"
                    type={show ? "text" : "password"}
                    placeholder="password"
                    borderColor={useColorModeValue(
                        "blackAlpha.300",
                        "whiteAlpha.500",
                    )}
                    value={password}
                    onChange={(e) => passwordSet(e.target.value)}
                    size="lg"
                />
                <InputRightElement width="4.5rem">
                    <Button
                        mt=".5rem"
                        h="1.75rem"
                        size="sm"
                        colorScheme="gray"
                        onClick={() => showSet(!show)}
                    >
                        {show ? "Hide" : "Show"}
                    </Button>
                </InputRightElement>
            </InputGroup>
            <Button
                isLoading={loading}
                loadingText="Waiting"
                colorScheme="gray"
                variant="solid"
                onClick={handleSignIn}
            >
                Sign in with credentials
            </Button>
        </Box>
    );
}
