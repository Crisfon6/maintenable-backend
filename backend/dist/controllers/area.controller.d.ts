import { Request, Response } from "express";
import { IController } from "../interfaces/controller.interface";
export declare class AreaController implements IController {
    path: string;
    router: import("express-serve-static-core").Router;
    constructor();
    initRoutes: () => void;
    getArea: (req: Request, res: Response) => Promise<void>;
    getById: (req: Request, res: Response) => Promise<void>;
    update: (req: Request, res: Response) => Promise<void>;
    delete: (req: Request, res: Response) => Promise<void>;
    create: (req: Request, res: Response) => Promise<Response<any, Record<string, any>> | undefined>;
}
