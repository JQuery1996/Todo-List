import { Logo } from "./logo";
import NextLink from "next/link";
import {
    Container,
    Box,
    Link,
    Stack,
    Heading,
    Flex,
    Menu,
    MenuItem,
    MenuList,
    MenuButton,
    IconButton,
    useColorModeValue,
    Avatar,
    type BoxProps,
    type LinkProps,
    useColorMode,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import { ThemeToggleButton } from "./theme-toggle-button";
import { ToggleButton } from "./toggle-button";
import { FiLogIn, FiLogOut } from "react-icons/fi";
import { signOut, useSession } from "next-auth/react";
import type { Session } from "next-auth";

const LinkItem = ({
    href,
    path,
    target,
    children,
    ...props
}: {
    href: string;
    path?: string;
    target?: string;
    children?: React.ReactNode;
} & LinkProps) => {
    const active = path === href;
    const inactiveColor = useColorModeValue("gray200", "whiteAlpha.900");
    return (
        <NextLink href={href!} passHref scroll={false}>
            <Link
                p={2}
                bg={active ? "grassTeal" : undefined}
                color={active ? "#202023" : inactiveColor}
                target={target}
                {...props}
            >
                {children}
            </Link>
        </NextLink>
    );
};

export const Nav = ({ path, ...props }: { path: string; props?: BoxProps }) => {
    const session = useSession().data!;
    return (
        <Box
            position="fixed"
            as="nav"
            w="100%"
            bg={useColorModeValue("#ffffff40", "#20202380")}
            css={{ backdropFilter: "blur(10px)" }}
            zIndex={1}
            {...props}
        >
            <Container
                display="flex"
                p={2}
                maxW="container.md"
                flexWrap="wrap"
                textAlign="center"
                justifyContent="space-between"
            >
                <Flex align="center" mr={5}>
                    <Heading as="h1" size="lg" letterSpacing={"tighter"}>
                        <Logo />
                    </Heading>
                </Flex>

                {/* <Stack
                    direction={{ base: "column", md: "row" }}
                    display={{ base: "none", md: "flex" }}
                    width={{ base: "full", md: "auto" }}
                    alignItems="center"
                    flexGrow={1}
                    mt={{ base: 4, md: 0 }}
                >
                    <LinkItem href="/" path={path}>
                        Home Page
                    </LinkItem>
                    <LinkItem href="/createTodo" path={path}>
                        Create Todo
                    </LinkItem>
                </Stack> */}

                <Box flex={1} textAlign="right">
                    <ThemeToggleButton />
                    <IconButton
                        display={{ base: "none", md: "inline-flex" }}
                        aria-label="signOut"
                        colorScheme={useColorModeValue("teal", "facebook")}
                        icon={<FiLogIn />}
                        onClick={() => signOut()}
                        ml={2}
                    />
                    <Box ml={2} display={{ base: "inline-block", md: "none" }}>
                        <Menu isLazy id="navbar-menu">
                            <MenuButton
                                as={IconButton}
                                icon={<HamburgerIcon />}
                                variant="outline"
                                aria-label="Options"
                            />
                            <MenuList>
                                {/* <NextLink href="/" passHref>
                                    <MenuItem as={Link}>Home Page</MenuItem>
                                </NextLink>
                                <NextLink href="/createTodo" passHref>
                                    <MenuItem as={Link}>Create Todo</MenuItem>
                                </NextLink> */}
                                <MenuItem as={Link} onClick={() => signOut()}>
                                    SignOut
                                </MenuItem>
                            </MenuList>
                        </Menu>
                    </Box>
                </Box>
            </Container>
        </Box>
    );
};
