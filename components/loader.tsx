import { Spinner } from "@chakra-ui/react";

export function Loader() {
    return (
        <Spinner
            thickness="4px"
            speed="0.65s"
            emptyColor="gray.200"
            color="teal"
            size="xl"
        />
    );
}
