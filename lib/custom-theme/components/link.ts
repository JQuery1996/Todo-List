import { mode } from "@chakra-ui/theme-tools";

export const Link = {
    baseStyle: (props: any) => ({
        color: mode("#3d7aed", "#ff63c3")(props),
        textUnderlineOffset: 3,
    }),
};
