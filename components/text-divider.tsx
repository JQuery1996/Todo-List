import { Flex, Text, Divider, useColorModeValue } from "@chakra-ui/react";
import type { ITextDivider } from "types/components/text-divider.type";

export function TextDivider({ text, color }: ITextDivider) {
    const defaultColor = useColorModeValue("blackAlpha.500", "whiteAlpha.500");
    return (
        <Flex align="center" w="80%">
            <Divider borderColor={color ?? defaultColor} />
            <Text padding="2px" fontWeight="bold">
                {text}
            </Text>
            <Divider borderColor={color ?? defaultColor} />
        </Flex>
    );
}
