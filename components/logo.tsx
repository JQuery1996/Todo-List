import Link from "next/link";
import Image from "next/image";
import { Text, useColorModeValue } from "@chakra-ui/react";
import styled from "@emotion/styled";

const LogoBox = styled.span`
    font-weight: bold;
    font-size: 18px;
    display: inline-flex;
    align-items: center;
    height: 30px;
    line-height: 20px;
    padding: 10px;

    &:hover img {
        transform: rotate(20deg);
    }
`;

export function Logo() {
    const footPrintImage = `/images/footprint${useColorModeValue(
        "",
        "-dark",
    )}.png`;

    return (
        <Link href="/">
            <a>
                <LogoBox>
                    <Image
                        src={footPrintImage}
                        width={20}
                        height={20}
                        alt="logo"
                    />
                    <Text
                        color={useColorModeValue("gray.800", "whiteAlpha.900")}
                        fontFamily="M PLUS ROUNDED 1c"
                        fontWeight="bold"
                        ml={3}
                    >
                        Todo Application
                    </Text>
                </LogoBox>
            </a>
        </Link>
    );
}
