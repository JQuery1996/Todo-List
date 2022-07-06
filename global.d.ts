import mongoose from "mongoose";
import type { Mongoose } from "mongoose";
import type { MongoClient } from "mongodb";

declare global {
    var mongoose: {
        conn: Mongoose | null;
        promise: Promise<Mongoose> | null;
    };
    var _mongoClientPromise: Promise<MongoClient>;
}
