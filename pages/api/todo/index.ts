import { NextApiRequest, NextApiResponse } from "next";
import nc from "next-connect";
import dbConnect from "lib/dbConnect";
import type { Mongoose } from "mongoose";
import Todo from "models/Todo";

import { createTodo, getTodos } from "utils/models/todoActions";

const handler = nc<NextApiRequest, NextApiResponse>()
    .use(async (req, res, next) => {
        await dbConnect();
        next();
    })
    .get(async (req, res) => {
        await getTodos(req, res);
    })
    .post(async (req, res) => {
        await createTodo(req, res);
    });

export default handler;
