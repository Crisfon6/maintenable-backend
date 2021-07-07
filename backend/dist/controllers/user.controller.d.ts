import { IController } from "../interfaces/controller.interface";
import { Request, Response } from "express";
export declare class UserController implements IController {
    path: string;
    router: import("express-serve-static-core").Router;
    constructor();
    initRoutes: () => void;
    update: (req: Request, res: Response) => Promise<void>;
    delete: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
    getUsers: (req: Request, res: Response) => Promise<void>;
    getById: (req: Request, res: Response) => Promise<void>;
    createUser: (req: Request, res: Response) => Promise<Response<any, Record<string, any>> | undefined>;
}
