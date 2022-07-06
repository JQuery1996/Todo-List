import NextLink from "next/link";
import {
    Box,
    Heading,
    Container,
    Divider,
    Badge,
    Button,
} from "@chakra-ui/react";

export default function NotFound() {
    return (
        <Container
            h="100vh"
            display="flex"
            justifyContent="center"
            alignItems="center"
            alignContent="center"
            flexDirection="column"
        >
            <Heading as="h1">Not Found</Heading>
            <Badge variant="outline" colorScheme="teal" fontSize="lg">
                The page you&apos;re looking for was not found.
            </Badge>

            <Divider my={6} />

            <Box my={6} textAlign="center">
                <NextLink href="/">
                    <Button colorScheme="teal"> Return to home</Button>
                </NextLink>
            </Box>
        </Container>
    );
}
