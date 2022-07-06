import { mode, whiten, darken } from "@chakra-ui/theme-tools";
import { m } from "framer-motion";

// for whiten and darken method as amount parameter.
const amount = 10;

export const Button = {
    // 1. We can update the base sytle.
    baseStyle: {},
    // 2. We can add a new button sizs or extend existing.
    sizes: {},
    // 3. We can add a new visual variant.
    variants: {
        primary: (props: any) => ({
            bg: "primary",
            color: "white",
            _hover: {
                bg: mode(
                    darken("primary", amount),
                    whiten("primary", amount),
                )(props),
                boxshadow: "md",
            },
        }),
        primaryOutline: (props: any) => ({
            bg: "transparent",
            color: "primary",
            border: "1px solid",
            borderColor: "primary",
            _hover: {
                boxShadow: "md",
                transform: "scale(1.02)",
            },
        }),
        secondary: (props: any) => ({
            bg: "secondary",
            color: "white",
            _hover: {
                bg: mode(
                    darken("secondary", amount),
                    whiten("secondary", amount),
                )(props),
                boxShadow: "md",
            },
        }),
        google: (props: any) => ({
            bg: "google",
            color: "white",
            _hover: {
                bg: mode(
                    darken("google", amount),
                    whiten("google", amount),
                )(props),
                boxshadow: "md",
            },
        }),
        github: (props: any) => ({
            bg: "github",
            color: "white",
            _hover: {
                bg: mode(
                    darken("github", amount),
                    whiten("github", amount),
                )(props),
                boxshadow: "md",
            },
        }),
    },
    // 4. We can override defaultProps
    defaultProps: {},
};
