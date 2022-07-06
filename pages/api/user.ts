import type { NextApiRequest, NextApiResponse } from "next";
import nc from "next-connect";
import dbConnect from "lib/dbConnect";
import type { Mongoose } from "mongoose";
import User from "models/User";

const handler = nc<NextApiRequest, NextApiResponse>()
    .use(async (req, res, next) => {
        await dbConnect();
        next();
    })
    .get(async (req, res) => {
        const users = await User.find({});
        return res.status(200).json({ users });
    });

export default handler;
