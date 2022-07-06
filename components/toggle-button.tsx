import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
    ThemeTypings,
    IconButton,
    useColorMode,
    useColorModeValue,
} from "@chakra-ui/react";

import type { IToggleButton, STATE } from "types/components/toggle-button.type";

export function ToggleButton({
    FirstIcon,
    SecondIcon,
    firstColor,
    secondColor,
    onClick,
}: IToggleButton) {
    const [state, setState] = useState<STATE>("ON");

    function getState<TFirst = unknown, TSecond = unknown>(
        First: TFirst,
        Second: TSecond,
    ): TFirst | TSecond {
        return state === "ON" ? First : Second;
    }

    function toggleButton() {
        setState((state) => (state === "ON" ? "OFF" : "ON"));
        onClick();
    }
    return (
        <AnimatePresence exitBeforeEnter initial={false}>
            <motion.div
                style={{ display: "inline-block" }}
                key={useColorModeValue("light", "dark")}
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: 20, opacity: 0 }}
                transition={{ duration: 0.2 }}
            >
                <IconButton
                    aria-label="toggle button"
                    colorScheme={getState(firstColor, secondColor)}
                    icon={getState(<FirstIcon />, <SecondIcon />)}
                    onClick={toggleButton}
                />
            </motion.div>
        </AnimatePresence>
    );
}
