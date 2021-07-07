import { NextFunction, Response } from "express";
import { IRequestUser } from "../interfaces/user.interface";
export declare const roleValidatorMiddleware: (...roles: string[]) => (req: IRequestUser, res: Response, next: NextFunction) => Promise<Response<any, Record<string, any>> | undefined>;
