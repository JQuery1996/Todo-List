import {
    Stack,
    InputGroup,
    InputLeftAddon,
    Input,
    Heading,
    Button,
    FormControl,
    useToast,
} from "@chakra-ui/react";
import { ArrowForwardIcon } from "@chakra-ui/icons";
import { useState, useMemo } from "react";
import axios, { AxiosError } from "axios";
import { useRouter } from "next/router";
import type { IMakeTodo } from "types/components/makeTodo.type";
import { ITodo } from "types/components/todos.type";

export function MakeTodo({ todosSet }: IMakeTodo) {
    const [todo, setTodo] = useState<string>("");
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const router = useRouter();
    const toast = useToast();

    async function handleSubmit(e: React.SyntheticEvent) {
        e.preventDefault();
        try {
            setIsLoading(true);
            const response = await axios.post<ITodo>("/api/todo", { todo });
            setTodo("");
            todosSet((todos) => [response.data, ...todos]);
            toast({
                title: "Success!, Create a new todo",
                description: "We've created a new todo",
                status: "success",
                variant: "left-accent",
                duration: 9000,
                isClosable: true,
            });
        } catch (error) {
            toast({
                title: "Failed!",
                description: (error as AxiosError<{ message: string }>).response
                    ?.data.message,
                status: "error",
                variant: "left-accent",
                duration: 9000,
                isClosable: true,
            });
        }
        setIsLoading(false);
    }

    const isInvalid = useMemo(() => todo.trim().length === 0, [todo]);
    return (
        <Stack
            display="flex"
            flexDirection="column"
            gap={4}
            justifyContent="center"
            alignItems="center"
            alignContent="center"
        >
            <Heading as="h1" variant="page-title">
                Todo List
            </Heading>
            <form style={{ minWidth: "100%" }} onSubmit={handleSubmit}>
                <FormControl display="flex" gap={2}>
                    <InputGroup size="lg" variant="filled" fontWeight="bold">
                        <InputLeftAddon>Todo</InputLeftAddon>
                        <Input
                            type="text"
                            placeholder="Todo name"
                            _placeholder={{ color: "teal", opacity: 0.4 }}
                            value={todo}
                            onChange={(e) => setTodo(e.target.value)}
                            isInvalid={isInvalid}
                            errorBorderColor="red.200"
                            fontWeight="bold"
                        />
                    </InputGroup>
                    <Button
                        isLoading={isLoading}
                        loadingText="Submitting"
                        type="submit"
                        variant="solid"
                        colorScheme="teal"
                        size="lg"
                        rightIcon={<ArrowForwardIcon />}
                    >
                        Create Todo
                    </Button>
                </FormControl>
            </form>
        </Stack>
    );
}
