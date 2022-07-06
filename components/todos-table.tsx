import {
    TableContainer,
    Table,
    TableCaption,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    Text,
} from "@chakra-ui/react";
import type { ITodo } from "types/components/todos.type";
import { useSession } from "next-auth/react";
import moment from "moment-timezone";

export function TodosTable({ todos }: { todos: ITodo[] }) {
    const session = useSession().data!;
    return (
        <TableContainer>
            <Table variant="striped" colorScheme="teal" size="sm">
                <TableCaption fontWeight="bold" color="teal">
                    <Text
                        as="mark"
                        fontSize="sm"
                    >{`${session.user.name}'s Todos`}</Text>
                </TableCaption>
                <Thead>
                    <Tr>
                        <Th isNumeric>Id</Th>
                        <Th>Todo Name</Th>
                        <Th>Created At</Th>
                    </Tr>
                </Thead>
                <Tbody>
                    {todos.map((todo, index) => (
                        <Tr key={todo._id.toString()}>
                            <Td isNumeric>{index + 1}</Td>
                            <Td fontWeight="bold">{todo.name}</Td>
                            <Td>
                                {moment
                                    .utc(todo.createdAt)
                                    .tz("Africa/Cairo")
                                    .fromNow()}
                            </Td>
                        </Tr>
                    ))}
                </Tbody>
                <Tfoot>
                    <Tr>
                        <Th isNumeric>Id</Th>
                        <Th>Todo Name</Th>
                        <Th>Created At</Th>
                    </Tr>
                </Tfoot>
            </Table>
        </TableContainer>
    );
}
