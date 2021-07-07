import { Request, Response } from "express";
import { IController } from "../interfaces/controller.interface";
export declare class AccidentTrackingController implements IController {
    path: string;
    router: import("express-serve-static-core").Router;
    constructor();
    initRoutes: () => void;
    getAccidenTracking: (req: Request, res: Response) => Promise<Response<any, Record<string, any>> | undefined>;
    getById: (req: Request, res: Response) => Promise<void>;
    getInfoForCreateAccidentTracking: (req: Request, res: Response) => Promise<void>;
    create: (req: Request, res: Response) => Promise<void>;
    updateAccidentTracking: (req: Request, res: Response) => Promise<void>;
    deleteAccidentTracking: (req: Request, res: Response) => Promise<void>;
    getCsv: (req: Request, res: Response) => Promise<void>;
    createCSV: (ids: string[]) => Promise<string>;
}
