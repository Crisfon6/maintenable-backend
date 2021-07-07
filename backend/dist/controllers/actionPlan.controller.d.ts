import { Request, Response } from "express";
import { IController } from "../interfaces/controller.interface";
export declare class ActionPlanController implements IController {
    path: string;
    router: import("express-serve-static-core").Router;
    constructor();
    initRoutes: () => void;
    getActionPlan: (req: Request, res: Response) => Promise<void>;
    getActionPlanById: (req: Request, res: Response) => Promise<void>;
    getByAccident: (req: Request, res: Response) => Promise<void>;
    create: (req: Request, res: Response) => Promise<void>;
    update: (req: Request, res: Response) => Promise<void>;
    updateArray: (req: Request, res: Response) => Promise<void>;
}
