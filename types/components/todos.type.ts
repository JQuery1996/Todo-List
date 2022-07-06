import mongoose, { ObjectId } from "mongoose";

export interface ITodo extends mongoose.Document {
    _id: ObjectId;
    name: string;
    user: ObjectId;
    createdAt: Date;
    updatedAt: Date;
}
