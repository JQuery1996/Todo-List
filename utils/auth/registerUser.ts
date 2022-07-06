import bcrypt from "bcrypt";
import type { IUser } from "types/models/user.type";
import User from "models/User";
import { ERRORS } from "utils/ErrorType";

export async function registerUser(email: string, password: string) {
    const hashedPassword = await bcrypt.hash(password, 12);
    const registeredUser = new User({ email, password: hashedPassword });
    await registeredUser.save();
    throw new Error(ERRORS.VERIFY_EMAIL);
    return registeredUser;
}
