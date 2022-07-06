import { Box, Button } from "@chakra-ui/react";
import { signIn } from "next-auth/react";
import { IoLogoGoogle, IoLogoFacebook, IoLogoGithub } from "react-icons/io5";
import { IOauth } from "types/components/auth/Oauth.type";
import { redirect } from "utils/auth/redirect";

export function Oauth({ providers }: IOauth) {
    return (
        <>
            <Box textAlign="center" w="80%">
                <Button
                    leftIcon={<IoLogoGoogle />}
                    variant="google"
                    minWidth="full"
                    onClick={() => signIn(providers?.google.id, redirect)}
                    size="lg"
                >
                    Sign in with {providers?.google.name}
                </Button>
            </Box>
            <Box textAlign="center" w="80%">
                <Button
                    leftIcon={<IoLogoFacebook />}
                    colorScheme="facebook"
                    minWidth="full"
                    onClick={() => signIn(providers?.facebook.id, redirect)}
                    size="lg"
                >
                    Sign in with {providers?.facebook.name}
                </Button>
            </Box>
            <Box textAlign="center" w="80%">
                <Button
                    leftIcon={<IoLogoGithub />}
                    variant="github"
                    minWidth="full"
                    onClick={() => signIn(providers?.github.id, redirect)}
                    size="lg"
                >
                    Sign in with {providers?.github.name}
                </Button>
            </Box>
        </>
    );
}
