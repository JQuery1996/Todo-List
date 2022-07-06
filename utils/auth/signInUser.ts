import bcrypt from "bcrypt";
import { errorMonitor } from "events";
import type { IUser } from "types/models/user.type";
import { ERRORS } from "utils/ErrorType";

export async function signInUser(email: string, password: string, user: IUser) {
    if (!user.password) throw new Error(ERRORS.WITH_OUT_PASSWORD);
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) throw new Error(ERRORS.PASSWORD_DOES_NOT_MATCH);
    if (!user.emailVerified) throw new Error(ERRORS.VERIFY_EMAIL);
    return user;
}
