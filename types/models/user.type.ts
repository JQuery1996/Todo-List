import mongoose from "mongoose";
import type { ObjectId } from "mongoose";

export interface IUser extends mongoose.Document {
    _id: ObjectId;
    name: string | null;
    email: string;
    password: string | null;
    image: string | null;
    emailVerified: string | null;
}
