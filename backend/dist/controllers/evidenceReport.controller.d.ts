import { Request, Response } from "express";
import { IController } from "../interfaces/controller.interface";
export declare class EvidenceReportController implements IController {
    path: string;
    router: import("express-serve-static-core").Router;
    private Model;
    constructor();
    initRoutes: () => void;
    getInfoForCreate: (req: Request, res: Response) => Promise<void>;
    getAll: (req: Request, res: Response) => Promise<void>;
    get: (req: Request, res: Response) => Promise<void>;
    update: (req: Request, res: Response) => Promise<void>;
    getById: (req: Request, res: Response) => Promise<void>;
    create: (req: Request, res: Response) => Promise<void>;
    disable: (req: Request, res: Response) => Promise<void>;
    delete: (req: Request, res: Response) => Promise<void>;
}
