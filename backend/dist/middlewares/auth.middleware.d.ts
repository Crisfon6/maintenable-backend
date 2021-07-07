import { NextFunction, Response } from "express";
import { IRequestUser } from "../interfaces/user.interface";
export declare function authMiddleware(req: IRequestUser, res: Response, next: NextFunction): Promise<Response<any, Record<string, any>> | undefined>;
