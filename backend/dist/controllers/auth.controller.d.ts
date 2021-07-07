import { Request, Response } from "express";
import { IController } from "../interfaces/controller.interface";
import { IRequestUser } from "../interfaces/user.interface";
export declare class AuthController implements IController {
    path: string;
    router: import("express-serve-static-core").Router;
    constructor();
    initRoutes: () => void;
    login: (req: Request, res: Response) => Promise<Response<any, Record<string, any>> | undefined>;
    isAdmin: (req: IRequestUser, res: Response) => Promise<Response<any, Record<string, any>> | undefined>;
}
