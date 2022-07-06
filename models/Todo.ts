import mongoose, { Schema, model } from "mongoose";
import type { ITodo } from "types/models/todo.type";

const TodoSchema = new Schema<ITodo>(
    {
        name: { type: String, required: true },
        user: { type: Schema.Types.ObjectId, ref: "User" },
    },
    { timestamps: true },
);

export default mongoose.models.Todo || model<ITodo>("Todo", TodoSchema);
