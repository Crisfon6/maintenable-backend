import { Document, Model } from "mongoose";
export interface IUser extends Document {
    _id: string;
    username: string;
    password: string;
    role: string;
    state: boolean;
    dataRegistration: Date;
}
export interface IUserModel extends Model<IUser> {
    generateJWT(): any;
}
export declare const User: Model<IUser & IUserModel, {}, {}>;
