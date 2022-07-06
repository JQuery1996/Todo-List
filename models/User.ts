import { ObjectId } from "mongodb";
import mongoose, { Schema, model } from "mongoose";
import type { IUser } from "types/models/user.type";

const UserSchema = new Schema<IUser>(
    {
        name: { type: String },
        email: { type: String, required: true },
        password: { type: String },
        image: {
            type: String,
            default:
                "https://res.cloudinary.com/devatchannel/image/upload/v1602752402/avatar/avatar_cugq40.png",
        },
        emailVerified: { type: String, default: null },
    },
    { timestamps: true },
);

export default mongoose.models.User || model<IUser>("User", UserSchema);
