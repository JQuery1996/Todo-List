import {
    Box,
    Input,
    InputGroup,
    InputLeftElement,
    Button,
} from "@chakra-ui/react";
import type { IEmail } from "types/components/auth/email.type";
import { useColorModeValue } from "@chakra-ui/react";
import { EmailIcon } from "@chakra-ui/icons";
import { useState } from "react";
import { signIn } from "next-auth/react";
import { redirect } from "utils/auth/redirect";

export function Email({ providers }: IEmail) {
    const [loading, loadingSet] = useState<boolean>(false);
    const [email, emailSet] = useState<string>("");

    async function handleSignin() {
        loadingSet(true);
        await signIn(providers.email.id, { email, ...redirect });
        loadingSet(true);
    }
    return (
        <Box
            display="flex"
            flexDirection="column"
            gap={4}
            textAlign="center"
            w="80%"
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
            <Button
                isLoading={loading}
                loadingText="waiting"
                colorScheme="green"
                onClick={handleSignin}
                size="lg"
            >
                Sign in with email
            </Button>
        </Box>
    );
}
