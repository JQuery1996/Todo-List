import { TodosTable } from "./todos-table";
import { useState, useEffect } from "react";
import type { ITodo } from "types/components/todos.type";
import axios from "axios";
import { Loader } from "./loader";
import { Container, Divider } from "@chakra-ui/react";
import { MakeTodo } from "./makeTodo";

export function Todos() {
    const [todos, todosSet] = useState<ITodo[]>([]);
    const [loading, loadingSet] = useState<boolean>(false);

    useEffect(() => {
        async function fetchTodos() {
            try {
                loadingSet(true);
                const response = await axios.get<ITodo[]>("/api/todo");
                todosSet(response.data);
                loadingSet(false);
            } catch (error) {
                console.log(error);
            }
        }

        fetchTodos();
    }, []);

    if (loading)
        return (
            <Container
                mt={4}
                maxW="container.md"
                display="flex"
                justifyContent="center"
                alignItems="center"
                alignContent="center"
            >
                <Loader />
            </Container>
        );

    return (
        <Container maxW="container.md" mt={4}>
            <MakeTodo todosSet={todosSet} />
            <Divider my={4} />
            <TodosTable todos={todos} />
        </Container>
    );
}
