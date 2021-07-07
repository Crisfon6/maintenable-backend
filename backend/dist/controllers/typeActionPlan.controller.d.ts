import { Request, Response } from "express";
import { IController } from "../interfaces/controller.interface";
export declare class TypeActionPlanController implements IController {
    path: string;
    router: import("express-serve-static-core").Router;
    constructor();
    initRoutes: () => void;
    createTypeActionPlan: (req: Request, res: Response) => Promise<void>;
    getTypeActionPlan: (req: Request, res: Response) => Promise<void>;
    getById: (req: Request, res: Response) => Promise<void>;
    update: (req: Request, res: Response) => Promise<void>;
    delete: (req: Request, res: Response) => Promise<void>;
}
