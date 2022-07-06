import { mode } from "@chakra-ui/theme-tools";

export const styles = {
    global: (props: any) => ({
        body: {
            bg: mode("#f0e7db", "#202023")(props),
        },
    }),
};
