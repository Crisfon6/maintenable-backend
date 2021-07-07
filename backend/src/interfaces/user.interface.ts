import { Request } from "express";
import { IUser } from "../models/user.model";



export interface IRequestUser extends Request{
    user?:any;
}

