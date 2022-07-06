import type { ObjectId } from "mongoose";

export interface ITodo {
    name: string;
    user: ObjectId;
}
