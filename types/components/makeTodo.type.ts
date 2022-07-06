import { Dispatch, SetStateAction } from "react";
import type { ITodo } from "./todos.type";

export interface IMakeTodo {
    todosSet: Dispatch<SetStateAction<ITodo[]>>;
}
