import { NextApiRequest, NextApiResponse } from "next";
import dbConnect from "lib/dbConnect";
import Todo from "models/Todo";
import { unstable_getServerSession } from "next-auth";
import { authOptions } from "pages/api/auth/[...nextauth]";
import mongoose from "mongoose";

export async function createTodo(req: NextApiRequest, res: NextApiResponse) {
    try {
        const session = await unstable_getServerSession(req, res, authOptions);
        if (!session)
            return res.status(500).json({ message: "Invalid Authentication" });

        if (!req.body.todo)
            return res.status(400).json({ message: "Todo name must be set" });

        let todo = <string>req.body.todo;
        const _id = new mongoose.Types.ObjectId(session.user._id);

        const newTodo = new Todo({
            name: todo,
            user: _id,
        });
        await newTodo.save();
        return res.status(200).json(newTodo);
    } catch (error) {
        return res.status(500).json({ error: (<TypeError>error).message });
    }
}

export async function getTodos(req: NextApiRequest, res: NextApiResponse) {
    try {
        const session = await unstable_getServerSession(req, res, authOptions);
        if (!session)
            return res.status(400).json({ message: "Invalid Authentication" });

        const _id = new mongoose.Types.ObjectId(session.user._id);

        const userTodos = await Todo.find({ user: _id }).sort({
            createdAt: -1,
        });
        return res.status(200).json(userTodos);
    } catch (error) {
        res.status(500).json({ error: (<TypeError>error).message });
    }
}
